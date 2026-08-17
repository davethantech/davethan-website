import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'The Blog | Davethan Technologies Limited',
  description: 'Stay up to date on tips, tricks & trends for IT, Cybersecurity & Cloud Strategy',
};

const blogPosts = [
  {
    title: '5 Signs Your IT Infrastructure Needs an Upgrade',
    snippet: "Slow systems and constant workarounds add up. Here's how to know it's time to modernize before it costs you more.",
    image: '/blog-post-1.png',
    category: 'MANAGED IT',
  },
  {
    title: 'Common Compliance Mistakes That Are Costing You Money',
    snippet: "Compliance isn't a checkbox exercise. Even well-run teams miss these gaps more often than you'd think.",
    image: '/blog-post-2.png',
    category: 'CYBERSECURITY',
  },
  {
    title: '5 Ways to Boost Your Team\'s Remote Work Security',
    snippet: "Distributed teams need more than a VPN. Here's what actually keeps remote work secure.",
    image: '/blog-post-3.png',
    category: 'REMOTE WORK',
  },
  {
    title: 'Why 24/7 Monitoring Matters More Than You Think',
    snippet: "Most outages don't happen during business hours. Here's what round-the-clock coverage actually prevents.",
    image: '/blog-post-4.png',
    category: 'MANAGED IT',
  },
  {
    title: 'How to Choose the Right Cloud Provider for Your Business',
    snippet: "Not all cloud platforms fit every business. Here's how to match the provider to how your team actually works.",
    image: '/blog-post-5.png',
    category: 'CLOUD',
  },
  {
    title: 'Setting Up Your Office for Long-Term IT Success',
    snippet: "The decisions you make early shape how easy (or painful) scaling your systems will be later.",
    image: '/blog-post-6.png',
    category: 'IT CONSULTANCY',
  }
];

const categories = ['MANAGED IT', 'CYBERSECURITY', 'CLOUD', 'IT CONSULTANCY'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* HERO SECTION */}
        <section className="bg-[#070933] py-20 lg:py-28 text-center px-4">
          <h1 className="text-white font-roboto font-bold text-[40px] sm:text-[48px] lg:text-[60px] tracking-wide mb-6">
            THE BLOG
          </h1>
          <p className="text-[#BFF9EA] font-inter font-bold text-[11px] sm:text-[13px] lg:text-[20px] letter-spacing-[1px] uppercase tracking-widest max-w-[900px] mx-auto leading-relaxed">
            STAY UP TO DATE ON TIPS, TRICKS & TRENDS FOR IT, CYBERSECURITY & CLOUD STRATEGY
          </p>
        </section>

        {/* BROWSE CATEGORIES */}
        <section className="border-b border-[#e4e9f2] bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-6 flex flex-row items-center gap-4 overflow-x-auto scrollbar-hide">
            <span className="text-[#0a0d53] font-poppins font-medium italic text-[16px] shrink-0">
              Browse the blog :
            </span>
            <div className="flex items-center gap-6 md:gap-10 shrink-0">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-[#0a0d53] font-inter font-bold text-[11px] uppercase tracking-widest hover:text-[#06bae1] transition-colors whitespace-nowrap"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED POST */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

              {/* Left: Image — use a wrapper that keeps the badge anchored to the image itself */}
              <div className="relative w-full lg:w-1/2 shrink-0">
                {/* Image container with a natural aspect ratio so the badge always aligns */}
                <div className="relative w-full rounded-[24px] overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/Blog-Hero.png"
                    alt="Featured Post"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Badge anchored to the top-left of the image at all zoom levels */}
                <div className="absolute top-4 left-6 -translate-y-1/2 bg-[#0a0d53] w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center text-white text-[11px] font-bold tracking-widest leading-tight z-10">
                  <span>READ</span>
                  <span>THE</span>
                  <span>LATEST</span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full lg:w-1/2 max-w-[600px]">
                <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-widest block mb-4">
                  CYBERSECURITY
                </span>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] mb-6">
                  Is Your Business Ready for a Cyberattack? Here&apos;s How to Prepare Early
                </h2>
                <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed mb-8">
                  A breach can be a stressful event for business owners, especially if you&apos;re not prepared. Recovering can feel like a daunting task, and if you don&apos;t plan ahead, you may end up scrambling to contain the damage at the last minute. However, with a bit of preparation...
                </p>
                <Link
                  href="#"
                  className="inline-block border-2 border-[#0a0d53] text-[#0a0d53] font-bold font-inter text-[12px] uppercase tracking-widest px-8 py-3 rounded-[8px] hover:bg-[#0a0d53] hover:text-white transition-colors"
                >
                  READ POST
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* POSTS GRID */}
        <section className="pb-24 lg:pb-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col h-full">

                  {/* Image Container */}
                  <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Vertical Category Ribbon */}
                    <div className="absolute top-0 left-8 bg-[#0a0d53] h-[140px] w-[36px] flex items-center justify-center rounded-b-[8px]">
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest -rotate-90 whitespace-nowrap">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-[#0a0d53] font-roboto font-bold text-[22px] leading-tight mb-4 group-hover:text-[#06bae1] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed mb-6 flex-1">
                      {post.snippet}
                    </p>
                    <Link href="#" className="text-[#0a0d53] font-poppins font-bold text-[13px] inline-flex items-center gap-2 group-hover:text-[#06bae1] transition-colors">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
