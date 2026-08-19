import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { blogPosts } from '../data';

// ─── Static post content ─────────────────────────────────────────────────────
// Replace with a Payload CMS fetch when CMS is connected.

type Post = {
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  sections: { heading: string; body: string }[];
  conclusion: { label: string; heading: string; body: string };
};

const posts: Record<string, Post> = {
  'is-your-business-ready-for-a-cyberattack': {
    title: "Is Your Business Ready for a Cyberattack? Here's How to Prepare Early",
    category: 'CYBERSECURITY',
    date: '23RD NOVEMBER 2024',
    author: 'Davethan Security Team',
    authorRole: 'CYBERSECURITY',
    readTime: '6 Min',
    excerpt:
      'Dive into the world of proactive security and learn how to protect your business before an incident happens.',
    heroImage: '/Blog-Hero.png',
    sections: [
      {
        heading: 'Understanding Your Current Risk',
        body: "In today's threat landscape, understanding your current risk exposure is paramount. Before defending against an attack, it's crucial to conduct a comprehensive audit of existing systems, identifying vulnerabilities, outdated software, and areas where security can be strengthened. By diving into the intricacies of day-to-day operations, businesses can pinpoint the exact gaps that hinder resilience.\n\nTaking a holistic view, consider not only internal systems but also external factors influencing exposure. Analyze recent industry incidents, threat trends, and compliance benchmarks. This comprehensive understanding lays the foundation for a strategic response plan, ensuring your efforts are targeted at the areas that will yield the most protection.",
      },
      {
        heading: 'Building a Response Plan',
        body: "Armed with insight from your risk audit, the next step is crafting a tailored incident response plan. This involves more than just installing tools — it's about defining clear roles, escalation paths, and communication procedures for the moment something goes wrong.\n\nIntroduce automation and monitoring as an ally in the response process. Automated alerting and integrated security tooling can dramatically shorten detection time. As well — training your team and equipping them with the skills to recognize and report threats ensures both systems and people are ready.",
      },
      {
        heading: 'Continuous Monitoring for Long-Term Security',
        body: "Security isn't a one-time fix; it's an ongoing commitment. After implementing initial changes, regularly review and reassess their effectiveness. Monitor key indicators, gather feedback from your team, and stay agile in response to evolving threats.\n\nEncourage a culture of vigilance within the organization. Employees at every level should feel empowered to flag anything unusual and contribute to the security effort. By fostering a culture that embraces change and values efficiency, businesses can ensure that resilience becomes ingrained in the DNA of the organization.",
      },
    ],
    conclusion: {
      label: 'CONCLUSION',
      heading: "Preparedness isn't merely about buying tools",
      body: "In conclusion, protecting your business isn't a one-time initiative but a dynamic process that requires ongoing commitment and adaptability. By understanding your current risk, building a targeted response plan, and embracing a culture of continuous monitoring, you can face whatever comes next with confidence.",
    },
  },
};

