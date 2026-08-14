import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Managed IT Support | Davethan Technologies Limited',
  description: 'Powerful Managed IT Support for growing businesses - 24/7 monitoring, helpdesk, infrastructure management and more.',
};

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* HERO - full bleed background image with dark overlay */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/Managed-IT-Hero.png" alt="Managed IT Support" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[rgba(7,9,51,0.72)]" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] pt-[80px] lg:pt-[120px] pb-[100px] lg:pb-[140px]">
            <p className="font-mono font-bold text-[#06bae1] text-[13px] tracking-wider uppercase mb-6">
              FOR GROWING BUSINESSES
            </p>
            <h1 className="font-roboto font-bold leading-tight mb-6">
              <span className="block text-[40px] sm:text-[52px] lg:text-[56px]">
                <span className="text-[rgba(255,255,255,0.35)]">POWERFUL</span>
                <span className="text-white"> MANAGED</span>
              </span>
              <span className="block text-[40px] sm:text-[52px] lg:text-[56px] text-[#06bae1]">IT SUPPORT</span>
            </h1>
            <p className="font-poppins text-[rgba(255,255,255,0.72)] text-[15px] lg:text-[16px] leading-relaxed max-w-[520px]">
              We take a proactive approach to IT support, continuously monitoring your infrastructure so issues get resolved before they become downtime.
            </p>
          </div>
        </section>

        {/* Feature cards overlapping the bottom of the hero */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-[80px] -mt-[60px] lg:-mt-[80px] mb-8 lg:mb-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {[
              { title: '24/7 Monitoring', desc: 'Round-the-clock oversight of your systems and networks.' },
              { title: 'Rapid Response', desc: 'Issues resolved before they turn into costly downtime.' },
              { title: 'Infrastructure Health', desc: 'Ongoing checks to keep every system running smoothly.' },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-tl-[4px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[4px] shadow-[0px_8px_24px_0px_rgba(191,249,234,0.55)] px-6 py-6 flex items-start gap-4">
                <div className="relative shrink-0 w-[56px] h-[56px]">
                  <div className="absolute inset-0 rounded-full border-[10px] border-[rgba(6,186,225,0.15)]" />
                  <div className="absolute inset-[17px] rounded-full bg-[#06bae1]" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-[#0a0d53] text-[15px] mb-2">{card.title}</h3>
                  <p className="font-inter text-[#5b6472] text-[12px] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WE KEEP YOUR SYSTEMS RUNNING */}
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

            {/* Image + floating badge */}
            <div className="w-full lg:w-[560px] shrink-0 relative pb-10 lg:pb-0">
              <div className="relative w-full h-[380px] sm:h-[430px] lg:h-[460px] rounded-tl-[8px] rounded-tr-[15px] rounded-bl-[15px] rounded-br-[8px] overflow-hidden">
                <Image src="/hand-on-keyboard.png" alt="IT Support team" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 -left-2 lg:-left-[40px] bg-white rounded-[8px] shadow-[0px_8px_28px_0px_rgba(10,13,51,0.16)] px-4 py-4 flex items-center gap-3">
                <div className="w-[50px] h-[50px] rounded-full bg-[rgba(6,186,225,0.15)] flex items-center justify-center shrink-0">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#06bae1]" />
                </div>
                <div>
                  <p className="font-space-grotesk font-bold text-[#0a0d53] text-[24px] leading-none">50+</p>
                  <p className="font-inter text-[#5b6472] text-[12px] mt-1">Satisfied Clients</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-roboto font-bold text-[#06bae1] text-[14px] tracking-wider uppercase mb-3">
                5+ YEARS OF EXPERIENCE
              </p>
              <h2 className="font-roboto font-bold text-[#0a0d53] text-[28px] lg:text-[30px] leading-tight mb-5">
                We Keep Your Systems Running, Start to Finish
              </h2>
              <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed mb-8">
                Choosing Davethan means choosing a partner dedicated to the success of your business - your technology isn&apos;t just managed, it&apos;s optimized for unparalleled performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                {['Reduced Downtime', 'Predictable Pricing', 'Faster Resolution', 'Dedicated Support', 'Scalable Coverage', 'Cost Savings'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-[16px] h-[16px] rounded-full bg-[#06bae1] flex items-center justify-center shrink-0">
                      <Check className="w-[10px] h-[10px] text-white stroke-[3]" />
                    </div>
                    <span className="font-inter font-medium text-[#0a0d53] text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-inter text-[#0a0d53] text-[14px] mb-2">Talk to our team today</p>
              <div className="flex flex-col gap-1">
                <a href="tel:+442080580860" className="font-inter font-bold text-[#06bae1] text-[18px] hover:underline">+44 0208 058 0860 (UK)</a>
                <a href="tel:+2348122798051" className="font-inter font-bold text-[#06bae1] text-[18px] hover:underline">+234 812 279 8051 (NG)</a>
              </div>
            </div>
          </div>
        </section>

        {/* OUR WORK PROCESS */}
        <section className="py-16 lg:py-24 bg-white border-t border-[#f0f4f8]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16">
              <div>
                <p className="font-roboto font-bold text-[#06bae1] text-[14px] tracking-wider uppercase mb-3">OUR WORK PROCESS</p>
                <h2 className="font-roboto font-bold text-[#0a0d53] text-[28px] lg:text-[30px] leading-tight max-w-[560px]">
                  How Managed IT Support Works
                </h2>
              </div>
              <p className="font-inter text-[#5b6472] text-[14px] leading-relaxed max-w-[560px] lg:pt-10">
                From first audit to ongoing optimization, here&apos;s exactly how we take your infrastructure off your plate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { num: '01', title: 'Onboarding & Audit', desc: "We map your current stack and flag what's fragile before it breaks." },
                { num: '02', title: 'Proactive Monitoring', desc: '24/7 oversight so issues get caught before they become downtime.' },
                { num: '03', title: 'Rapid Response', desc: 'A real human on call, resolving issues fast when they do come up.' },
                { num: '04', title: 'Ongoing Optimization', desc: 'Regular reviews to keep performance, cost, and security aligned.' },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-start">
                  <div className="relative mb-8">
                    <div className="w-[56px] h-[56px] rounded-full bg-[rgba(6,186,225,0.12)]" />
                    <div className="absolute -top-[6px] -right-[6px] w-[28px] h-[28px] rounded-full bg-[#0a0d53] flex items-center justify-center">
                      <span className="font-space-grotesk font-bold text-white text-[11px]">{step.num}</span>
                    </div>
                  </div>
                  <h4 className="font-poppins font-bold text-[#0a0d53] text-[17px] mb-3">{step.title}</h4>
                  <p className="font-inter text-[#5b6472] text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="bg-white border border-[#e4e9f2] rounded-[24px] shadow-[0px_4px_18px_4px_rgba(191,249,234,0.4)] px-8 sm:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-roboto font-bold text-[#0a0d53] text-[22px] sm:text-[26px] leading-tight mb-3 max-w-[640px]">
                  Start the conversation with a free 30-minute consultation
                </h3>
                <p className="font-inter text-[#0a0d53] text-[13px]">
                  Let&apos;s discuss your IT strategy, services, and business solutions &amp; compliance concerns.
                </p>
              </div>
              <Link href="/contact" className="shrink-0">
                <div className="bg-[rgba(191,249,234,0.6)] border border-[#0a0d53] rounded-[9px] h-[52px] px-8 flex items-center justify-center hover:bg-[#bff9ea] transition-colors">
                  <span className="font-inter font-bold text-[#0a0d53] text-[14px] whitespace-nowrap">Book your call</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
