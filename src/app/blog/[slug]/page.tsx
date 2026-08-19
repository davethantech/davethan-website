import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { getPayloadClient } from '@/lib/payload';
import type { Post, Category, Media } from '@/payload-types';

// ─── ISR: Revalidate at most every 60 seconds ────────────────────────────────
export const revalidate = 60;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getImageUrl(heroImage: Post['heroImage']): string {
  if (!heroImage) return '/Blog-Hero.png';
  if (typeof heroImage === 'string') return heroImage;
  return (heroImage as Media).url ?? '/Blog-Hero.png';
}

function getCategoryTitle(category: Post['category']): string {
  if (!category) return '';
  if (typeof category === 'string') return category.toUpperCase();
  return ((category as Category).title ?? '').toUpperCase();
}

function formatDate(iso?: string | null): string {
  if (!iso) return '';
  const date = new Date(iso);
  const day = date.getDate();
  const suffix = ['TH', 'ST', 'ND', 'RD'][
    day % 10 < 4 && (day < 11 || day > 13) ? day % 10 : 0
  ];
  return `${day}${suffix} ${date.toLocaleString('en-GB', { month: 'long' }).toUpperCase()} ${date.getFullYear()}`;
}

// ─── Static params for pre-rendering ─────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'posts',
      limit: 200,
      select: { slug: true },
    });
    return docs.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
    });
    const post = docs[0] as Post | undefined;
    if (!post) return { title: 'Post Not Found | Davethan Blog' };
    return {
      title: `${post.title} | Davethan Blog`,
      description: post.excerpt ?? '',
      openGraph: {
        title: post.title,
        description: post.excerpt ?? '',
        images: [{ url: getImageUrl(post.heroImage) }],
        url: `https://davethan.tech/blog/${slug}`,
      },
    };
  } catch {
    return { title: 'Davethan Blog' };
  }
}

// ─── Rich Text renderer ───────────────────────────────────────────────────────

/**
 * Minimal lexical rich-text → HTML renderer.
 * Handles paragraph, heading, unordered-list, and list-item nodes.
 * Extend as needed for more node types.
 */
function renderLexicalNode(node: Record<string, unknown>, key: string | number): React.ReactNode {
  const type = node.type as string;
  const children = (node.children as Record<string, unknown>[] | undefined) ?? [];

  switch (type) {
    case 'root':
      return <>{children.map((c, i) => renderLexicalNode(c, i))}</>;

    case 'paragraph': {
      const text = children.map((c, i) => renderLexicalNode(c, i));
      return (
        <p key={key} className="text-[#5b6472] font-inter text-[14px] sm:text-[15px] leading-[1.8] mb-4">
          {text}
        </p>
      );
    }

    case 'heading': {
      const tag = (node.tag as string) || 'h2';
      const text = children.map((c, i) => renderLexicalNode(c, i));
      return tag === 'h2' ? (
        <h2 key={key} className="text-[#0a0d53] font-roboto font-bold text-[22px] sm:text-[26px] lg:text-[30px] mt-10 mb-5">
          {text}
        </h2>
      ) : (
        <h3 key={key} className="text-[#0a0d53] font-roboto font-bold text-[18px] sm:text-[20px] mt-8 mb-4">
          {text}
        </h3>
      );
    }

    case 'list': {
      const items = children.map((c, i) => renderLexicalNode(c, i));
      return node.listType === 'number' ? (
        <ol key={key} className="list-decimal list-inside space-y-2 mb-6 text-[#5b6472] font-inter text-[14px] sm:text-[15px] leading-[1.8]">
          {items}
        </ol>
      ) : (
        <ul key={key} className="list-disc list-inside space-y-2 mb-6 text-[#5b6472] font-inter text-[14px] sm:text-[15px] leading-[1.8]">
          {items}
        </ul>
      );
    }

    case 'listitem':
      return <li key={key}>{children.map((c, i) => renderLexicalNode(c, i))}</li>;

    case 'text': {
      let el: React.ReactNode = node.text as string;
      const format = (node.format as number) || 0;
      if (format & 1) el = <strong>{el}</strong>;
      if (format & 2) el = <em>{el}</em>;
      if (format & 8) el = <u>{el}</u>;
      return <span key={key}>{el}</span>;
    }

    case 'linebreak':
      return <br key={key} />;

    case 'quote':
      return (
        <blockquote key={key} className="border-l-4 border-[#06bae1] pl-6 my-6 text-[#5b6472] italic font-inter text-[15px] leading-relaxed">
          {children.map((c, i) => renderLexicalNode(c, i))}
        </blockquote>
      );

    default:
      return null;
  }
}

