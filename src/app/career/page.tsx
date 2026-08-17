import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Career | Davethan Technologies Limited',
  description: 'Join the Davethan Technologies team. Explore exciting career opportunities and help us build cutting-edge digital solutions.',
};

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        
        {/* ─── HERO SECTION ─── */}
        <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px] flex items-center justify-center mt-16 sm:mt-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Career-hero.png"
              alt="Career at Davethan"
              fill
              className="object-cover"
              priority
              quality={100}
              unoptimized
            />
            <div className="absolute inset-0 bg-[#070933]/70"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px] text-center">
            <h1 className="text-white font-roboto font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-3">
              Career
            </h1>
            <p className="text-gray-300 font-inter text-[14px] sm:text-[16px]">
              Home &nbsp;&gt;&nbsp; Career
            </p>
          </div>
        </section>

        {/* ─── INTRO SECTION ─── */}
        <section className="py-16 sm:py-24 bg-white text-center">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <span className="text-[#06bae1] font-inter font-bold text-[11px] sm:text-[12px] uppercase tracking-widest block mb-4">
              WE ARE AGILE
            </span>
            <p className="text-[#0a0d53] font-roboto font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.4]">
              We believe that the key to our success lies in the passion, talent, and commitment of our exceptional team.
            </p>
          </div>
        </section>

        {/* ─── JOIN OUR TEAM SECTION ─── */}
        <section className="pb-16 sm:pb-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Side: Image */}
              <div className="flex-1 w-full relative">
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden">
                  <Image
                    src="/join-our-team.png"
                    alt="Davethan Team Collaboration"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>

              {/* Right Side: Text & Bullets */}
              <div className="flex-1 w-full space-y-6">
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[36px] lg:text-[40px] leading-[1.1]">
                  Join Our Team
                </h2>
                <p className="text-[#5b6472] font-inter text-[15px] sm:text-[16px] leading-[1.8]">
                  Davethan Technologies is a dynamic and innovative company at the forefront of digital enterprise solutions. We are dedicated to creating a high-performing digital enterprise by leveraging cutting-edge technology and top-tier talent. If you are passionate about digital innovation and are looking to make a meaningful impact, we would love to hear from you.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-[#0a0d53] font-roboto font-bold text-[20px] mb-4">
                    Why Davethan Technologies?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Career Growth and Development',
                      'Team Collaboration',
                      'Work-Life Balance',
                      'Innovation at the Core'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#0a0d53] font-inter font-bold text-[14px]">
                        <div className="w-[6px] h-[6px] bg-[#06bae1] rounded-full shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── OUR BENEFITS SECTION ─── */}
        <section className="py-16 sm:py-24 bg-[#f8f9fc]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            
            {/* Top Header Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
              <div className="max-w-[500px]">
                <span className="text-[#06bae1] font-inter font-bold text-[11px] sm:text-[12px] uppercase tracking-widest block mb-4">
                  OUR BENEFITS
                </span>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.1]">
                  Life at <span className="text-[#06bae1]">Davethan</span>
                </h2>
              </div>
              <div className="max-w-[600px]">
                <p className="text-[#5b6472] font-inter text-[15px] sm:text-[16px] leading-[1.8]">
                  Working at Davethan Technologies means being part of a dynamic and forward-thinking company. Our people are our most valuable asset, and we're committed to helping our team members thrive — from ongoing training to a vibrant company culture.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
              {[
                'Career Growth and Development',
                'Team Collaboration',
                'Work-Life Balance',
                'Innovation at the Core'
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center gap-5">
                  <div className="w-[56px] h-[56px] bg-[#0a0d53] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <div className="w-[20px] h-[20px] bg-[#06bae1] rounded-full"></div>
                  </div>
                  <h3 className="text-[#0a0d53] font-roboto font-bold text-[16px] sm:text-[18px] max-w-[180px] leading-snug">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── CURRENT OPENINGS SECTION ─── */}
        <section className="py-16 sm:py-24 bg-white text-center">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6">
            <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] leading-[1.1] mb-6">
              Current Openings
            </h2>
            <p className="text-[#5b6472] font-inter text-[15px] sm:text-[16px] leading-[1.8] mb-10">
              We are always looking for talented individuals to join our team. Explore exciting career opportunities at Davethan Technologies — we offer competitive compensation and benefits packages, and a supportive work environment that values diversity and inclusion.
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[13px] px-8 py-4 rounded-[4px] transition-colors"
            >
              Career Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─── SEND US A MESSAGE SECTION ─── */}
        <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="text-center mb-12">
              <span className="text-[#06bae1] font-inter font-bold text-[11px] sm:text-[12px] uppercase tracking-widest block mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] leading-[1.1]">
                Send Us <span className="text-[#06bae1]">a Message</span>
              </h2>
            </div>

            <div className="max-w-[600px] mx-auto bg-white rounded-[16px] shadow-[0_4px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
              <div className="bg-[#0a0d53] px-8 py-4">
                <span className="text-white font-inter font-bold text-[14px]">Get in Touch</span>
              </div>
              <div className="p-8">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="w-full h-[52px] px-6 bg-[#f8f9fc] rounded-[8px] text-[#5b6472] font-inter text-[14px] focus:outline-none focus:ring-1 focus:ring-[#06bae1] transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    required
                    className="w-full h-[52px] px-6 bg-[#f8f9fc] rounded-[8px] text-[#5b6472] font-inter text-[14px] focus:outline-none focus:ring-1 focus:ring-[#06bae1] transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Position of Interest"
                    className="w-full h-[52px] px-6 bg-[#f8f9fc] rounded-[8px] text-[#5b6472] font-inter text-[14px] focus:outline-none focus:ring-1 focus:ring-[#06bae1] transition-all"
                  />
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full p-6 bg-[#f8f9fc] rounded-[8px] text-[#5b6472] font-inter text-[14px] focus:outline-none focus:ring-1 focus:ring-[#06bae1] transition-all resize-none"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[13px] tracking-widest uppercase px-8 py-4 rounded-[8px] transition-colors mt-2"
                  >
                    SEND MESSAGE
                  </button>
                </form>
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
