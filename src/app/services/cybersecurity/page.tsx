import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Cybersecurity | Davethan Technologies Limited',
  description: 'Proactive cybersecurity defence for your business — threat detection, vulnerability assessment, incident response, and compliance advisory.',
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative w-full bg-[#070933] overflow-hidden py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTYwIDBMMCAwTDAgNjBMNjAgNjBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoNiwyMjYsMjQxLC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">WELCOME TO DAVETHAN</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-white leading-[1.1]">
                Proactive Defense<br />
                <span className="text-cyan-400">For Your Business.</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                From malware and ransomware to phishing attacks — we protect your organisation before threats reach your doors.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                    Get Started &rarr;
                  </button>
                </Link>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-white font-semibold border border-white/20">
                  60+ Businesses Protected
                </div>
              </div>
            </div>
            <div className="flex-1 h-[400px] bg-white/5 rounded-2xl border border-white/10" />
          </div>
        </section>

        {/* DUAL PILLARS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block">OUR APPROACH</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Staying Ahead of Threats</h2>
              <p className="text-gray-600 leading-relaxed">
                Cyberthreats evolve daily. Our security-first approach combines real-time monitoring, intelligent threat intelligence, and rapid incident response to keep your business protected — always.
              </p>
              <Link href="/contact">
                <button className="text-[#070933] font-bold border-b-2 border-cyan-400 pb-1 hover:text-cyan-500 transition-colors">
                  Learn More &rarr;
                </button>
              </Link>
            </div>
            <div className="h-[400px] bg-gray-50 rounded-2xl border border-gray-100" />
          </div>
        </section>

        {/* OUR EXCLUSIVE SERVICES */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">SERVICES</span>
                <h2 className="text-4xl font-space font-bold text-[#070933]">Our Exclusive Services</h2>
              </div>
              <Link href="/services" className="text-[#070933] font-bold hover:text-cyan-500 transition-colors hidden md:block">
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Threat Detection & Monitoring', desc: '24/7 real-time detection of suspicious activities across your entire IT environment.' },
                { title: 'Vulnerability Assessment', desc: 'Systematic scanning and evaluation of your systems to uncover security weaknesses before attackers do.' },
                { title: 'Incident Response', desc: 'Rapid containment and recovery when security events occur, minimising damage and downtime.' },
                { title: 'Compliance & Risk Advisory', desc: 'Guidance on GDPR, ISO 27001, and industry-specific cybersecurity compliance frameworks.' },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full mb-5" />
                  <h3 className="font-bold text-[#070933] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
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
