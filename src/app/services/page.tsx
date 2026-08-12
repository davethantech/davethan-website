import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'IT Services | Davethan Technologies Limited',
  description: 'Explore our full range of IT services including Managed IT, Cybersecurity, IT Consultancy, and Cloud Services.',
};

const services = [
  { title: 'Managed IT', slug: 'managed-it', desc: 'Round-the-clock monitoring, maintenance, and support for your entire IT infrastructure.' },
  { title: 'Cybersecurity', slug: 'cybersecurity', desc: 'Proactive threat detection and compliance solutions to keep your business protected.' },
  { title: 'IT Consultancy', slug: 'it-consultancy', desc: 'Strategic technology planning to align your IT investment with business goals.' },
  { title: 'Cloud Services', slug: 'cloud-services', desc: 'Scalable cloud infrastructure and migration support for modern businesses.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="w-full py-28 px-4 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase">OUR SERVICES</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-[#070933] leading-[1.1]">
                IT Solutions for <span className="text-cyan-500">Your Business</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
                We deliver comprehensive IT services that help your business operate securely, efficiently, and at scale.
              </p>
              <Link href="/contact">
                <Button size="lg">Learn More &rarr;</Button>
              </Link>
            </div>
            <div className="flex-1 h-[400px] bg-cyan-50 rounded-2xl flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-dashed border-cyan-300 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">WHAT WE DO</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Our Core Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s) => (
                <div key={s.slug} className="bg-white rounded-xl p-10 border border-gray-100 hover:shadow-[0px_8px_30px_rgba(6,186,225,0.15)] hover:border-cyan-200 transition-all group">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-space font-bold text-[#070933] mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <Link href={`/services/${s.slug}`} className="text-cyan-500 font-bold hover:text-cyan-600 transition-colors">
                    Learn more &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">OUR PROCESS</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">How we work</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '01', label: 'Discover' },
                { num: '02', label: 'Design' },
                { num: '03', label: 'Deploy' },
                { num: '04', label: 'Support' },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center text-[#070933] font-space font-bold text-xl mx-auto mb-4">{step.num}</div>
                  <h4 className="font-bold text-[#070933]">{step.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#070933] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { stat: '5', label: 'Years of Experience' },
              { stat: '50+', label: 'Businesses Supported' },
              { stat: '5', label: 'Engineers & Consultants' },
              { stat: '24/7', label: 'Support Availability' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-5xl font-space font-bold text-cyan-400 mb-2">{item.stat}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <CtaBlock />
      </main>

      <Footer />
    </div>
  );
}