function RichTextContent({ content }: { content: Record<string, unknown> }) {
  const root = (content?.root as Record<string, unknown>) ?? content;
  return <>{renderLexicalNode(root, 'root')}</>;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const payload = await getPayloadClient();

  // Fetch the specific post by slug
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });

  const post = docs[0] as Post | undefined;
  if (!post) notFound();

  // Fetch related posts: same category, excluding current, max 3
  const categoryId =
    typeof post.category === 'string' ? post.category : (post.category as Category)?.id;

  const { docs: relatedDocs } = await payload.find({
    collection: 'posts',
    where: {
      and: [
        { 'category.id': { equals: categoryId } },
        { slug: { not_equals: slug } },
      ],
    },
    limit: 3,
    depth: 2,
  });
  const related = relatedDocs as Post[];

  const heroUrl = getImageUrl(post.heroImage);
  const categoryLabel = getCategoryTitle(post.category);
  const dateLabel = formatDate(post.publishedDate);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section className="bg-white pt-12 lg:pt-24 pb-0 text-center px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto">
            <p className="text-[#5b6472] font-inter font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-5">
              {dateLabel}&nbsp;·&nbsp;
              <span className="text-[#06bae1]">{categoryLabel}</span>
            </p>
            <h1 className="text-[#0a0d53] font-roboto font-bold text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.15] mb-5">
              {post.title}
            </h1>
            <p className="text-[#5b6472] font-inter text-[14px] sm:text-[16px] leading-relaxed max-w-[560px] mx-auto">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* ─── HERO IMAGE ─── */}
        <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[480px] mt-10">
          <Image
            src={heroUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        {/* ─── ARTICLE BODY ─── */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">

            {/* Mobile: Social share row */}
            <div className="flex items-center gap-6 mb-8 lg:hidden">
              <span className="text-[#0a0d53] font-inter font-bold text-[10px] uppercase tracking-widest shrink-0">
                SHARE:
              </span>
              {[
                { name: 'TWITTER', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://davethan.tech/blog/${slug}` },
                { name: 'FACEBOOK', url: `https://www.facebook.com/sharer/sharer.php?u=https://davethan.tech/blog/${slug}` },
                { name: 'LINKEDIN', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://davethan.tech/blog/${slug}` },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5b6472] font-inter font-bold text-[10px] uppercase tracking-widest hover:text-[#06bae1] transition-colors"
                >
                  {platform.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

              {/* ── Left: sidebar + article ── */}
              <div className="flex gap-8 flex-1 min-w-0">

                {/* Desktop social share sidebar */}
                <div className="hidden lg:flex flex-col gap-4 shrink-0 pt-2 w-[100px]">
                  <span className="text-[#0a0d53] font-inter font-bold text-[10px] uppercase tracking-widest">
                    SHARE
                  </span>
                  {[
                    { name: 'TWITTER', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://davethan.tech/blog/${slug}` },
                    { name: 'FACEBOOK', url: `https://www.facebook.com/sharer/sharer.php?u=https://davethan.tech/blog/${slug}` },
                    { name: 'LINKEDIN', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://davethan.tech/blog/${slug}` },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5b6472] font-inter font-bold text-[11px] uppercase tracking-widest hover:text-[#06bae1] transition-colors"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>

                {/* Article body — rendered from Payload's lexical rich text */}
                <article className="flex-1 min-w-0">
                  <RichTextContent content={post.content as Record<string, unknown>} />

                  {/* Back link */}
                  <div className="pt-8 mt-4 border-t border-[#e4e9f2]">
                    <Link
                      href="/blog"
                      className="text-[#0a0d53] font-poppins font-bold text-[13px] hover:text-[#06bae1] transition-colors inline-flex items-center gap-2"
                    >
                      ← Back to Blog
                    </Link>
                  </div>
                </article>
              </div>

              {/* ── Right: Sidebar ── */}
              <aside className="w-full lg:w-[280px] shrink-0 flex flex-col gap-6 lg:gap-8">

                {/* Details Card */}
                <div className="border border-[#e4e9f2] rounded-[16px] p-5 sm:p-6">
                  <p className="text-[#0a0d53] font-inter font-bold text-[10px] uppercase tracking-widest mb-5">
                    DETAILS
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: 'DATE', value: dateLabel },
                      { label: 'CATEGORY', value: categoryLabel },
                      { label: 'READ TIME', value: post.readTime ?? '5 Min' },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between border-b border-[#f0f2f5] pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-[#5b6472] font-inter text-[11px] uppercase tracking-widest">
                          {row.label}
                        </span>
                        <span className="text-[#0a0d53] font-inter font-bold text-[12px] sm:text-[13px] text-right">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author Card */}
                <div className="border border-[#e4e9f2] rounded-[16px] p-5 sm:p-6">
                  <p className="text-[#0a0d53] font-inter font-bold text-[10px] uppercase tracking-widest mb-5">
                    AUTHOR
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#06bae1] to-[#0a0d53] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-[16px]">
                        {post.author?.charAt(0)?.toUpperCase() ?? 'D'}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#0a0d53] font-poppins font-bold text-[14px] leading-tight">
                        {post.author ?? 'Davethan Team'}
                      </p>
                      <p className="text-[#06bae1] font-inter font-bold text-[10px] uppercase tracking-widest mt-1">
                        {post.authorRole ?? categoryLabel}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#5b6472] font-inter text-[12px] leading-relaxed">
                    Our engineers write about the threats and solutions shaping how growing businesses stay protected.
                  </p>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* ─── RELATED POSTS ─── */}
        {related.length > 0 && (
          <section className="py-12 lg:py-20 bg-white border-t border-[#e4e9f2]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[24px] sm:text-[28px] mb-8">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {related.map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group flex flex-col">
                    <div className="relative w-full h-[200px] rounded-[12px] overflow-hidden mb-4">
                      <Image
                        src={getImageUrl(rp.heroImage)}
                        alt={rp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[#06bae1] font-inter font-bold text-[10px] uppercase tracking-widest mb-2">
                      {getCategoryTitle(rp.category)}
                    </span>
                    <h4 className="text-[#0a0d53] font-roboto font-bold text-[16px] sm:text-[17px] leading-snug group-hover:text-[#06bae1] transition-colors">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
