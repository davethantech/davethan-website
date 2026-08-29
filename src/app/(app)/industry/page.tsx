import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { FolderCheck, Building2, Headset, Activity } from "lucide-react";

export const metadata = {
  title: 'Industries We Serve | Davethan Technologies Limited',
  description: 'Davethan delivers the knowledge and opportunity to optimize every layer of your stack, tailored to how your sector actually works.',
  openGraph: {
    title: 'Industries We Serve | Davethan Technologies Limited',
    description: 'Davethan delivers the knowledge and opportunity to optimize every layer of your stack, tailored to how your sector actually works.',
    url: 'https://davethan.tech/industry',
    images: [{ url: '/industry-hero-collage.png', width: 1200, height: 630, alt: 'Industries We Serve' }],
  },
};

const industryFaqs: FAQItem[] = [
  { q: "Do you support regulated industries like healthcare or fintech?", a: "Yes — we build compliance-ready infrastructure and security for regulated, high-stakes environments." },
  { q: "Can you manage our existing cloud infrastructure?", a: "Absolutely. We work with AWS, Azure, and Google Cloud to optimize and secure your existing setup." },
  { q: "How quickly can you deploy new systems?", a: "Our rapid deployment strategies mean most core infrastructure updates can be completed within days." },
  { q: "What does 24/7 monitoring actually include?", a: "Continuous tracking of network health, immediate threat detection, and proactive issue resolution around the clock." }
];

