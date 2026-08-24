import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Server, DollarSign, RefreshCw, Clock, CloudUpload, Map, ArrowRight, Globe } from 'lucide-react';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Cloud Services | Davethan Technologies Limited',
  description: 'Scalable Cloud for Your Business. Strategic cloud adoption, migration, and optimization tailored to small and medium businesses.',
  openGraph: {
    title: 'Cloud Services | Davethan Technologies Limited',
    description: 'Strategic cloud adoption, migration, and optimization tailored to small and medium businesses in the UK and Nigeria.',
    url: 'https://davethan.tech/services/cloud-services',
    images: [{ url: '/Cloud-Services-Hero.png', width: 1200, height: 630, alt: 'Cloud Services' }],
  },
};

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>

        {/* HERO SECTION - Full bleed with background image + dark overlay */}
        <section className="relative w-full min-h-[600px] lg:min-h-[760px] overflow-hidden flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Cloud-Services-Hero.png"
              alt="Cloud Services Hero"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[rgba(7,9,51,0.80)]" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-24 lg:py-32">
            {/* Badge */}
            <div className="inline-block bg-[rgba(6,186,225,0.15)] border border-[#06bae1] rounded-full px-5 py-2 mb-8">
              <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-widest">
                CLOUD INFRASTRUCTURE FOR GROWING TEAMS
              </span>
            </div>

            <h1 className="text-white font-roboto font-bold text-[44px] sm:text-[56px] lg:text-[64px] leading-tight mb-0">
              Scalable Cloud
            </h1>
            <h1 className="text-[#06bae1] font-roboto font-bold text-[44px] sm:text-[56px] lg:text-[64px] leading-tight mb-6">
              for Your Business
            </h1>

            <p className="text-[rgba(255,255,255,0.75)] font-poppins text-[15px] lg:text-[17px] leading-relaxed max-w-[500px] mb-12">
              <span className="border-b border-white pb-1">Strategic cloud adoption, migration, and optimization tailored to small and medium businesses.</span>
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#06bae1] text-[#0a0d53] font-bold font-inter text-[14px] px-8 py-4 rounded-[8px] hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Provider logos bottom-right (desktop only) */}
            <div className="hidden lg:flex absolute -bottom-8 right-[120px] z-20 items-center">
              {[
                { label: 'AWS', bg: 'bg-[#FF9900]' },
                { label: 'Azure', bg: 'bg-[#0078D4]' },
                { label: 'GCP', bg: 'bg-[#4285F4]' },
              ].map((provider, i) => (
                <div key={i} className={`w-[72px] h-[72px] rounded-full ${provider.bg} -ml-4 first:ml-0 border-4 border-white shadow-md flex items-center justify-center`}>
                  <span className="text-white font-roboto font-bold text-[11px] text-center leading-tight">{provider.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT OUR SERVICE */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              {/* Left: Text */}
              <div className="flex-1 max-w-[520px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#06bae1] rounded-full" />
                  <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-wider">
                    ABOUT OUR SERVICE
                  </span>
                </div>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] leading-tight mb-6">
                  Building Reliable Cloud Infrastructure
                </h2>
                <p className="text-[#5b6472] font-inter text-[15px] leading-relaxed mb-10">
                  Strategic cloud adoption, migration, and optimization tailored to small and medium businesses &mdash; built to scale with you.
                </p>

                {/* Steps */}
                <div className="relative flex mt-8">
                  <div className="flex flex-col gap-10 pr-8 border-r-2 border-[#06bae1]">
                    {[
                      {
                        title: 'Our Approach',
                        desc: 'We map your current stack and design a migration path with zero surprises.',
                      },
                      {
                        title: 'Our Commitment',
                        desc: 'Ongoing optimization so your cloud spend and performance stay in balance.',
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start gap-6">
                        <div className="relative shrink-0 w-[48px] h-[48px]">
                          <div className="w-[48px] h-[48px] rounded-full bg-[rgba(6,186,225,0.12)] flex items-center justify-center">
                            <div className="w-[20px] h-[20px] rounded-full bg-[#06bae1]" />
                          </div>
                        </div>
                        <div className="pt-1">
                          <h4 className="font-poppins font-bold text-[#0a0d53] text-[16px] mb-1">{step.title}</h4>
                          <p className="font-inter text-[#5b6472] text-[13px] leading-relaxed max-w-[280px]">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Image with floating badge */}
              <div className="flex-1 relative w-full min-h-[420px] lg:min-h-[520px] mt-8 lg:mt-0">
                <div className="relative w-full h-full min-h-[420px] lg:min-h-[520px] rounded-tl-2xl rounded-tr-[40px] rounded-bl-2xl rounded-br-2xl overflow-hidden">
                  <Image
                    src="/lady-with-headset.png"
                    alt="Cloud Support Team"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Floating square icon (top right) */}
                <div className="hidden lg:block absolute lg:top-8 top-8 lg:right-[10%] right-[2%] w-[70px] h-[70px] bg-[#06bae1] rounded-2xl" />

                {/* Floating badge: 50+ Successful Migrations */}
                <div className="absolute lg:bottom-2 bottom-2 left-[4%] lg:left-[10%] bg-[#0a0d53] rounded-[16px] px-5 py-4 flex items-center gap-4 shadow-xl border border-[rgba(255,255,255,0.08)]">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#06bae1] shrink-0 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-roboto font-bold text-[24px] leading-none">50+</h4>
                    <p className="text-[rgba(255,255,255,0.6)] text-[11px] mt-1">Successful Migrations</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* OUR SERVICES - Light background section */}
        <section className="bg-[#f8f9fa] py-16 lg:py-24 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-wider">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] leading-tight mb-4">
                Always we offer the best cloud services for success!
              </h2>
              <p className="text-[#5b6472] font-inter text-[14px] max-w-[640px] mx-auto">
                Strategic cloud adoption, migration, and optimization tailored to how your business actually runs.
              </p>
            </div>

            {/* Services Layout - Network Nodes */}
            <div className="relative w-full max-w-[1000px] mx-auto min-h-[400px] flex items-center justify-center mt-12 lg:mt-24">

              {/* Connecting Lines (Desktop Only) */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-[0.08]">
                {/* Horizontal main line */}
                <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-[#0a0d53] -translate-y-1/2" />
                {/* Vertical lines */}
                <div className="absolute top-[20%] bottom-[20%] left-[25%] w-[1px] bg-[#0a0d53]" />
                <div className="absolute top-[20%] bottom-[20%] right-[25%] w-[1px] bg-[#0a0d53]" />
              </div>

              {/* Node: Cost Optimization (Top Left) */}
              <div className="hidden lg:flex absolute top-0 left-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#e4e9f2] flex items-center justify-center shadow-sm">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#06bae1]" />
                </div>
                <h4 className="font-poppins font-bold text-[#0a0d53] text-[11px]">Cost Optimization</h4>
              </div>

              {/* Node: Infrastructure Setup (Bottom Left) */}
              <div className="hidden lg:flex absolute bottom-0 left-[15%] -translate-x-1/2 translate-y-1/2 flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#e4e9f2] flex items-center justify-center shadow-sm">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#06bae1]" />
                </div>
                <h4 className="font-poppins font-bold text-[#0a0d53] text-[11px]">Infrastructure Setup</h4>
              </div>

              {/* Center Card */}
              <div className="relative z-10 bg-white rounded-[24px] p-8 flex flex-col items-center text-center w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="w-[64px] h-[64px] rounded-full bg-[#06bae1] flex items-center justify-center mb-4">
                  <div className="w-[20px] h-[20px] rounded-full bg-white" />
                </div>
                <h3 className="font-poppins font-bold text-[#0a0d53] text-[18px] mb-3">Cloud Migration</h3>
                <p className="font-inter text-[#5b6472] text-[11px] leading-relaxed mb-6 px-2">
                  Davethan Technologies has been guiding cloud strategy for growing teams since 2019.
                </p>
                <Link href="#" className="bg-[#06bae1] text-white font-inter font-bold text-[11px] px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Read More
                </Link>
              </div>

              {/* Node: Backup & Recovery (Top Right) */}
              <div className="hidden lg:flex absolute top-0 right-[25%] translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#e4e9f2] flex items-center justify-center shadow-sm">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#06bae1]" />
                </div>
                <h4 className="font-poppins font-bold text-[#0a0d53] text-[11px]">Backup & Recovery</h4>
              </div>

              {/* Node: 24/7 Monitoring (Bottom Right) */}
              <div className="hidden lg:flex absolute bottom-0 right-[15%] translate-x-1/2 translate-y-1/2 flex-col items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#e4e9f2] flex items-center justify-center shadow-sm">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#06bae1]" />
                </div>
                <h4 className="font-poppins font-bold text-[#0a0d53] text-[11px]">24/7 Monitoring</h4>
              </div>

              {/* More Services Circle (Far Right) */}
              <div className="hidden lg:flex absolute top-0 -right-12 translate-x-full items-center justify-center w-[80px] h-[80px] rounded-full bg-[rgba(6,186,225,0.15)] cursor-pointer hover:bg-[rgba(6,186,225,0.25)] transition-colors">
                <span className="text-[#0a0d53] font-bold text-[10px] text-center leading-tight">More<br />Services +</span>
              </div>

              {/* Mobile Grid Layout */}
              <div className="grid grid-cols-2 gap-8 lg:hidden mt-12 w-full">
                {[
                  { title: 'Cost Optimization' },
                  { title: 'Infrastructure Setup' },
                  { title: 'Backup & Recovery' },
                  { title: '24/7 Monitoring' },
                ].map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-3">
                    <div className="w-[60px] h-[60px] rounded-full bg-white border border-[#e4e9f2] flex items-center justify-center shadow-sm">
                      <div className="w-[12px] h-[12px] rounded-full bg-[#06bae1]" />
                    </div>
                    <h4 className="font-poppins font-bold text-[#0a0d53] text-[11px]">{s.title}</h4>
                  </div>
                ))}
                <div className="col-span-2 flex justify-center mt-4">
                  <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[rgba(6,186,225,0.15)] cursor-pointer">
                    <span className="text-[#0a0d53] font-bold text-[10px] text-center leading-tight">More<br />Services +</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-0">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#06bae1] rounded-full" />
                  <span className="text-[#06bae1] font-inter font-bold text-[11px] uppercase tracking-wider">
                    CASE STUDIES
                  </span>
                </div>
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[28px] lg:text-[40px] leading-tight max-w-[900px]">
                  We&apos;ve deployed cloud infrastructure for 50+ businesses across two continents.
                </h2>
              </div>
              <Link href="/blog" className="font-inter font-bold text-[#06bae1] text-[14px] hover:underline inline-flex items-center gap-1 whitespace-nowrap shrink-0">
                View More <ArrowRight className="w-4 h-4" />
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
