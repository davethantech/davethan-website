import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Shield, Search, Zap, FileCheck, ArrowRight, User } from 'lucide-react';

export const metadata = {
  title: 'Cybersecurity | Davethan Technologies Limited',
  description: 'Proactive Defense For Your Business. Comprehensive protection against malware, ransomware, and phishing.',
  openGraph: {
    title: 'Cybersecurity Services | Davethan Technologies Limited',
    description: 'Proactive cybersecurity defence for growing businesses — threat detection, compliance, and 24/7 monitoring.',
    url: 'https://davethan.tech/services/cybersecurity',
    images: [{ url: '/Cybersecurity-Hero.png', width: 1200, height: 630, alt: 'Cybersecurity Services' }],
  },
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        
        {/* HERO SECTION */}
        <section className="bg-[#070933] overflow-hidden pt-12 lg:pt-24 pb-12 lg:pb-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="flex-1 w-full max-w-[600px] z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#06bae1] rounded-full"></div>
                <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-wider">
                  WELCOME TO DAVETHAN
                </span>
              </div>
              
              <h1 className="text-[#06bae1] font-roboto font-bold text-[40px] sm:text-[48px] lg:text-[56px] leading-tight mb-2">
                Proactive Defense
              </h1>
              <h1 className="text-white font-roboto font-bold text-[40px] sm:text-[48px] lg:text-[56px] leading-tight mb-6">
                For Your Business.
              </h1>
              
              <p className="text-[rgba(255,255,255,0.7)] font-poppins text-[15px] lg:text-[16px] leading-relaxed mb-10 max-w-[460px]">
                Comprehensive protection against malware, ransomware, and phishing with cutting-edge security technologies.
              </p>
              
              <button className="bg-[#06bae1] text-[#0a0d53] font-bold font-inter text-[14px] px-8 py-3 rounded-[8px] hover:opacity-90 transition-opacity mb-12">
                Get Started
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#070933] bg-gradient-to-br from-[#06bae1] to-[#0a0d53] flex items-center justify-center">
                      <User className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  ))}
                </div>
                <p className="text-[rgba(255,255,255,0.7)] text-[13px] max-w-[200px] leading-snug">
                  Trusted by 50+ businesses across two continents
                </p>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="flex-1 relative w-full h-[400px] lg:h-[600px] lg:max-w-[600px] shrink-0">
              <div className="relative w-full min-h-[400px] lg:min-h-[600px] h-full rounded-[24px] lg:rounded-[32px] overflow-hidden">
                <Image 
                  src="/Cybersecurity-Hero.png" 
                  alt="Cybersecurity Team" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                  priority 
                />
              </div>
              
              {/* Floating Badges */}
              <div className="hidden lg:block absolute top-8 -right-8 bg-[#0a0d53] rounded-[16px] p-4 shadow-xl border border-[rgba(255,255,255,0.1)]">
                <h4 className="text-white font-roboto font-bold text-[24px]">50+</h4>
                <p className="text-[rgba(255,255,255,0.6)] text-[11px] uppercase tracking-wider">Businesses Protected</p>
              </div>
              
              <div className="hidden lg:block absolute bottom-8 -left-12 bg-[#0a0d53] rounded-[16px] p-4 shadow-xl border border-[rgba(255,255,255,0.1)]">
                <p className="text-[rgba(255,255,255,0.6)] text-[11px] uppercase tracking-wider mb-2">Security Team</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0d53] bg-gradient-to-br from-[#06bae1] to-[#0a4a6e] flex items-center justify-center">
                      <User className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* LOGO CLOUD */}
        <section className="bg-[#f8f9fa] py-8 border-b border-[#e4e9f2]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col items-center">
            <p className="text-[#5b6472] font-inter text-[14px] mb-6">
              Trusted by growing teams across the UK and Nigeria
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale">
              {['Nexora', 'Fieldstone', 'Vantik', 'Corelane', 'Bright&Co'].map((logo, idx) => (
                <span key={idx} className="font-roboto font-bold text-[20px] lg:text-[24px] text-[#0a0d53]">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT OUR SERVICE */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#06bae1] rounded-full"></div>
                  <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-wider">
                    ABOUT OUR SERVICE
                  </span>
                </div>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] leading-tight">
                  Enterprise-Grade Security for Growing Teams
                </h2>
              </div>
              <p className="text-[#5b6472] font-inter text-[15px] max-w-[400px] leading-relaxed">
                We take a proactive approach to security, continuously monitoring your systems so threats get caught before they cause damage.
              </p>
            </div>
            
            {/* Grid Content */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Image */}
              <div className="w-full lg:w-[45%] relative h-[400px] lg:h-auto min-h-[500px] shrink-0">
                <Image 
                  src="/about-our-services.png" 
                  alt="Security Team Working" 
                  fill 
                  className="object-cover rounded-[24px]"
                />
              </div>
              
              {/* Right Cards */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-6 h-full lg:h-[60%]">
                  <div className="flex-[2] bg-white border border-[#e4e9f2] rounded-[16px] p-8 flex flex-col justify-between shadow-sm">
                    <div>
                      <h3 className="font-poppins font-bold text-[#0a0d53] text-[20px] mb-4">Your Security, Our Priority</h3>
                      <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed">
                        Every layer of your infrastructure is monitored and protected around the clock.
                      </p>
                    </div>
                    <Link href="#" className="font-inter font-bold text-[#06bae1] text-[13px] hover:underline mt-8 inline-flex items-center gap-1">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex-1 bg-white border border-[#e4e9f2] rounded-[16px] p-6 shadow-sm flex flex-col justify-center">
                      <h3 className="font-roboto font-bold text-[#0a0d53] text-[32px] mb-1">50+</h3>
                      <p className="font-inter text-[#5b6472] text-[12px]">Businesses Protected</p>
                    </div>
                    <div className="flex-1 bg-white border border-[#e4e9f2] rounded-[16px] p-6 shadow-sm flex flex-col justify-center">
                      <h3 className="font-roboto font-bold text-[#0a0d53] text-[32px] mb-1">24/7</h3>
                      <p className="font-inter text-[#5b6472] text-[12px]">Threat Monitoring</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-white border border-[#e4e9f2] rounded-[16px] p-8 shadow-sm flex flex-col justify-between h-auto lg:h-[40%]">
                  <div>
                    <h3 className="font-poppins font-bold text-[#0a0d53] text-[20px] mb-4">Staying Ahead of Threats</h3>
                    <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed max-w-[600px]">
                      We invest in the latest security technologies and threat intelligence, so your defenses evolve as fast as the risks do.
                    </p>
                  </div>
                  <Link href="#" className="font-inter font-bold text-[#06bae1] text-[13px] hover:underline mt-6 inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* OUR EXCLUSIVE SERVICES */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#06bae1] rounded-full"></div>
                  <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-wider">
                    SERVICES
                  </span>
                </div>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] leading-tight">
                  Our Exclusive Services
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-[500px]">
                <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed flex-1">
                  Comprehensive cybersecurity coverage, tailored to how your business actually operates.
                </p>
                <button className="bg-[#06bae1] text-white font-bold font-inter text-[14px] px-6 py-3 rounded-[8px] hover:opacity-90 transition-opacity whitespace-nowrap">
                  View All
                </button>
              </div>
            </div>
            
            {/* Arch Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Threat Detection & Monitoring', desc: 'Continuous oversight to catch suspicious activity before it becomes a breach.', Icon: Shield },
                { title: 'Vulnerability Assessment', desc: 'Systematic scanning to find and fix weak points before attackers do.', Icon: Search },
                { title: 'Incident Response', desc: 'A clear plan and a real team ready to act the moment something goes wrong.', Icon: Zap },
                { title: 'Compliance & Risk Advisory', desc: 'Navigating GDPR and industry regulations as your business scales.', Icon: FileCheck },
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-[#e4e9f2] rounded-t-full rounded-b-[16px] p-8 pt-16 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-[80px] h-[80px] rounded-full bg-[#06bae1] flex items-center justify-center mb-8">
                    <service.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-[#0a0d53] text-[18px] mb-4 min-h-[54px] flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="bg-[#f8f9fa] border border-[#e4e9f2] rounded-[24px] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-[700px]">
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[28px] lg:text-[40px] leading-tight mb-4">
                  Start the conversation with a free 30-minute consultation
                </h2>
                <p className="text-[#5b6472] font-inter text-[15px]">
                  Let&apos;s discuss your IT strategy, services, and business solutions & compliance concerns.
                </p>
              </div>
              <button className="bg-transparent border-2 border-[#06bae1] text-[#0a0d53] font-bold font-inter text-[14px] px-8 py-3 rounded-[8px] hover:bg-[#06bae1] hover:text-white transition-colors whitespace-nowrap shrink-0">
                Book your call
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
