import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Cloud Services | Davethan Technologies Limited',
  description: 'Scalable, secure cloud solutions — cloud migration, managed cloud, SaaS licensing, hybrid cloud and more.',
};

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative w-full bg-gradient-to-br from-[#070933] to-[#0a1a5c] py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">CLOUD SERVICES</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-white leading-[1.1]">
                Scalable Cloud Solutions <span className="text-cyan-400">Built for You</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                Move to the cloud with confidence. Davethan handles your migration, management, and optimisation — so you get all the benefits without the complexity.
              </p>
              <Link href="/contact">
                <button className="bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                  Get Cloud Ready &rarr;
                </button>
              </Link>
            </div>
            <div className="flex-1 h-[400px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="space-y-3 text-center">
                <div className="w-24 h-24 bg-cyan-400/20 rounded-full mx-auto border-2 border-dashed border-cyan-400/50 animate-pulse" />
                <div className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Cloud Infrastructure</div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOUD SERVICES */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">WHAT WE OFFER</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Cloud Solutions for Modern Business</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Cloud Migration', desc: 'Seamless migration of your workloads to Azure, AWS, or Google Cloud with zero-downtime planning.' },
                { title: 'Managed Cloud', desc: 'Ongoing monitoring, management, and cost optimisation of your cloud environment.' },
                { title: 'SaaS Licensing & Management', desc: 'Microsoft 365, Google Workspace, and other SaaS tool procurement and management.' },
                { title: 'Hybrid Cloud Architecture', desc: 'Design and deployment of hybrid cloud environments for maximum flexibility and security.' },
                { title: 'Cloud Backup & Disaster Recovery', desc: 'Automated cloud backups and rapid recovery solutions to protect your critical data.' },
                { title: 'Cloud Security', desc: 'Identity management, access control, and security hardening for your cloud environment.' },
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

        {/* CLOUD BENEFITS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[450px] bg-gray-50 rounded-2xl border border-gray-100" />
            <div className="space-y-6">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block">CLOUD BENEFITS</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Why move to the cloud with Davethan?</h2>
              <div className="grid grid-cols-2 gap-6 pt-2">
                {[
                  { stat: '99.9%', label: 'Uptime SLA' },
                  { stat: '40%', label: 'Cost Reduction' },
                  { stat: '3x', label: 'Faster Deployments' },
                  { stat: '24/7', label: 'Cloud Support' },
                ].map((item) => (
                  <div key={item.label} className="bg-cyan-50 rounded-xl p-5 text-center">
                    <div className="text-3xl font-space font-bold text-cyan-600 mb-1">{item.stat}</div>
                    <div className="text-xs text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <button className="mt-4 bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                  Talk to Our Cloud Team
                </button>
              </Link>
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
