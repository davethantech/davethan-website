import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Users, Handshake, TrendingUp, CircleDollarSign, Award, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'IT Consultancy | Davethan Technologies Limited',
  description: 'Your Outsourced IT Strategy Partner. Wherever your business is headed, whenever you need us.',
  openGraph: {
    title: 'IT Consultancy | Davethan Technologies Limited',
    description: 'Your outsourced IT strategy partner — infrastructure planning, vendor management, and technology roadmaps for growing businesses.',
    url: 'https://davethan.tech/services/it-consultancy',
    images: [{ url: '/IT-Consultancy-Hero.png', width: 1200, height: 630, alt: 'IT Consultancy Services' }],
  },
};

export default function ITConsultancyPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* HERO SECTION */}
        <section className="relative w-full bg-white overflow-hidden flex flex-col lg:flex-row items-stretch pt-[60px] lg:pt-[80px]">
          {/* Left Content */}
          <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-[80px] lg:pr-12 flex flex-col justify-center py-2 lg:py-16 z-10">
            <div className="inline-block bg-[rgba(191,249,234,0.58)] rounded-full px-6 py-2 mb-6 self-start">
              <span className="text-[#0a0d53] font-inter font-bold text-[11px] uppercase">
                IT CONSULTANCY
              </span>
            </div>

            <h1 className="text-[#0a0d53] font-roboto font-bold text-[40px] sm:text-[48px] lg:text-[56px] leading-tight mb-6 max-w-[600px]">
              Your <span className="text-[#06bae1]">Outsourced IT Strategy</span> Partner
            </h1>

            <p className="text-[#5b6472] font-poppins text-[15px] lg:text-[16px] leading-relaxed max-w-[500px]">
              Wherever your business is headed, whenever you need us.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-auto relative shrink-0">
            <Image
              src="/IT-Consultancy-Hero.png"
              alt="IT Consultancy Team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover lg:rounded-tl-[80px] lg:rounded-bl-[80px] rounded-tl-[40px] rounded-tr-[40px] lg:rounded-tr-none"
              priority
            />
          </div>
        </section>

        {/* SERVICES WE OFFER */}
        <section className="py-16 lg:py-24 bg-white relative z-20 -mt-8 lg:mt-0">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="text-center mb-16">
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] mb-4">
                Services We <span className="text-[#06bae1]">Offer</span>
              </h2>
              <p className="text-[#5b6472] font-inter text-[15px] max-w-[640px] mx-auto">
                Davethan provides custom IT consultancy for your business, in the most flexible and value-driven way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: 'Strategic IT Planning', desc: 'Aligning your technology roadmap with your business goals, so every investment moves you forward.' },
                { title: 'Digital Transformation', desc: 'Modernizing legacy systems and processes to keep you competitive.' },
                { title: 'System Architecture Review', desc: "A clear-eyed audit of your current stack, with a plan to fix what's fragile." },
                { title: 'Vendor & Cost Optimization', desc: 'Cutting waste and negotiating smarter without compromising capability.' },
                { title: 'Risk & Compliance Advisory', desc: "Navigating regulatory requirements so growth doesn't outpace governance." },
                { title: 'Technology Adoption Support', desc: 'Hands-on guidance rolling out new tools and getting your team up to speed.' },
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-[#e4e9f2] rounded-[16px] p-8 shadow-[0px_8px_24px_0px_rgba(10,13,51,0.04)] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-poppins font-bold text-[#0a0d53] text-[18px] mb-3">{service.title}</h3>
                  <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-inter font-bold text-[#06bae1] text-[13px] hover:underline cursor-pointer">Learn more &rarr;</span>
                    <div className="w-[32px] h-[32px] rounded-full bg-[#06bae1] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WE'RE HERE TO HELP */}
        <section className="bg-[#070933] overflow-hidden rounded-tr-[60px] rounded-bl-[60px] lg:rounded-tr-[120px] lg:rounded-bl-[120px] mx-0 lg:mx-0 my-8 lg:my-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1 py-16 lg:py-24 pr-0 lg:pr-12">
              <h2 className="text-white font-roboto font-bold text-[32px] lg:text-[40px] leading-tight mb-8">
                We&apos;re Here <span className="text-[#06bae1]">To Help</span>
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] font-inter text-[15px] lg:text-[16px] leading-relaxed mb-8 max-w-[500px]">
                At Davethan we become an invaluable resource within your business, stepping in as your IT consultancy team and freeing you to focus on other areas of your business. We offer a scalable, cost-effective partnership you can trust.
              </p>
              <p className="text-[#06bae1] font-inter font-bold text-[14px]">
                &mdash; Davethan Leadership Team
              </p>
            </div>
            <div className="flex-1 relative w-full h-[300px] lg:h-[450px] flex justify-end">
              <div className="relative w-full min-h-[300px] lg:min-h-[450px] h-full max-w-[800px] right-0">
                <Image
                  src="/here-to-help.png"
                  alt="Woman with VR headset"
                  fill
                  className="object-cover object-left lg:object-right rounded-tl-[80px] rounded-bl-[80px] lg:rounded-l-[200px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-[400px] shrink-0">
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] leading-tight sticky top-24">
                Our values and the pillars that underpin our service
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { title: 'Human Centric', desc: 'Your people are core to what we do, and every solution is tailored to the individual.', Icon: Users },
                { title: 'Partnerships', desc: 'We build real relationships with you, so you know you can trust the advice we give.', Icon: Handshake },
                { title: 'Performance', desc: "We're enablers of genuine performance growth across teams and individuals.", Icon: TrendingUp },
                { title: 'Affordable', desc: "We're on a mission to make specialist IT strategy accessible for all businesses.", Icon: CircleDollarSign },
                { title: 'Experienced', desc: "We've got the expertise to guide your business to success.", Icon: Award },
                { title: 'Client-Centric', desc: 'Customer satisfaction is our top priority in every engagement.', Icon: HeartHandshake },
              ].map((val, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#06bae1] flex items-center justify-center mt-1">
                    <val.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[#0a0d53] text-[18px] mb-2">{val.title}</h4>
                    <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="bg-[#070933] overflow-hidden lg:rounded-tr-[120px] lg:rounded-bl-[120px] mx-0 lg:mx-1 my-8 lg:my-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
            <div className="flex-1 py-16 lg:py-24 w-full max-w-[500px]">
              <h2 className="text-white font-roboto font-bold text-[32px] lg:text-[40px] leading-tight mb-3">
                Contact <span className="text-[#06bae1]">us</span>
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] font-inter text-[15px] mb-10">
                Get in touch with us today to see how we can help you.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px]"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px]"
                />
                <select className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px] appearance-none" defaultValue="">
                  <option value="" disabled>&mdash; Choose a service &mdash;</option>
                  <option value="it-consultancy" className="text-black">IT Consultancy</option>
                  <option value="managed-it" className="text-black">Managed IT</option>
                  <option value="cloud" className="text-black">Cloud Services</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px] resize-none"
                ></textarea>

                <button type="button" className="bg-[#06bae1] text-[#0a0d53] font-bold font-inter text-[14px] px-8 py-3 rounded-[8px] hover:opacity-90 transition-opacity mt-4 inline-block">
                  Send us a Message &rarr;
                </button>
              </form>
            </div>
            <div className="flex-1 relative w-full h-[400px] lg:h-[700px] flex justify-end shrink-0 hidden lg:flex py-0 lg:py-12">
              <div className="relative w-full h-full lg:max-w-[700px] right-0">
                <Image
                  src="/it-contact-us.png"
                  alt="Robot hand holding glowing globe"
                  fill
                  className="object-cover lg:rounded-[50px]"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
