import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Contact Us | Davethan Technologies Limited',
  description: 'Get in touch with the Davethan team — whether you have a question, need a quote, or want to book a free consultation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="py-24 bg-[#070933]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-5">
              <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">GET IN TOUCH</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-white leading-[1.1]">
                Let's start a <span className="text-cyan-400">conversation</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                Whether you're ready to get started or just exploring your options, we're here to help. Reach out and one of our experts will be in touch within 24 hours.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-cyan-400">📞</span>
                  <div>
                    <div>+44 0208 058 0860 (UK)</div>
                    <div>+234 812 279 8051 (Nigeria)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-cyan-400">✉</span>
                  <span>info@davethan.tech</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-space font-bold text-[#070933] mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  id="contact-company"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 resize-none transition-colors"
                />
                <button
                  id="contact-submit"
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message &rarr;
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* OFFICE LOCATIONS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-space font-bold text-[#070933]">Our Offices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  country: '🇬🇧 United Kingdom',
                  address: '4th Floor Victoria House\nChelmsford, Essex CM1 1JR',
                  phone: '+44 0208 058 0860',
                },
                {
                  country: '🇳🇬 Nigeria',
                  address: 'Plot 104 Emmanuel Adiele Street\noff Mike Akhigbe Way, Jabi\nAbuja 240102, FCT',
                  phone: '+234 812 279 8051',
                },
              ].map((office) => (
                <div key={office.country} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <h3 className="text-xl font-space font-bold text-[#070933] mb-4">{office.country}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line mb-3">{office.address}</p>
                  <p className="text-cyan-600 font-semibold text-sm">{office.phone}</p>
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
