import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-inter">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="bg-[#070933] relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-4 lg:py-4 flex flex-col lg:flex-row items-center relative min-h-[600px]">
            <div className="z-10 w-full lg:w-[540px] shrink-0">
              <h1 className="text-[44px] font-roboto font-semibold leading-tight mb-6">
                <span className="text-[#bff9ea]">Get to know </span>
                <span className="text-[#06bae1]">Davethan Technologies</span>
              </h1>
              <p className="text-white opacity-75 font-poppins text-[16px] leading-relaxed mb-10 text-justify max-w-[480px]">
                Davethan Technologies Ltd. specializes in scalable software, cloud apps, AI-driven business intelligence, and cybersecurity. Operating in the UK and Nigeria, we enhance efficiency, security, and digital transformation. Our services include Managed IT, procurement, custom software, and project management, helping businesses streamline operations and scale successfully.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/contact" className="w-full sm:w-auto">
                  <div
                    className="rounded-[10px] px-[30px] py-[18px] flex items-center justify-center transition-transform hover:scale-105 drop-shadow-[0px_4px_2px_rgba(6,186,225,0.67)]"
                    style={{ backgroundImage: "linear-gradient(270deg, rgb(191, 249, 234) 0%, rgb(6, 186, 225) 100%)" }}
                  >
                    <span className="text-[#0a0d53] font-roboto font-bold text-[20px]">
                      Get in touch
                    </span>
                  </div>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <div className="border border-white rounded-[8px] px-[30px] py-[18px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                    <span className="text-white font-inter font-bold text-[15px]">
                      Our Services
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[400px] mt-12 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[590px] lg:w-[769px] lg:h-[417px] shrink-0 z-0">
              <Image
                src="/about_hero_image.png"
                alt="Davethan Hero"
                fill
                className="object-cover rounded-[180px]"
                priority
              />
            </div>
          </div>
        </section>

        {/* OUR CORE SERVICES */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] mb-4">
            Our Core Services
          </h2>
          <p className="text-[#5b6472] font-inter text-[14px] mb-16">
            Four ways we take IT off your plate — pick one or run them together.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, title: "Managed IT", icon: "/Ellipse_1.png" },
              { id: 2, title: "Cybersecurity", icon: "/Ellipse_2.png" },
              { id: 3, title: "Cloud Services", icon: "/Ellipse_3.png" },
              { id: 4, title: "IT Consultancy", icon: "/Ellipse_4.png" }
            ].map(service => (
              <div key={service.id} className="flex flex-col items-center gap-6">
                <div className="w-[88px] h-[88px] flex items-center justify-center relative drop-shadow-sm">
                  <Image src={service.icon} alt={service.title} fill className="object-contain" />
                </div>
                <h3 className="text-[#0a0d53] font-roboto font-bold text-[15px]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] flex flex-col lg:flex-row items-center relative min-h-[500px]">
            <div className="space-y-6 w-full lg:w-[560px] shrink-0 z-10">
              <h3 className="text-[#06bae1] font-roboto font-bold text-[18px] tracking-wider uppercase">
                WHO WE ARE
              </h3>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] max-w-md leading-tight">
                Real people behind your infrastructure
              </h2>
              <p className="text-[rgba(10,13,83,0.72)] font-poppins text-[16px] max-w-xl">
                Scalable software, cloud infrastructure, AI-driven intelligence, and cybersecurity — delivered by a team that teams in the UK and Nigeria.
              </p>

              <div className="grid grid-cols-2 gap-y-4 pt-4">
                {['Skilled Engineers', 'Efficient & Flexible', 'Affordable Pricing', '24/7 Support'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-[8px] h-[8px] bg-[#06bae1] rounded-full" />
                    <span className="text-[#0a0d53] font-inter font-medium text-[13px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-[#bff9ea] rounded-[15px] p-4 w-fit flex flex-col items-center justify-center text-[#0a0d53] font-inter font-bold text-[14px]">
                <span>2019</span>
                <span>Year founded</span>
              </div>

              <div className="mt-8 pt-4">
                <span className="text-[rgba(10,13,83,0.45)] font-inter font-medium text-[11px] tracking-wide">
                  MANAGED IT · CYBERSECURITY · CLOUD · IT CONSULTANCY
                </span>
              </div>
            </div>

            <div className="relative w-full h-[400px] mt-12 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[658px] lg:w-[700px] lg:h-[461px] shrink-0 z-0">
              <Image
                src="/who-we-are-image.png"
                alt="Who We Are"
                fill
                className="object-cover rounded-tl-[180px] rounded-br-[180px]"
              />
            </div>
          </div>
        </section>

        {/* TESTIMONIAL BAND */}
        <section className="relative h-[428px] w-full flex items-center justify-center">
          <Image
            src="/testimonial-image.png"
            alt="Testimonial background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(7,9,51,0.6)]" />

          <div className="relative z-10 bg-[#0a0d53] rounded-[20px] p-[36px] max-w-[460px] mx-4 flex flex-col gap-[20px]">
            <p className="text-white font-poppins text-[17px] italic">
              “Davethan feels like an extension of our own team — responsive, proactive, and easy to work with.”
            </p>
            <div className="flex items-center gap-[12px] mt-4">
              <div className="w-[44px] h-[44px] rounded-full bg-gray-300 overflow-hidden relative">
                {/* Fallback avatar if no image */}
                <div className="w-full h-full bg-[#06bae1]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-inter font-bold text-[13px]">Client Feedback</span>
                <span className="text-[rgba(255,255,255,0.6)] font-inter text-[11px]">Operations Lead, Fintech Client</span>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative w-full max-w-[520px] h-[380px]">
              <Image
                src="/bulb-with-trend-image.png"
                alt="Innovation"
                fill
                className="object-cover rounded-[150px]"
              />
            </div>

            <div className="flex-1 flex flex-col gap-12">
              <div className="max-w-md">
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] mb-4">
                  Our Approach
                </h2>
                <p className="text-[#5b6472] font-inter text-[13px] leading-relaxed">
                  Innovation is the heartbeat of Davethan Technologies. We don’t just keep up with industry trends; we lead by embracing cutting-edge technologies and methodologies. Our solutions are designed to position your business at the forefront of technological advancement.
                </p>
              </div>

              <div className="flex flex-col gap-8 relative pl-16">
                {/* Timeline vertical line placeholder */}
                <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-200" />

                {[
                  { title: "Client-centric", desc: "Customer satisfaction is our top priority in every engagement, every time." },
                  { title: "Competence", desc: "Highly skilled engineers delivering efficient, effective solutions to meet your IT needs." },
                  { title: "Commitment", desc: "Consistently meeting and surpassing customer expectations with dependable, top-notch service." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle icon on the timeline */}
                    <div className="absolute -left-16 top-0 w-[48px] h-[48px] bg-cyan-50 rounded-full border border-cyan-200 flex items-center justify-center z-10">
                      <div className="w-[16px] h-[16px] bg-[#06bae1] rounded-full" />
                    </div>
                    <h4 className="text-[#0a0d53] font-roboto font-bold text-[19px] mb-2">{item.title}</h4>
                    <p className="text-[#5b6472] font-inter text-[13px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h3 className="text-[#06bae1] font-roboto font-bold text-[18px] uppercase mb-2">
              GENERAL QUESTIONS
            </h3>
            <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px]">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion />
        </section>

        {/* BOTTOM BANNER */}
        <section className="bg-[#070933] py-24 relative overflow-hidden z-10">
          {/* Middle Line (Passes behind the card) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[rgba(255,255,255,0.08)] -translate-y-1/2 z-0" />

          <div className="absolute top-12 w-full text-center z-10">
            <span className="text-[rgba(255,255,255,0.6)] font-jetbrains text-[12px] tracking-wider uppercase">
              THE ENGINEERS WHO KEEP YOUR SYSTEMS RUNNING
            </span>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 mt-16">
            <div className="bg-white rounded-[24px] p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0px_4px_18px_13px_rgba(191,249,234,0.12)]">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-[#0a0d53] font-roboto font-bold text-[26px]">
                  Start the conversation with a free 30-minute consultation
                </h2>
                <p className="text-[#0a0d53] font-inter text-[13px]">
                  Let's discuss your IT strategy, services, and business solutions & compliance concerns.
                </p>
              </div>
              <Link href="/contact" className="shrink-0">
                <div className="bg-[rgba(6,186,225,0.2)] border border-[#0a0d53] rounded-[9px] h-[52px] px-8 flex items-center justify-center hover:bg-[rgba(6,186,225,0.3)] transition-colors">
                  <span className="text-[#0a0d53] font-inter font-bold text-[14px]">
                    Book your call
                  </span>
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
