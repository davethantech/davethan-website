import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Managed IT Support | Davethan Technologies Limited',
  description: 'Powerful Managed IT Support for growing businesses — 24/7 monitoring, helpdesk, infrastructure management and more.',
};

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO — dark photo style with ticker effect */}
        <section className="relative w-full bg-[#070933] overflow-hidden py-32">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-cyan-500 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">FOR GROWING BUSINESSES</span>
            <h1 className="text-5xl lg:text-7xl font-space font-bold text-white leading-[1.05] uppercase">
              POWERFUL <span className="text-cyan-400">MANAGED IT</span> SUPPORT
            </h1>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              We keep your systems running, your team productive, and your data secure — so you can focus entirely on growing your business.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                Get Started Today &rarr;
              </button>
            </Link>
          </div>
          {/* Subtle scrolling ticker strip */}
          <div className="absolute bottom-6 left-0 right-0 overflow-hidden opacity-10">
            <div className="whitespace-nowrap font-space text-6xl font-bold text-white tracking-widest animate-[marquee_30s_linear_infinite]">
              MANAGED IT · MONITORING · HELPDESK · INFRASTRUCTURE · SECURITY · CLOUD ·&nbsp;
            </div>
          </div>
        </section>

        {/* 3-FEATURE STRIP */}
        <section className="py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '24/7 Monitoring', desc: 'Round-the-clock surveillance of your entire IT estate with automated alerting and rapid response.' },
              { title: 'IT Helpdesk', desc: 'A dedicated helpdesk staffed by certified engineers available to resolve your issues fast.' },
              { title: 'Proactive Maintenance', desc: 'Scheduled maintenance and patch management to prevent downtime before it happens.' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-cyan-100 rounded-full mb-5" />
                <h3 className="font-bold text-[#070933] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block">WHAT YOU GET</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Everything your IT team needs — provided as a service</h2>
              <p className="text-gray-600 leading-relaxed">From infrastructure management to user support, our managed IT service covers every layer of your technology stack.</p>
              <ul className="space-y-4 pt-2">
                {[
                  'Network monitoring & management',
                  'Endpoint security & patch management',
                  'Cloud infrastructure management',
                  'User onboarding & offboarding',
                  'Backup & disaster recovery',
                  'Monthly performance reports',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-cyan-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[500px] bg-gray-50 rounded-2xl border border-gray-100" />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">OUR PROCESS</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">How Managed IT Works</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '01', label: 'Onboarding & Audit' },
                { num: '02', label: 'Proactive Monitoring' },
                { num: '03', label: 'Rapid Response' },
                { num: '04', label: 'Ongoing Optimisation' },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center text-[#070933] font-space font-bold text-xl mx-auto mb-4">{step.num}</div>
                  <h4 className="font-bold text-[#070933] text-sm">{step.label}</h4>
                </div>
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
