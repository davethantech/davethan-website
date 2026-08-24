import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MonitorPlay, Lightbulb, Cloud } from "lucide-react";
import { CtaBlock } from "@/components/shared/CtaBlock";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative z-10 pt-16 lg:pt-24 pb-20 lg:pb-32 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] w-full flex flex-col lg:flex-row items-center gap-16 relative">

            {/* Left Text */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-10">
              <h1 className="text-[#0a0d53] font-roboto font-semibold text-[40px] sm:text-[48px] lg:text-[56px] leading-tight mb-6">
                IT Solutions for Your Business
              </h1>

              <p className="text-[#5b6472] font-poppins text-[16px] lg:text-[18px] leading-relaxed max-w-lg mb-10">
                Since our establishment, we have been delivering high quality and sustainable IT solutions for growing businesses across the UK and Nigeria.
              </p>

              <Link href="/contact">
                <div className="bg-[#0a0d53] rounded-[8px] h-[50px] px-[32px] flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span className="text-white font-inter font-bold text-[14px]">
                    Learn More &nbsp; →
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[55%] relative h-[350px] sm:h-[450px] lg:h-[500px] flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-[90%] h-full rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src="/services-hero.png"
                  alt="IT Solutions for Your Business"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-20 bg-white relative z-10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col items-center">

            <div className="text-center mb-16">
              <h2 className="text-[#06bae1] font-roboto font-bold text-[14px] tracking-wider uppercase mb-2">
                AREAS WHAT WE SERVE
              </h2>
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px]">
                Our Services
              </h3>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">

              {/* Service 1 */}
              <div className="bg-white border border-[#e4e9f2] rounded-[12px] p-8 pb-12 shadow-[0px_8px_24px_0px_rgba(10,13,51,0.06)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[64px] h-[64px] bg-[#bff9ea]/40 rounded-full flex items-center justify-center mb-6">
                  <MonitorPlay className="w-8 h-8 text-[#0a0d53]" />
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-4">
                  Managed IT
                </h4>
                <p className="text-[#5b6472] font-inter text-[13px] leading-relaxed">
                  24/7 remote monitoring and proactive support so issues get caught before they impact your business.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-[#e4e9f2] rounded-[12px] p-8 pb-12 shadow-[0px_8px_24px_0px_rgba(10,13,51,0.06)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[64px] h-[64px] bg-[#bff9ea]/40 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-[#0a0d53]" />
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-4">
                  IT Consultancy
                </h4>
                <p className="text-[#5b6472] font-inter text-[13px] leading-relaxed">
                  Bespoke IT strategies that align seamlessly with your business objectives, from ideation to execution.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-[#e4e9f2] rounded-[12px] p-8 pb-12 shadow-[0px_8px_24px_0px_rgba(10,13,51,0.06)] flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-[64px] h-[64px] bg-[#bff9ea]/40 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-[#0a0d53]" />
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-4">
                  Cloud Development
                </h4>
                <p className="text-[#5b6472] font-inter text-[13px] leading-relaxed">
                  Strategic cloud adoption, migration, and optimization tailored to small and medium businesses.
                </p>
              </div>

            </div>

            <Link href="/services">
              <div className="bg-[#0a0d53] rounded-[8px] h-[52px] px-[40px] flex items-center justify-center hover:opacity-90 transition-opacity">
                <span className="text-white font-inter font-bold text-[14px]">
                  See All Services &nbsp; →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-24 relative overflow-hidden bg-[#bff9ea]/30">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] relative z-10 flex flex-col items-center">

            <div className="text-center mb-16">
              <h2 className="text-[#06bae1] font-roboto font-bold text-[14px] tracking-wider uppercase mb-2">
                SOME REASONS
              </h2>
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px]">
                Why Choose Us
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto w-full">

              {/* Reason 1 */}
              <div className="flex items-start gap-6">
                <span className="text-[#06bae1] font-space-grotesk font-bold text-[22px] leading-none mt-1">01</span>
                <div>
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-2">High Quality Delivery</h4>
                  <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed">We use proven tools and processes to deliver efficient, effective IT solutions.</p>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex items-start gap-6">
                <span className="text-[#06bae1] font-space-grotesk font-bold text-[22px] leading-none mt-1">02</span>
                <div>
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-2">Dedicated 24/7 Support</h4>
                  <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed">You can rely on our round-the-clock support team for any issue you have.</p>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex items-start gap-6">
                <span className="text-[#06bae1] font-space-grotesk font-bold text-[22px] leading-none mt-1">03</span>
                <div>
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-2">Compliance-Ready</h4>
                  <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed">We navigate GDPR and industry compliance requirements as standard.</p>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="flex items-start gap-6">
                <span className="text-[#06bae1] font-space-grotesk font-bold text-[22px] leading-none mt-1">04</span>
                <div>
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-2">Agile & Fast Working Style</h4>
                  <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed">Our approach helps us adapt quickly and deliver better outcomes, faster.</p>
                </div>
              </div>

              {/* Reason 5 */}
              <div className="flex items-start gap-6">
                <span className="text-[#06bae1] font-space-grotesk font-bold text-[22px] leading-none mt-1">05</span>
                <div>
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-2">Client-Centric Approach</h4>
                  <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed">Customer satisfaction is our top priority in every engagement.</p>
                </div>
              </div>

              {/* Reason 6 */}
              <div className="flex items-start gap-6">
                <span className="text-[#06bae1] font-space-grotesk font-bold text-[22px] leading-none mt-1">06</span>
                <div>
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-2">Skilled, Experienced Engineers</h4>
                  <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed">Our team has the expertise to meet your IT requirements end to end.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* OUR PROCESS SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col items-center text-center">

            <div className="mb-20">
              <h2 className="text-[#06bae1] font-roboto font-bold text-[16px] tracking-wider uppercase mb-3">
                OUR PROCESS
              </h2>
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[36px] lg:text-[44px]">
                From First Call to Steady State
              </h3>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl relative">

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[72px] h-[72px] bg-[#bff9ea]/50 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-[#0a0d53] font-space-grotesk font-bold text-[20px] absolute z-10">01</span>
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[20px] mb-3">Discover</h4>
                <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed max-w-[260px]">
                  We audit your current stack and flag what's fragile before it breaks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[72px] h-[72px] bg-[#bff9ea]/50 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-[#0a0d53] font-space-grotesk font-bold text-[20px] absolute z-10">02</span>
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[20px] mb-3">Design</h4>
                <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed max-w-[260px]">
                  You get a clear roadmap, not a slide deck full of buzzwords.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[72px] h-[72px] bg-[#bff9ea]/50 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-[#0a0d53] font-space-grotesk font-bold text-[20px] absolute z-10">03</span>
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[20px] mb-3">Deploy</h4>
                <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed max-w-[260px]">
                  We implement in phases, so nothing critical goes down mid-migration.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-[72px] h-[72px] bg-[#bff9ea]/50 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-[#0a0d53] font-space-grotesk font-bold text-[20px] absolute z-10">04</span>
                </div>
                <h4 className="text-[#0a0d53] font-poppins font-bold text-[20px] mb-3">Support</h4>
                <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed max-w-[260px]">
                  Ongoing monitoring and a real human on call, 24/7.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 bg-white relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">

            {/* Circular Graphic — exact SVG from design */}
            <div className="relative flex-shrink-0" style={{ width: "340px", height: "298px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 440" width="100%" height="100%">
                <defs>
                  <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');`}</style>
                </defs>

                {/* Outer crescent shape */}
                <path
                  d="M 390 220 A 180 180 0 1 0 390 220.01 M 390 220 A 150 150 0 1 1 390 219.99"
                  fill="#00B4E6"
                  fillRule="evenodd"
                />

                {/* Top right medium cyan dot */}
                <circle cx="418" cy="70" r="21" fill="#00B4E6" />

                {/* Far right light mint dot */}
                <circle cx="468" cy="136" r="11" fill="#B7F3E6" />

                {/* Center Text Group */}
                <g textAnchor="middle">
                  <text
                    x="240"
                    y="218"
                    fill="#0A0D53"
                    fontFamily="'Space Grotesk', sans-serif"
                    fontSize="56px"
                    fontStyle="normal"
                    fontWeight="700"
                  >5</text>
                  <text x="240" y="260" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="600" fill="#586474">Years of</text>
                  <text x="240" y="288" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="600" fill="#586474">Experience</text>
                </g>
              </svg>
            </div>

            {/* Stats — min-width on number keeps all rows evenly spaced */}
            <div className="flex flex-col space-y-8 text-center lg:text-left">
              <div className="flex flex-row items-center gap-6">
                <h4 className="text-[#06bae1] font-space-grotesk font-bold text-[36px] leading-none min-w-[80px]">50+</h4>
                <p className="text-[#5b6472] font-inter text-[14px]">Businesses Supported</p>
              </div>
              <div className="flex flex-row items-center gap-6">
                <h4 className="text-[#06bae1] font-space-grotesk font-bold text-[36px] leading-none min-w-[80px]">5</h4>
                <p className="text-[#5b6472] font-inter text-[14px]">Engineers &amp; Consultants</p>
              </div>
              <div className="flex flex-row items-center gap-6">
                <h4 className="text-[#06bae1] font-space-grotesk font-bold text-[36px] leading-none min-w-[80px]">24/7</h4>
                <p className="text-[#5b6472] font-inter text-[14px]">Support Availability</p>
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