export default function IndustryPage() {
  return (
    <div className="bg-white min-h-screen font-inter">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="bg-[#070933] relative z-10 pt-12 lg:pt-16 flex flex-col items-center text-center">
          {/* Decorative Ellipse */}
          <div className="absolute left-[10px] sm:left-[20px] lg:left-[80px] top-[10px] lg:top-[40px] w-[60px] lg:w-[150px] h-[60px] lg:h-[150px] z-0 pointer-events-none">
            <Image src="/industry-hero-ellipse.png" alt="Decorative" fill sizes="150px" className="object-contain" />
          </div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] w-full flex flex-col items-center relative z-10">
            {/* Center Content */}
            <div className="w-full max-w-3xl flex flex-col items-center space-y-6 lg:space-y-8 pb-12 lg:pb-16">
              <div className="inline-block bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] rounded-full px-4 py-2">
                <span className="text-[#06bae1] font-inter font-bold text-[10px] lg:text-[11px] tracking-wider uppercase">
                  DAVETHAN TECHNOLOGIES LTD
                </span>
              </div>

              <h1 className="text-white font-roboto font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">
                Welcome To Davethan IT Solutions
              </h1>

              <p className="text-[rgba(255,255,255,0.7)] font-poppins text-[14px] lg:text-[15px] leading-relaxed max-w-2xl">
                Take your business to the next level with managed IT, cybersecurity, and cloud strategy built around your industry.
              </p>

              <div className="pt-2 lg:pt-4">
                <Link href="/contact">
                  <div className="bg-gradient-to-r from-[#06bae1] to-[#bff9ea] rounded-full h-[54px] w-[222px] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <span className="text-[#0a0d53] font-inter font-bold text-[14px]">
                      Contact Davethan &nbsp; ✓
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Bottom Centered Image - Overlapping */}
            <div className="relative w-[90%] max-w-[800px] h-[250px] sm:h-[350px] lg:h-[450px] shrink-0 -mb-[120px] sm:-mb-[170px] lg:-mb-[220px] z-20">
              <Image
                src="/industry-hero-collage.png"
                alt="Industry Hero Collage"
                fill
                sizes="(max-width: 1024px) 90vw, 800px"
                className="object-cover rounded-[16px] lg:rounded-[24px] shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* LOGO BAR */}
        <section className="bg-white pt-[160px] sm:pt-[220px] lg:pt-[280px] pb-12 border-b border-gray-100 relative z-0">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <p className="text-center text-[#8c929c] font-space-grotesk font-bold text-[16px] tracking-widest flex flex-wrap justify-center gap-8 md:gap-16">
              <span>Nexora</span>
              <span>Fieldstone</span>
              <span>Vantik</span>
              <span>Corelane</span>
              <span>Bright&Co</span>
            </p>
          </div>
        </section>

        {/* WE KEEP YOUR SYSTEMS SECURE */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-center gap-16 relative">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-[rgba(191,249,234,0.58)] rounded-full px-6 py-2">
                <span className="text-[#0a0d53] font-inter font-bold text-[11px] uppercase">
                  INDUSTRY FOCUSED
                </span>
              </div>

              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] leading-tight max-w-xl">
                We keep your systems secure and compliant
              </h2>

              <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed max-w-xl">
                Davethan delivers the knowledge and opportunity to optimize every layer of your stack. We combine technology and intelligence to manage cost and risk across your industry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {[
                  "Data Security", "Cloud Migration",
                  "24/7 Monitoring", "Rapid Deployment",
                  "Compliance Ready", "Custom Integrations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[16px] h-[16px] bg-[#06bae1] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-[#0a0d53] font-inter font-medium text-[13px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-8 pt-8">
                <Link href="/contact">
                  <div className="bg-gradient-to-r from-[#06bae1] to-[#bff9ea] rounded-[10px] h-[58px] px-[30px] flex items-center justify-center hover:opacity-90 transition-opacity shadow-[0px_4px_2px_rgba(6,186,225,0.67)]">
                    <span className="text-[#0a0d53] font-roboto font-bold text-[20px]">
                      Contact us
                    </span>
                  </div>
                </Link>
                <div className="flex flex-col">
                  <span className="text-[#0a0d53] font-inter text-[11px] opacity-70 mb-1">Have Questions?</span>
                  <span className="text-[#0a0d53] font-inter font-semibold text-[14px]">+44 0208 058 0860</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative h-[400px] sm:h-[450px] lg:h-[600px] items-center lg:items-start">
              {/* Main Container - acts as the anchor for absolute positioning */}
              <div className="relative w-[85%] sm:w-[420px] h-[320px] sm:h-[400px] lg:h-[440px] lg:mt-[80px]">

                {/* Main image */}
                <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-lg">
                  <Image src="/industry-section-main.png" alt="Industry operations" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>

                {/* Overlapping small image */}
                <div className="absolute -left-[10%] lg:-left-[60px] -bottom-[20%] lg: -bottom-[20px] w-[65%] lg:w-[260px] h-[55%] lg:h-[210px] rounded-[16px] overflow-hidden z-10">
                  <Image src="/industry-section-overlay.png" alt="Professional" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-contain" />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -left-[2%] lg:-left-[32px] -bottom-[10%] lg:-bottom-[20px] w-[160px] lg:w-[204px] h-[60px] lg:h-[69px] bg-[#0a0d53] rounded-[16px] flex flex-col items-center justify-center z-20 shadow-lg">
                  <span className="text-white font-space-grotesk font-bold text-[24px] lg:text-[28px] leading-none">5+</span>
                  <span className="text-[rgba(255,255,255,0.7)] font-inter text-[10px] lg:text-[11px] mt-1">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS BAND */}
        <section className="bg-[#070933] py-20 w-full relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Successful Projects", value: "50+", icon: FolderCheck },
                { label: "Industries Served", value: "12", icon: Building2 },
                { label: "Support Coverage", value: "24/7", icon: Headset },
                { label: "Uptime SLA", value: "99.9%", icon: Activity }
              ].map((metric, i) => (
                <div key={i} className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-[12px] p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-[36px] h-[36px] bg-[#06bae1]/20 rounded-full flex items-center justify-center shrink-0">
                      <metric.icon className="w-5 h-5 text-[#06bae1]" />
                    </div>
                    <span className="text-white font-space-grotesk font-bold text-[28px] leading-none">{metric.value}</span>
                  </div>
                  <span className="text-[rgba(255,255,255,0.6)] font-inter text-[13px]">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block bg-[rgba(191,249,234,0.58)] rounded-full px-6 py-2 mb-4">
                <span className="text-[#0a0d53] font-inter font-bold text-[11px] uppercase">
                  OUR INDUSTRIES
                </span>
              </div>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] mb-4">
                Industries We Serve
              </h2>
              <p className="text-[#5b6472] font-inter text-[13px] max-w-2xl">
                Davethan delivers the knowledge and opportunity to optimize every layer of your stack, tailored to how your sector actually works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col rounded-[20px] shadow-[0px_4px_15px_rgba(191,249,234,0.4)] group overflow-hidden bg-white">
                <div className="h-[220px] relative w-full overflow-hidden">
                  <Image src="/industry-fintech.png" alt="Fintech" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 shadow-[inset_0px_4px_4px_0px_rgba(191,249,234,0.8)] pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col items-start border-b border-l border-r border-[#e4e9f2] rounded-b-[20px] flex-grow">
                  <div className="w-[56px] h-[56px] bg-[#f0f9ff] rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#06bae1] text-[24px]">🏦</span>
                  </div>
                  <h3 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-4">Fintech & Financial Services</h3>
                  <p className="text-[#5b6472] font-inter text-[13px] mb-6 flex-grow">
                    Compliance-ready infrastructure and security built for regulated, high-stakes environments.
                  </p>
                  <Link href="/industry/fintech" className="text-[#06bae1] font-inter font-bold text-[12px] hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col rounded-[20px] shadow-[0px_4px_15px_rgba(191,249,234,0.4)] group overflow-hidden bg-white">
                <div className="h-[220px] relative w-full overflow-hidden">
                  <Image src="/industry-healthcare.png" alt="Healthcare" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 shadow-[inset_0px_4px_4px_0px_rgba(191,249,234,0.8)] pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col items-start border-b border-l border-r border-[#e4e9f2] rounded-b-[20px] flex-grow">
                  <div className="w-[56px] h-[56px] bg-[#f0f9ff] rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#06bae1] text-[24px]">🏥</span>
                  </div>
                  <h3 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-4">Healthcare & Life Sciences</h3>
                  <p className="text-[#5b6472] font-inter text-[13px] mb-6 flex-grow">
                    Secure systems and data handling for patient records, research, and clinical operations.
                  </p>
                  <Link href="/industry/healthcare" className="text-[#06bae1] font-inter font-bold text-[12px] hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col rounded-[20px] shadow-[0px_4px_15px_rgba(191,249,234,0.4)] group overflow-hidden bg-white">
                <div className="h-[220px] relative w-full overflow-hidden">
                  <Image src="/industry-retail.png" alt="Retail" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 shadow-[inset_0px_4px_4px_0px_rgba(191,249,234,0.8)] pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col items-start border-b border-l border-r border-[#e4e9f2] rounded-b-[20px] flex-grow">
                  <div className="w-[56px] h-[56px] bg-[#f0f9ff] rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#06bae1] text-[24px]">🛍️</span>
                  </div>
                  <h3 className="text-[#0a0d53] font-poppins font-bold text-[18px] mb-4">Retail & E-commerce</h3>
                  <p className="text-[#5b6472] font-inter text-[13px] mb-6 flex-grow">
                    Scalable cloud infrastructure that keeps storefronts fast and reliable during peak demand.
                  </p>
                  <Link href="/industry/retail" className="text-[#06bae1] font-inter font-bold text-[12px] hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST AND COMPLIANCE */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block bg-[rgba(191,249,234,0.58)] rounded-full px-6 py-2 mb-4">
                <span className="text-[#0a0d53] font-inter font-bold text-[11px] uppercase">
                  TRUST & COMPLIANCE
                </span>
              </div>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[28px] lg:text-[36px] mb-12">
                Built on Trust and Compliance
              </h2>

              <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {[
                  "Data Protection First",
                  "Secure by Design",
                  "Compliance-Ready Delivery",
                  "UK & Nigeria Registered"
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#e4e9f2] rounded-full h-[44px] px-6 flex items-center gap-3">
                    <div className="w-[8px] h-[8px] bg-[#06bae1] rounded-full" />
                    <span className="text-[#0a0d53] font-inter font-bold text-[12px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REAL OUTCOMES */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block bg-[rgba(191,249,234,0.58)] rounded-full px-6 py-2 mb-4">
                <span className="text-[#0a0d53] font-inter font-bold text-[11px] uppercase">
                  RESULTS
                </span>
              </div>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[28px] lg:text-[36px]">
                Real Outcomes Across Industries
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { val: "40%", desc: "Faster incident response", sub: "FINTECH CLIENT" },
                { val: "99.9%", desc: "Uptime maintained", sub: "HEALTHCARE CLIENT" },
                { val: "3x", desc: "Faster deployments", sub: "RETAIL CLIENT" }
              ].map((res, i) => (
                <div key={i} className="bg-white border border-[#e4e9f2] rounded-[16px] h-[180px] p-8 flex flex-col justify-center shadow-sm">
                  <span className="text-[#06bae1] font-space-grotesk font-bold text-[44px] leading-tight">{res.val}</span>
                  <span className="text-[#0a0d53] font-inter text-[15px] mb-2">{res.desc}</span>
                  <span className="text-[#5b6472] font-inter font-bold text-[11px] uppercase tracking-wider">{res.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL BACKGROUND */}
        <section className="relative h-[400px] w-full flex items-center mt-20">
          <Image
            src="/industry-testimonial-bg.png"
            alt="Testimonial background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(7,9,51,0.6)]" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[140px] relative z-10 w-full">
            <div className="bg-[#0a0d53] rounded-[20px] p-8 lg:p-[32px] max-w-md shadow-2xl">
              <p className="text-white font-poppins text-[16px] leading-relaxed mb-6 italic">
                “Davethan understood our compliance requirements from day one — that made all the difference.”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[44px] h-[44px] bg-[#06bae1] rounded-full overflow-hidden shrink-0 flex items-center justify-center text-white text-xl">
                  👤
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-inter font-bold text-[13px]">Client Feedback</span>
                  <span className="text-[rgba(255,255,255,0.6)] font-inter text-[11px]">IT Director, Healthcare Client</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-[#06bae1] font-roboto font-bold text-[18px] mb-2 uppercase tracking-wide">
              INDUSTRY FAQ
            </h3>
            <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] lg:text-[40px] mb-12">
              Questions Industry Teams Ask Us
            </h2>

            <FAQAccordion faqs={industryFaqs} />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
