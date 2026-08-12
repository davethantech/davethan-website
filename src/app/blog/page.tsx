import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Blog | Davethan Technologies Limited',
  description: 'IT insights, industry news, and expert technology guides from the Davethan team.',
};

// Static placeholder posts — will be replaced by Payload CMS data
const posts = [
  { slug: 'why-every-sme-needs-managed-it', title: 'Why Every SME Needs Managed IT Support', category: 'Managed IT', date: 'August 1, 2026', excerpt: 'Discover how proactive managed IT services help small businesses avoid costly downtime and stay productive.' },
  { slug: 'top-5-cybersecurity-threats', title: 'Top 5 Cybersecurity Threats Facing UK Businesses in 2026', category: 'Cybersecurity', date: 'July 20, 2026', excerpt: 'From ransomware to insider threats, we break down the biggest security risks and how to defend against them.' },
  { slug: 'cloud-migration-guide', title: 'A Practical Guide to Cloud Migration for Non-Technical Business Owners', category: 'Cloud Services', date: 'July 10, 2026', excerpt: 'Everything you need to know before moving your business to the cloud — in plain English.' },
  { slug: 'it-strategy-vs-break-fix', title: 'IT Strategy vs Break-Fix: Which Is Right for Your Business?', category: 'IT Consultancy', date: 'June 28, 2026', excerpt: 'We compare reactive break-fix IT support to strategic IT planning and explain which approach drives better ROI.' },
  { slug: 'gdpr-healthcare-checklist', title: 'GDPR Compliance Checklist for Healthcare Providers', category: 'Compliance', date: 'June 15, 2026', excerpt: 'A step-by-step checklist to ensure your healthcare organisation meets UK GDPR requirements.' },
  { slug: 'remote-working-security', title: 'How to Secure Your Remote Workforce in 2026', category: 'Cybersecurity', date: 'June 1, 2026', excerpt: 'Remote work is here to stay — here\'s how to ensure your employees can work safely from anywhere.' },
];

const categories = ['All', 'Managed IT', 'Cybersecurity', 'Cloud Services', 'IT Consultancy', 'Compliance'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="py-24 bg-[#070933]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase block mb-3">OUR BLOG</span>
            <h1 className="text-5xl lg:text-6xl font-space font-bold text-white mb-6">IT Insights & Guides</h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Expert articles, guides, and industry updates from the Davethan Technologies team.
            </p>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section className="border-b border-gray-100 py-6 sticky top-0 bg-white z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} className="shrink-0 px-5 py-2 rounded-full border border-gray-200 text-[#070933] font-semibold text-sm hover:bg-cyan-50 hover:border-cyan-300 transition-colors first:bg-[#070933] first:text-white first:border-[#070933]">
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full border border-gray-100 rounded-xl overflow-hidden hover:shadow-[0px_8px_30px_rgba(6,186,225,0.12)] hover:border-cyan-200 transition-all">
                    {/* Placeholder image */}
                    <div className="h-48 bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-200" />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h2 className="font-space font-bold text-[#070933] text-lg leading-tight group-hover:text-cyan-600 transition-colors">{post.title}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                      <div className="pt-2 text-cyan-500 font-bold text-sm">Read more &rarr;</div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
