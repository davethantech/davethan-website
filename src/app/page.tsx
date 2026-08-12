import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 pt-8 lg:pt-16 pb-24 flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 z-10 max-w-2xl mt-4 lg:mt-12">
            <h2 className="text-[#06bae1] font-roboto font-bold text-[20px] tracking-wide">
              IT Partner For Founders & Growing Teams
            </h2>
            <h1 className="text-[48px] lg:text-[48px] font-roboto font-semibold text-[#0a0d53] leading-tight">
              Scaling businesses with proven IT strategy
            </h1>
            <p className="text-[rgba(10,13,83,0.66)] font-poppins text-[20px] leading-relaxed max-w-xl">
              Managed infrastructure, cybersecurity, and cloud strategy built for teams who don't have time to babysit their tech.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="inline-block mt-4">
                <div
                  className="rounded-[10px] px-[36px] py-[16px] flex items-center justify-center transition-transform hover:scale-105 shadow-[0px_4px_4px_0px_rgba(6,186,225,0.4)]"
                  style={{ backgroundImage: "linear-gradient(270deg, rgb(191, 249, 234) 0%, rgb(6, 186, 225) 100%)" }}
                >
                  <span className="text-[#0a0d53] font-roboto font-bold text-[20px]">
                    Learn More
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 relative h-[400px] lg:h-[630px] w-full flex items-start justify-end lg:-mr-12 -mt-8 lg:-mt-16">
            <div className="relative w-[120%] lg:w-[700px] h-full right-[-10%] lg:right-[-50px]">
              <Image
                src="/Robot_hand_holding_glowing_globe.png"
                alt="Robot hand holding glowing globe"
                fill
                className="object-contain object-right-top lg:object-right-top"
                priority
              />
            </div>
          </div>
        </section>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-[#e4e9f2] w-full" />
        </div>

        {/* OUR SERVICE */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[#06bae1] font-roboto font-bold text-[20px] mb-4">
              Our Service
            </h2>
            <h3 className="text-[#0a0d53] font-roboto font-bold text-[32px] max-w-2xl mb-6">
              Solutions customized to meet your specific needs
            </h3>
            <p className="text-[rgba(10,13,83,0.72)] font-poppins text-[20px] max-w-4xl leading-relaxed">
              Empowering businesses with tailored IT strategy, proactive security, and cloud infrastructure that scales built to help founders achieve sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Managed IT',
                desc: 'Proactive monitoring of your infrastructure and systems.',
                icon: '/Managed_IT_Vector.png',
                active: true,
              },
              {
                title: 'IT Consultancy',
                desc: 'Engineers who help you plan infrastructure that scales.',
                icon: '/IT_Consultancy_Vector.png',
                active: false,
              },
              {
                title: 'Cybersecurity',
                desc: 'Protection built for the reality that threats grow with you.',
                icon: '/Cybersecurity_Vector.png',
                active: false,
              },
              {
                title: 'Cloud Services',
                desc: 'Cloud environments designed around how your team works.',
                icon: '/Cloud_Services_Vector.png',
                active: false,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-[14px] border border-[#e4e9f2] p-[24px] h-[200px] flex flex-col justify-between transition-shadow hover:shadow-[0px_4px_16px_rgba(6,186,225,0.2)]"
                style={service.active ? { backgroundImage: "linear-gradient(189.6deg, rgba(191, 249, 234, 0.15) 8.1%, rgba(6, 186, 225, 0.16) 89.6%)", boxShadow: "0px 4px 4px 0px rgba(6,186,225,0.72)" } : { backgroundColor: "white" }}
              >
                <div className="bg-[#06bae1] rounded-[10px] w-[44px] h-[44px] flex items-center justify-center shrink-0">
                  <Image src={service.icon} alt={service.title} width={24} height={24} className="object-contain" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h4 className="text-[#0a0d53] font-poppins font-bold text-[16px] leading-tight">{service.title}</h4>
                  <p className="text-[#5b6472] font-inter text-[12px] leading-snug">{service.desc}</p>
                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#06bae1] font-inter font-bold text-[12px] mt-1 inline-block">
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE BELIEVE */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#06bae1] font-roboto font-bold text-[20px] mb-4">What We Believe</h2>
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[32px] leading-tight">
                Proving Infrastructure solutions that transform businesses for tomorrow
              </h3>
            </div>
            <p className="text-[#5b6472] font-inter text-[15px] max-w-sm pb-2 lg:text-right">
              Four ways we take IT off your plate  pick one or run them together as your full IT department.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shrink-0">
              <Image
                src="/Woman_with_VR_headset.png"
                alt="Woman with VR headset"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: '24/7 Support', desc: "Infrastructure doesn't keep business hours, and neither do we. Help is available whenever you actually need it.", font: 'font-roboto' },
                { title: 'Competence', desc: "Every engineer on our team is skilled, tested, and accountable for solutions that actually work  not just tickets that get closed.", font: 'font-roboto' },
                { title: 'Client-Centric', desc: "Your satisfaction is the metric we hold ourselves to, not internal SLAs or vanity numbers.", font: 'font-roboto' },
                { title: 'Commitment', desc: "We consistently meet and surpass expectations on delivery. If we say it'll be done, it gets done.", font: 'font-space-grotesk' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-4">
                  <h4 className={`text-[#0a0d53] font-bold text-[20px] ${item.font}`}>{item.title}</h4>
                  <p className="text-[#5b6472] font-inter text-[16px] leading-relaxed">{item.desc}</p>
                  <Link href="/services" className="text-[#06bae1] font-inter font-bold text-[12px] mt-2">
                    Learn more &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY DAVETHAN */}
        <section className="pt-24 pb-20 relative overflow-hidden mb-10">
          <div className="absolute inset-0 bg-[rgba(191,249,234,0.55)] z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            <h2 className="text-[#06bae1] font-roboto font-bold text-[20px] text-center mb-4 uppercase">
              WHY DAVETHAN
            </h2>
            <h3 className="text-[#0a0d53] font-roboto font-bold text-[26px] text-center max-w-3xl mb-16">
              Transforming IT complexity into measurable business success
            </h3>

            <div className="flex flex-col lg:flex-row justify-center gap-[60px] w-full max-w-[1241px]">
              {/* Card 1 */}
              <div className="bg-white flex-1 rounded-tl-[30px] rounded-br-[30px] border border-[#e4e9f2] drop-shadow-[0px_4px_2px_rgba(6,186,225,0.26)] p-10 flex flex-col gap-5 min-h-[220px]">
                <div className="w-[32px] h-[32px] bg-gray-100 rounded-[16px] flex items-center justify-center">
                  <span className="font-jetbrains text-[#0a0a0a] text-[11px]">01</span>
                </div>
                <h4 className="text-[#0a0d53] font-space-grotesk font-bold text-[19px]">
                  A dedicated IT partner, not a ticket queue
                </h4>
                <p className="text-[#0a0a0a] font-inter text-[13px] leading-relaxed">
                  Because we're not a call center reading from a script. We're engineers who learn your setup, remember your name, and treat your infrastructure like it's our own. More than a service provider a tech partner
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white flex-1 rounded-tl-[30px] rounded-br-[30px] drop-shadow-[0px_4px_2px_rgba(6,186,225,0.27)] p-10 flex flex-col gap-5 min-h-[220px]">
                <div className="font-jetbrains text-[#0a0a0a] text-[11px] pt-2">02</div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[#0a0d53] font-space-grotesk font-bold text-[19px] mb-2">
                    Protecting your business at every layer
                  </h4>
                  <p className="text-[#0a0d53] font-inter font-bold text-[13px]">✓ Reduce security and compliance risk</p>
                  <p className="text-[#0a0d53] font-inter font-bold text-[13px]">✓ Cut infrastructure downtime</p>
                  <p className="text-[#0a0d53] font-inter font-bold text-[13px]">✓ Scale systems without re-architecting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 border-t border-b border-[rgba(6,186,225,0.54)] grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <div className="flex items-center gap-6 justify-self-start">
              <span className="text-[#0a0d53] font-space-grotesk font-bold text-[36px]">99.9%</span>
              <div className="text-[#5b6472] font-inter text-[11px] leading-tight">
                <p>Infrastructure monitoring</p>
                <p>& uptime commitment</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 justify-self-center">
              <Image src="/star_metric.png" alt="5 Stars" width={75} height={15} className="object-contain h-[15px] w-auto" />
              <span className="text-[#5b6472] font-inter text-[11px]">Client-rated support quality</span>
            </div>

            <div className="bg-[#f4f8fc] border border-[#e4e9f2] rounded-[22px] px-6 py-3 flex items-center justify-self-end">
              <span className="text-[#5b6472] font-inter text-[11px] whitespace-pre-wrap">
                TRUST  Registered UK company — No. 14779945
              </span>
            </div>
          </div>
        </section>

        {/* OPERATIONAL EFFICIENCY */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 w-full space-y-12">
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[26px] leading-snug">
                Unlock operational efficiency and reduce risk with IT built around your business
              </h2>

              <div className="space-y-6">
                {[
                  { label: 'Managed IT coverage', value: '99%' },
                  { label: 'Security response time', value: '95%' },
                  { label: 'Client retention', value: '98%' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col w-full max-w-[600px]">
                    <div className="flex justify-between items-end pb-3 border-b border-[#e4e9f2]">
                      <span className="text-[#0a0d53] font-inter font-bold text-[14px] pl-2">{stat.label}</span>
                      <span className="text-[#0a0d53] font-space-grotesk font-bold text-[24px]">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full flex justify-end">
              <div className="relative w-full max-w-[586px] h-[326px] rounded-[18px] overflow-hidden">
                <Image
                  src="/Office_meeting_photo.png"
                  alt="Office Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#070933] py-24 relative z-10">
          {/* Middle Line (Passes behind the card) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[rgba(255,255,255,0.08)] -translate-y-1/2 z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-[24px] p-12 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
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

        {/* SEPARATOR BETWEEN CTA AND TEAM */}
        <div className="bg-[#070933]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-[1px] bg-[rgba(255,255,255,0.08)]" />
          </div>
        </div>

        {/* THE TEAM BEHIND YOUR INFRASTRUCTURE */}
        <section className="bg-[#070933] py-24 relative overflow-hidden">
          {/* <div className="absolute top-10 w-full text-center">
            <span className="text-[rgba(255,255,255,0.6)] font-jetbrains text-[12px] tracking-wider">
              BUILT TO MOVE AT THE SPEED OF YOUR BUSINESS
            </span>
          </div>

          <div className="w-full text-center mt-4 mb-16 border-b border-[rgba(191,249,234,0.19)] pb-12">
            <span className="text-[rgba(255,255,255,0.5)] font-space-grotesk font-bold text-[15px] tracking-widest whitespace-pre-wrap">
              {`Nexora     Fieldstone     Vantik     Corelane     Bright&Co`}
            </span>
          </div> */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-white font-roboto font-bold text-[20px] mb-12">
              The team behind your infrastructure
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { initial: 'MI', title: 'Managed IT', desc: 'Infrastructure & support' },
                { initial: 'CS', title: 'Cybersecurity', desc: 'Threat & compliance' },
                { initial: 'CL', title: 'Cloud', desc: 'Architecture & migration' },
                { initial: 'CN', title: 'Consultancy', desc: 'Strategy & planning' },
              ].map((member) => (
                <div key={member.initial} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[16px] h-[180px] flex flex-col items-center justify-center p-6 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                  <div
                    className="w-[56px] h-[56px] mb-4 flex items-center justify-center relative"
                  >
                    <Image src="/Team_avatar_icon.png" alt="Avatar background" fill className="object-contain" />
                    <span className="text-[#05263b] font-inter font-bold text-[14px] relative z-10">{member.initial}</span>
                  </div>
                  <h3 className="text-white font-roboto font-bold text-[14px]">{member.title}</h3>
                  <p className="text-[rgba(255,255,255,0.55)] font-inter text-[11px] mt-1">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
