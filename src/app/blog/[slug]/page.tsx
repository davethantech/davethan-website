import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

// Static data — to be replaced by Payload CMS fetch
const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
}> = {
  'why-every-sme-needs-managed-it': {
    title: 'Why Every SME Needs Managed IT Support',
    category: 'Managed IT',
    date: 'August 1, 2026',
    author: 'Davethan Team',
    excerpt: 'Discover how proactive managed IT services help small businesses avoid costly downtime and stay productive.',
    content: [
      'For small and medium-sized businesses (SMEs), downtime is more than an inconvenience — it\'s a direct cost to revenue, reputation, and customer trust. Yet many SMEs still rely on reactive, break-fix IT support that only kicks in after problems occur.',
      'Managed IT services flip this model entirely. Instead of waiting for something to break, a managed IT provider proactively monitors your systems, identifies vulnerabilities, applies patches, and resolves issues — often before you even notice them.',
      'The financial case is compelling: businesses that invest in managed IT support report up to 40% fewer IT incidents and significantly lower overall IT costs compared to break-fix models. But beyond cost savings, there\'s the productivity benefit: your team spends less time troubleshooting and more time doing what they\'re paid to do.',
      'At Davethan, our managed IT service covers everything from endpoint monitoring and helpdesk support to backup management and infrastructure optimisation. We become an extension of your team — without the overhead of hiring in-house.',
      'Whether you\'re a 10-person startup or a 150-person SME, having a proactive IT partner can be the difference between smooth growth and costly disruption. If you\'re ready to take IT off your worry list, we\'re ready to talk.',
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Davethan Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="py-24 bg-[#070933]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-gray-400 text-xs">{post.date}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-space font-bold text-white leading-[1.15] mb-6">{post.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <div className="text-white font-bold text-sm">{post.author}</div>
                <div className="text-gray-400 text-xs">Davethan Technologies</div>
              </div>
            </div>
          </div>
        </section>

        {/* COVER IMAGE */}
        <div className="w-full h-80 bg-gradient-to-br from-cyan-50 to-cyan-100" />

        {/* CONTENT */}
        <article className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="text-gray-700 text-lg leading-[1.8]">{para}</p>
            ))}
          </div>
        </article>

        {/* RELATED POSTS / BACK LINK */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-500 font-bold hover:text-cyan-600 transition-colors">
            &larr; Back to Blog
          </Link>
        </div>

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
