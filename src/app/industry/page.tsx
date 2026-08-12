import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Industry Solutions | Davethan Technologies Limited',
  description: 'Davethan delivers tailored IT solutions for Finance, Healthcare, Retail, Construction, and Hospitality industries.',
};

const industries = [
  {
    id: 'finance',
    label: 'Finance',
    heading: 'Secure, compliant IT for financial services',
    desc: 'We help financial institutions safeguard sensitive data, meet regulatory requirements, and modernise legacy infrastructure.',
    features: ['FCA-aligned data governance', 'Fraud detection & response', 'Encrypted communications', 'Business continuity planning'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    heading: 'Resilient IT that powers patient care',
    desc: 'We support NHS-aligned healthcare providers with systems that keep patient data safe and operations running 24/7.',
    features: ['HL7 / FHIR-ready integrations', 'CQC compliance support', 'Secure patient record systems', 'Disaster recovery planning'],
  },
  {
    id: 'retail',
    label: 'Retail',
    heading: 'Digital infrastructure for modern retail',
    desc: 'From POS systems to e-commerce integrations, we equip retailers with technology to drive efficiency and revenue.',
    features: ['POS & ERP integrations', 'E-commerce platform support', 'Inventory management systems', 'Customer data analytics'],
  },
  {
    id: 'construction',
    label: 'Construction',
    heading: 'Robust IT for on-site and off-site teams',
    desc: 'We provide construction firms with reliable communication, project management tools, and field connectivity.',
    features: ['Field device management', 'Secure remote access', 'BIM system integrations', 'Cloud document management'],
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    heading: 'IT solutions that enhance guest experiences',
    desc: 'We help hotels and hospitality businesses deliver seamless service through connected, reliable technology.',
    features: ['PMS system integrations', 'Guest Wi-Fi management', 'PCI-DSS compliance', 'Reservation system support'],
  },
];

export default function IndustryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="w-full bg-[#070933] py-28 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">INDUSTRY SOLUTIONS</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-white leading-[1.1]">
                Welcome To Davethan <span className="text-cyan-400">IT Solutions</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                Industry-specific IT expertise to help your business perform at its best, no matter your sector.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Davethan &rarr;</Button>
              </Link>
            </div>
            <div className="flex-1 h-[400px] bg-white/5 rounded-2xl border border-white/10" />
          </div>
        </section>

        {/* INDUSTRY TABS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Horizontal scrollable tab pills */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-16">
              {industries.map((ind) => (
                <a key={ind.id} href={`#${ind.id}`} className="shrink-0 px-5 py-2 rounded-full border border-cyan-300 text-[#070933] font-semibold text-sm hover:bg-cyan-50 transition-colors scroll-smooth">
                  {ind.label}
                </a>
              ))}
            </div>

            {/* Each Industry Section */}
            <div className="space-y-32">
              {industries.map((ind, i) => (
                <div id={ind.id} key={ind.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {i % 2 === 0 ? (
                    <>
                      <div className="h-[400px] bg-gray-100 rounded-2xl" />
                      <div className="space-y-6">
                        <span className="text-cyan-500 font-bold text-xs tracking-widest uppercase">{ind.label.toUpperCase()}</span>
                        <h2 className="text-3xl font-space font-bold text-[#070933]">{ind.heading}</h2>
                        <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
                        <ul className="space-y-3 pt-2">
                          {ind.features.map((f) => (
                            <li key={f} className="flex gap-3 items-start">
                              <span className="text-cyan-500 font-bold">✓</span>
                              <span className="text-gray-700 text-sm">{f}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact"><Button size="md">Get in Touch</Button></Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <span className="text-cyan-500 font-bold text-xs tracking-widest uppercase">{ind.label.toUpperCase()}</span>
                        <h2 className="text-3xl font-space font-bold text-[#070933]">{ind.heading}</h2>
                        <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
                        <ul className="space-y-3 pt-2">
                          {ind.features.map((f) => (
                            <li key={f} className="flex gap-3 items-start">
                              <span className="text-cyan-500 font-bold">✓</span>
                              <span className="text-gray-700 text-sm">{f}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact"><Button size="md">Get in Touch</Button></Link>
                      </div>
                      <div className="h-[400px] bg-gray-100 rounded-2xl" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-[#070933] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
              {[
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
          </div>
        </section>

        {/* TESTIMONIAL BAND */}
        <section className="bg-[#070933] border-t border-white/10 py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-2xl text-white font-space font-medium leading-relaxed mb-8">
              "Davethan understood our sector's unique challenges from day one — their solutions have been transformative."
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-gray-500 rounded-full" />
              <span className="text-white font-bold">Dr. Aisha Bello</span>
              <span className="text-cyan-400 text-sm">Head of Operations, MedPlus Healthcare</span>
            </div>
          </div>
        </section>

        {/* INDUSTRY FAQ */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-space font-bold text-[#070933] text-center mb-12">Questions Industry Teams Ask Us</h2>
            <div className="space-y-4">
              {[
                { q: 'Can you support healthcare providers complying with CQC standards?', a: 'Yes, we have direct experience helping healthcare clients with CQC compliance, patient data security, and system uptime requirements.' },
                { q: 'We work across UK and Nigeria — can you support both?', a: 'Absolutely. With offices in both countries, we provide localised support while maintaining a unified IT strategy for your organisation.' },
                { q: 'How do you handle data residency requirements?', a: 'We offer cloud configurations that respect UK and Nigerian data residency requirements, including dedicated hosting where needed.' },
                { q: 'Do you provide industry-specific onboarding?', a: 'Yes. Our onboarding process is customised per industry, with sector-specific assessments and tailored implementation plans.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-100 p-6 group cursor-pointer">
                  <summary className="font-bold text-[#070933] flex justify-between items-center list-none">
                    {faq.q}
                    <span className="text-cyan-500 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
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
