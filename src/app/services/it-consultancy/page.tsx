import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'IT Consultancy | Davethan Technologies Limited',
  description: 'Your outsourced IT strategy partner — strategic planning, digital transformation, roadmapping, and technology advisory.',
};

export default function ITConsultancyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase">IT CONSULTANCY</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-[#070933] leading-[1.1]">
                Your Outsourced IT <span className="text-cyan-500">Strategy Partner</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                Davethan provides custom IT consultancy to help your business navigate technology decisions with confidence and clarity.
              </p>
              <Link href="/contact">
                <button className="bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                  Book a Consultation &rarr;
                </button>
              </Link>
            </div>
            <div className="flex-1 h-[400px] bg-gray-50 rounded-2xl border border-gray-100" />
          </div>
        </section>

        {/* SERVICES WE OFFER */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">WHAT WE DO</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Services We Offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Strategic IT Planning', desc: 'Long-term technology roadmaps aligned with your business vision and budget.' },
                { title: 'Digital Transformation', desc: 'End-to-end guidance on transforming operations and customer experiences through technology.' },
                { title: 'IT Procurement Advisory', desc: 'Unbiased guidance on selecting the right hardware, software, and vendors.' },
                { title: 'IT Audits & Assessments', desc: 'Comprehensive reviews of your current IT landscape with actionable recommendations.' },
                { title: 'Project Management', desc: 'Delivery of complex technology projects on time and within budget.' },
                { title: 'Vendor Management', desc: 'Coordination and oversight of your third-party technology providers.' },
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

        {/* WHY US */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[450px] bg-gray-50 rounded-2xl border border-gray-100" />
            <div className="space-y-6">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block">WHY DAVETHAN</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">What makes us different</h2>
              <div className="grid grid-cols-2 gap-6 pt-2">
                {['Independent', 'Affordable', 'Experienced', 'Client-Centric'].map((trait) => (
                  <div key={trait} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
                    <span className="font-semibold text-[#070933]">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INLINE CONTACT FORM */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-space font-bold text-[#070933]">Contact Us</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get in touch with our consultancy team to discuss your technology challenges and how we can help.
              </p>
              <form action="/api/contact" method="POST" className="space-y-4 pt-4">
                <input name="name" type="text" placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400" />
                <input name="email" type="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400" />
                <input name="company" type="text" placeholder="Company" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400" />
                <select name="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-cyan-400">
                  <option value="">Choose a service</option>
                  <option>Strategic IT Planning</option>
                  <option>Digital Transformation</option>
                  <option>IT Procurement Advisory</option>
                  <option>IT Audits & Assessments</option>
                  <option>Project Management</option>
                  <option>Vendor Management</option>
                </select>
                <textarea name="message" rows={4} placeholder="Your message..." required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 resize-none" />
                <button type="submit" className="bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity w-full">
                  Send us a Message &rarr;
                </button>
              </form>
            </div>
            <div className="h-[500px] bg-white rounded-2xl border border-gray-100 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-cyan-100 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-cyan-300" />
              </div>
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
