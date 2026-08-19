import Image from 'next/image';
import Link from 'next/link';
import { Check, Zap, ShoppingCart, TrendingUp, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Retail & E-commerce IT Solutions | Davethan Technologies',
  description: 'Scalable cloud infrastructure and cybersecurity for retail and e-commerce businesses. Keep storefronts fast, reliable, and secure during peak demand.',
};

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/industry-retail.png" alt="Retail & E-commerce" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[rgba(7,9,51,0.80)]" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] pt-[100px] lg:pt-[140px] pb-[80px] lg:pb-[120px]">
            <div className="inline-block bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full px-4 py-2 mb-6">
              <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-widest">Industry</span>
            </div>
            <h1 className="text-white font-roboto font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-tight mb-6 max-w-3xl">
              IT Solutions for Retail & E-commerce
            </h1>
            <p className="text-[rgba(255,255,255,0.75)] font-inter text-[15px] lg:text-[16px] leading-relaxed max-w-xl mb-8">
              Scalable cloud infrastructure that keeps storefronts fast and reliable during peak demand. In retail, a slow website or a checkout failure does not just frustrate customers — it costs you sales and reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <div className="bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[14px] px-8 py-4 rounded-[8px] transition-colors text-center">
                  Book a Free Consultation
                </div>
              </Link>
              <Link href="/services/cloud-services">
                <div className="border border-white text-white font-inter font-bold text-[14px] px-8 py-4 rounded-[8px] hover:bg-white/10 transition-colors text-center">
                  View Cloud Services
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CHALLENGES SECTION ─── */}
        <section className="py-16 sm:py-24 bg-[#f8f9fc]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="text-center mb-14">
              <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-widest block mb-4">::: INDUSTRY CHALLENGES</span>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[30px] sm:text-[38px] leading-tight max-w-2xl mx-auto">
                The IT Pressure Points in Retail & E-commerce
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: Zap, title: 'Peak Demand Spikes', desc: 'Black Friday, seasonal sales, and product launches can 10x your traffic overnight. Systems that cannot scale lose sales.' },
                { Icon: ShoppingCart, title: 'Checkout & Payment Security', desc: 'Payment data is a prime target. PCI-DSS compliance and end-to-end encryption protect both revenue and trust.' },
                { Icon: TrendingUp, title: 'Multi-Channel Complexity', desc: 'Managing IT across web, mobile, in-store POS, and warehousing requires unified infrastructure that actually connects.' },
                { Icon: ShieldCheck, title: 'Data Breach Exposure', desc: 'Customer data — addresses, payment details, browsing history — is a liability if not properly secured and managed.' },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-[16px] p-8 border border-[#e4e9f2] flex flex-col gap-4">
                  <div className="w-[48px] h-[48px] bg-[#0a0d53] rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-[22px] h-[22px] text-[#06bae1]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#0a0d53] font-roboto font-bold text-[17px]">{title}</h3>
                  <p className="text-[#5b6472] font-inter text-[13px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW WE HELP ─── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-widest block">::: HOW DAVETHAN HELPS</span>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[30px] sm:text-[38px] leading-tight">
                  Infrastructure That Scales as Fast as Your Ambitions
                </h2>
                <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed">
                  We design cloud infrastructure that absorbs demand spikes without breaking a sweat — so your storefront stays live, your checkout stays fast, and your customers stay loyal. From auto-scaling cloud environments to POS integration and PCI-DSS compliance, we build retail IT that actually performs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {[
                    'Auto-Scaling Cloud Architecture', 'PCI-DSS Payment Compliance',
                    'Multi-Channel Integration', '24/7 Uptime Monitoring',
                    'CDN & Performance Optimisation', 'Cybersecurity for POS Systems',
                    'Disaster Recovery Planning', 'E-commerce Platform Hosting',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-[18px] h-[18px] bg-[#06bae1] rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-[10px] h-[10px] text-white stroke-[3]" />
                      </div>
                      <span className="text-[#0a0d53] font-inter font-medium text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link href="/contact">
                    <div className="inline-flex items-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[14px] px-8 py-4 rounded-[8px] transition-colors">
                      Talk to Our Team
                    </div>
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-[520px] relative min-h-[360px] sm:min-h-[440px] rounded-[20px] overflow-hidden shrink-0">
                <Image src="/industry-section-main.png" alt="Retail IT Solutions" fill sizes="(max-width: 1024px) 100vw, 520px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── OUTCOMES ─── */}
        <section className="py-16 sm:py-20 bg-[#070933]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="text-center mb-14">
              <h2 className="text-white font-roboto font-bold text-[30px] sm:text-[36px]">Outcomes for Retail Clients</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { val: '3x', label: 'Faster deployment speed', sub: 'vs. previous infrastructure' },
                { val: '0%', label: 'Unplanned downtime', sub: 'during peak retail events' },
                { val: '99.9%', label: 'Uptime SLA maintained', sub: 'across all hosted storefronts' },
              ].map((stat, i) => (
                <div key={i} className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[16px] p-8 flex flex-col gap-2">
                  <span className="text-[#06bae1] font-space-grotesk font-bold text-[48px] leading-none">{stat.val}</span>
                  <span className="text-white font-inter font-bold text-[16px]">{stat.label}</span>
                  <span className="text-[rgba(255,255,255,0.5)] font-inter text-[12px]">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RELATED SERVICES ─── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] text-center">
            <h2 className="text-[#0a0d53] font-roboto font-bold text-[28px] sm:text-[36px] mb-12">
              Services We Deploy for Retail Businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Managed IT', href: '/services/managed-it' },
                { label: 'Cybersecurity', href: '/services/cybersecurity' },
                { label: 'Cloud Services', href: '/services/cloud-services' },
                { label: 'IT Consultancy', href: '/services/it-consultancy' },
              ].map((s, i) => (
                <Link key={i} href={s.href} className="group bg-[#f8f9fc] border border-[#e4e9f2] rounded-[12px] px-6 py-6 flex items-center justify-between hover:border-[#06bae1] hover:shadow-[0_4px_20px_rgba(6,186,225,0.15)] transition-all">
                  <span className="text-[#0a0d53] font-roboto font-bold text-[15px]">{s.label}</span>
                  <span className="text-[#06bae1] text-[18px] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 sm:py-20 bg-white border-t border-[#f0f4f8]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="bg-white border border-[#e4e9f2] rounded-[24px] shadow-[0px_4px_18px_4px_rgba(191,249,234,0.4)] px-8 sm:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-roboto font-bold text-[#0a0d53] text-[24px] sm:text-[28px] leading-tight mb-3 max-w-[600px]">
                  Ready to build infrastructure your sales can actually rely on?
                </h3>
                <p className="font-inter text-[#5b6472] text-[14px]">
                  Start with a free 30-minute consultation. No commitment, just clarity.
                </p>
              </div>
              <Link href="/contact" className="shrink-0">
                <div className="bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[14px] px-8 py-4 rounded-[8px] transition-colors whitespace-nowrap">
                  Book Your Free Call
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