// Populate remaining slugs with placeholder content until CMS is connected
for (const bp of blogPosts) {
  if (!posts[bp.slug]) {
    posts[bp.slug] = {
      title: bp.title,
      category: bp.category,
      date: 'AUGUST 2026',
      author: 'Davethan Team',
      authorRole: bp.category,
      readTime: '5 Min',
      excerpt: bp.snippet,
      heroImage: bp.image,
      sections: [
        {
          heading: 'Coming Soon',
          body: 'Full article content will be available via the CMS shortly. Check back soon for the complete post.',
        },
      ],
      conclusion: {
        label: 'STAY TUNED',
        heading: 'More insights coming your way',
        body: 'We regularly publish articles on IT, cybersecurity, and cloud strategy tailored to SMEs. Subscribe to our newsletter to be the first to know.',
      },
    };
  }
}

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found | Davethan Blog' };
  return {
    title: `${post.title} | Davethan Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  // Related posts: same category, exclude current slug, max 3
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section className="bg-white pt-12 lg:pt-24 pb-0 text-center px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto">
            {/* Date · Category */}
            <p className="text-[#5b6472] font-inter font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-5">
              {post.date}&nbsp;·&nbsp;
              <span className="text-[#06bae1]">{post.category}</span>
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
            src={post.heroImage}
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
                { name: 'LINKEDIN', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://davethan.tech/blog/${slug}` }
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

              {/* ── Left: Desktop social share sidebar + article text ── */}
              <div className="flex gap-8 flex-1 min-w-0">

                {/* Desktop social share sidebar */}
                <div className="hidden lg:flex flex-col gap-4 shrink-0 pt-2 w-[100px]">
                  <span className="text-[#0a0d53] font-inter font-bold text-[10px] uppercase tracking-widest">
                    SHARE
                  </span>
                  {[
                    { name: 'TWITTER', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://davethan.tech/blog/${slug}` },
                    { name: 'FACEBOOK', url: `https://www.facebook.com/sharer/sharer.php?u=https://davethan.tech/blog/${slug}` },
                    { name: 'LINKEDIN', url: `https://www.linkedin.com/sharing/share-offsite/?url=https://davethan.tech/blog/${slug}` }
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

                {/* Article content */}
                <article className="flex-1 min-w-0 space-y-10 lg:space-y-12">

                  {/* Sections */}
                  {post.sections.map((section, idx) => (
                    <div key={idx}>
                      <h2 className="text-[#0a0d53] font-roboto font-bold text-[22px] sm:text-[26px] lg:text-[30px] mb-5">
                        {section.heading}
                      </h2>
                      <div className="space-y-4">
                        {section.body.split('\n\n').map((para, pIdx) => (
                          <p key={pIdx} className="text-[#5b6472] font-inter text-[14px] sm:text-[15px] leading-[1.8]">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Conclusion */}
                  <div className="pt-2">
                    <span className="text-[#06bae1] font-inter font-bold text-[10px] sm:text-[11px] uppercase tracking-widest block mb-3">
                      {post.conclusion.label}
                    </span>
                    <h2 className="text-[#0a0d53] font-roboto font-bold text-[22px] sm:text-[26px] lg:text-[30px] mb-5">
                      {post.conclusion.heading}
                    </h2>
                    <p className="text-[#5b6472] font-inter text-[14px] sm:text-[15px] leading-[1.8]">
                      {post.conclusion.body}
                    </p>
                  </div>

                  {/* Back link */}
                  <div className="pt-2">
                    <Link
                      href="/blog"
                      className="text-[#0a0d53] font-poppins font-bold text-[13px] hover:text-[#06bae1] transition-colors inline-flex items-center gap-2"
                    >
                      ← Back to Blog
                    </Link>
                  </div>

                </article>
              </div>

              {/* ── Right: Sidebar (stacks below on mobile) ── */}
              <aside className="w-full lg:w-[280px] shrink-0 flex flex-col gap-6 lg:gap-8">

                {/* Details Card */}
                <div className="border border-[#e4e9f2] rounded-[16px] p-5 sm:p-6">
                  <p className="text-[#0a0d53] font-inter font-bold text-[10px] uppercase tracking-widest mb-5">
                    DETAILS
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: 'DATE', value: post.date },
                      { label: 'CATEGORY', value: post.category },
                      { label: 'READ TIME', value: post.readTime },
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
                    <div className="w-[44px] h-[44px] rounded-full bg-[#06bae1] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-[16px]">D</span>
                    </div>
                    <div>
                      <p className="text-[#0a0d53] font-poppins font-bold text-[14px] leading-tight">
                        {post.author}
                      </p>
                      <p className="text-[#06bae1] font-inter font-bold text-[10px] uppercase tracking-widest mt-1">
                        {post.authorRole}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#5b6472] font-inter text-[12px] leading-relaxed">
                    Our security engineers write about the threats and defenses shaping how growing businesses stay protected.
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
                {related.map((rp, idx) => (
                  <Link key={idx} href={`/blog/${rp.slug}`} className="group flex flex-col">
                    <div className="relative w-full h-[200px] rounded-[12px] overflow-hidden mb-4">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[#06bae1] font-inter font-bold text-[10px] uppercase tracking-widest mb-2">
                      {rp.category}
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
