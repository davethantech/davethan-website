import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { ContactForm } from '@/components/shared/ContactForm';

export const metadata = {
  title: 'Contact Us | Davethan Technologies Limited',
  description: "Get in touch with the Davethan team — whether you have a question, need a quote, or want to book a free consultation.",
  openGraph: {
    title: 'Contact Us | Davethan Technologies Limited',
    description: 'Have a question about managed IT, cybersecurity, or cloud strategy? We are a phone call, email, or message away.',
    url: 'https://davethan.tech/contact',
    images: [{ url: '/Contact-Us-Hero.png', width: 1200, height: 630, alt: 'Contact Davethan Technologies' }],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* ─── HERO SECTION ─── */}
        <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px] flex items-center mt-16 sm:mt-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Contact-Us-Hero.png"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            quality={85}
            sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#070933]/70"></div> {/* Dark overlay */}
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px] text-center">
            <h1 className="text-white font-roboto font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-3">
              Contact
            </h1>
            <p className="text-gray-300 font-inter text-[14px] sm:text-[16px]">
              <a href="/">Home</a> &nbsp;&gt;&nbsp; Contact
            </p>
          </div>
        </section>

        {/* ─── CONTACT INFO & MAP SECTION ─── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              {/* Left Side: Text and Contact Info */}
              <div className="flex-1 w-full space-y-10">
                <div>
                  <span className="text-[#06bae1] font-inter font-bold text-[11px] sm:text-[12px] uppercase tracking-widest flex items-center gap-2 mb-4">
                    <span className="text-[#06bae1]">:::</span> NEED ANY HELP?
                  </span>
                  <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] mb-6">
                    Get in touch with us
                  </h2>
                  <p className="text-[#5b6472] font-inter text-[15px] sm:text-[16px] leading-[1.8] max-w-[500px]">
                    Have a question about managed IT, cybersecurity, or cloud strategy? We're a phone call, email, or message away.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-6">
                    <div className="w-[48px] h-[48px] bg-[#0a0d53] rounded-full flex items-center justify-center shrink-0">
                      <div className="w-[16px] h-[16px] bg-[#06bae1] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-[#0a0d53] font-roboto font-bold text-[18px] mb-2">Have any question?</h3>
                      <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed">
                        +44 0208 058 0860 (UK)<br />
                        +234 812 279 8051 (Nigeria)
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-6">
                    <div className="w-[48px] h-[48px] bg-[#0a0d53] rounded-full flex items-center justify-center shrink-0">
                      <div className="w-[16px] h-[16px] bg-[#06bae1] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-[#0a0d53] font-roboto font-bold text-[18px] mb-2">Write email</h3>
                      <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed">
                        info@davethan.tech
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-6">
                    <div className="w-[48px] h-[48px] bg-[#0a0d53] rounded-full flex items-center justify-center shrink-0">
                      <div className="w-[16px] h-[16px] bg-[#06bae1] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-[#0a0d53] font-roboto font-bold text-[18px] mb-2">Visit anytime</h3>
                      <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed">
                        UK: 4th floor Victoria House, Chelmsford, Essex CM1 1JR<br />
                        Nigeria: Plot 104 Emmanuel Adiele Street, off Mike Akhigbe Way, Jabi, Abuja 240102, FCT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Map */}
              <div className="w-full lg:w-[600px] h-[400px] sm:h-[480px] bg-gray-100 rounded-[16px] overflow-hidden shadow-sm shrink-0">
                <iframe
                  title="Davethan UK Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.8621490214643!2d0.4727187157813589!3d51.73516087967397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8e8b0222f6d2b%3A0xc4f5c22501ab1a1a!2sVictoria%20House%2C%20Victoria%20Rd%2C%20Chelmsford%20CM1%201JR%2C%20UK!5e0!3m2!1sen!2sng!4v1698243123456!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

        {/* ─── CONTACT FORM SECTION ─── */}
        <section className="py-16 sm:py-24 bg-[#f8f9fc]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-[#06bae1] font-inter font-bold text-[11px] sm:text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
                <span className="text-[#06bae1]">:::</span> GET IN TOUCH WITH US NOW
              </span>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] max-w-[600px] mx-auto">
                Feel Free to Write Our Technology Experts
              </h2>
            </div>

            <div className="max-w-[800px] mx-auto bg-white rounded-[16px] p-6 sm:p-10 shadow-sm border border-gray-100">
              <ContactForm formType="contact" showSubject={true} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
