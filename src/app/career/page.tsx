import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { getPayloadClient } from '@/lib/payload';
import type { Job } from '@/payload-types';

export const metadata = {
  title: 'Career | Davethan Technologies Limited',
  description: 'Join the Davethan Technologies team. Explore exciting career opportunities and help us build cutting-edge digital solutions.',
  openGraph: {
    title: 'Career | Davethan Technologies Limited',
    description: 'Join the Davethan Technologies team. Explore exciting career opportunities and help us build cutting-edge digital solutions.',
    url: 'https://davethan.tech/career',
    images: [{ url: '/Career-hero.png', width: 1200, height: 630, alt: 'Career at Davethan Technologies' }],
  },
};

// Re-validate every 60 seconds — new job listings appear within a minute
export const revalidate = 60;

// ─── Type Badge ───────────────────────────────────────────────────────────────

const typeBadgeStyles: Record<string, string> = {
  'full-time': 'bg-[rgba(6,186,225,0.12)] text-[#06bae1] border border-[rgba(6,186,225,0.3)]',
  'part-time': 'bg-[rgba(10,13,83,0.08)] text-[#0a0d53] border border-[rgba(10,13,83,0.2)]',
  'contract': 'bg-[rgba(191,249,234,0.5)] text-[#0a0d53] border border-[rgba(6,186,225,0.2)]',
  'internship': 'bg-[rgba(255,255,255,0.9)] text-[#5b6472] border border-[#e4e9f2]',
};

const typeLabels: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  'contract': 'Contract',
  'internship': 'Internship',
};

// Helper to extract raw text from Payload's Lexical JSON tree for preview snippets
function extractLexicalText(node: any): string {
  if (!node) return '';
  if (node.root) return extractLexicalText(node.root);
  if (node.type === 'text' && node.text) return node.text;
  if (Array.isArray(node.children)) {
    return node.children.map(extractLexicalText).join(' ');
  }
  return '';
}

export default async function CareerPage() {
  // Fetch all active jobs from Payload
  const payload = await getPayloadClient();
  const { docs: jobs } = await payload.find({
    collection: 'jobs',
    where: { active: { equals: true } },
    sort: '-createdAt',
    limit: 50,
  });
  const activeJobs = jobs as Job[];

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
              quality={85}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#070933]/70" />
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px] text-center">
            <h1 className="text-white font-roboto font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-3">
              Career
            </h1>
            <p className="text-gray-300 font-inter text-[14px] sm:text-[16px]">
              <a href="/">Home</a>&nbsp;&gt;&nbsp; Career
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

              {/* Left: Image */}
              <div className="flex-1 w-full relative">
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden">
                  <Image
                    src="/join-our-team.png"
                    alt="Davethan Team Collaboration"
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Text & Bullets */}
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
                      'Innovation at the Core',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#0a0d53] font-inter font-bold text-[14px]">
                        <div className="w-[6px] h-[6px] bg-[#06bae1] rounded-full shrink-0" />
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
                  Working at Davethan Technologies means being part of a dynamic and forward-thinking company. Our people are our most valuable asset, and we&apos;re committed to helping our team members thrive — from ongoing training to a vibrant company culture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
              {[
                'Career Growth and Development',
                'Team Collaboration',
                'Work-Life Balance',
                'Innovation at the Core',
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center gap-5">
                  <div className="w-[56px] h-[56px] bg-[#0a0d53] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <div className="w-[20px] h-[20px] bg-[#06bae1] rounded-full" />
                  </div>
                  <h3 className="text-[#0a0d53] font-roboto font-bold text-[16px] sm:text-[18px] max-w-[180px] leading-snug">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── CURRENT OPENINGS ─── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[80px]">

            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-[#06bae1] font-inter font-bold text-[11px] sm:text-[12px] uppercase tracking-widest block mb-4">
                JOIN THE TEAM
              </span>
              <h2 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] leading-[1.1] mb-6">
                Current Openings
              </h2>
              <p className="text-[#5b6472] font-inter text-[15px] sm:text-[16px] leading-[1.8] max-w-[700px] mx-auto">
                We are always looking for talented individuals to join our team. Explore exciting career opportunities at Davethan Technologies — we offer competitive compensation and a supportive, inclusive work environment.
              </p>
            </div>

            {/* Job Listings */}
            {activeJobs.length === 0 ? (
              /* ── Empty State ── */
              <div className="max-w-[560px] mx-auto text-center py-16 px-8 rounded-[20px] border border-dashed border-[#e4e9f2] bg-[#f8f9fc]">
                <div className="w-[64px] h-[64px] bg-[#f0f9ff] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-7 h-7 text-[#06bae1]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#0a0d53] font-roboto font-bold text-[20px] mb-3">
                  No openings right now
                </h3>
                <p className="text-[#5b6472] font-inter text-[14px] leading-relaxed mb-8">
                  We don&apos;t have any active vacancies at the moment, but we&apos;re always interested in hearing from talented people. Send us your CV and we&apos;ll be in touch.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[13px] px-8 py-4 rounded-[8px] transition-colors"
                >
                  Send Us Your CV <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              /* ── Job Cards ── */
              <div className="space-y-4">
                {activeJobs.map((job) => {
                  const previewText = extractLexicalText(job.description).replace(/\s+/g, ' ').trim();
                  const truncatedPreview = previewText.length > 160 ? previewText.substring(0, 160) + '...' : previewText;
                  
                  // Format the creation date (e.g. "Aug 19, 2026")
                  const dateString = new Date(job.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  });

                  return (
                    <div
                      key={job.id}
                      className="group bg-white border border-[#e4e9f2] rounded-[16px] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover:border-[#06bae1] hover:shadow-[0_4px_24px_rgba(6,186,225,0.12)] transition-all duration-300"
                    >
                      {/* Left: Job Info */}
                      <div className="flex flex-col gap-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between sm:justify-start gap-4 mb-1">
                          {/* Type Badge */}
                          <span className={`text-[10px] font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full ${typeBadgeStyles[job.type] ?? typeBadgeStyles['full-time']}`}>
                            {typeLabels[job.type] ?? job.type}
                          </span>
                          
                          {/* Date Posted */}
                          <span className="text-[#8e98a8] font-inter text-[12px]">
                            Posted {dateString}
                          </span>
                        </div>

                        <h3 className="text-[#0a0d53] font-roboto font-bold text-[20px] sm:text-[22px] leading-tight group-hover:text-[#06bae1] transition-colors">
                          {job.title}
                        </h3>

                        {/* Job Description Preview */}
                        <p className="text-[#5b6472] font-inter text-[14px] leading-[1.6] line-clamp-2 max-w-[700px] mt-1 mb-2">
                          {truncatedPreview}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2">
                          {job.department && (
                            <span className="text-[#5b6472] font-inter text-[13px] flex items-center gap-1.5">
                              <Briefcase className="w-3.5 h-3.5 text-[#06bae1] shrink-0" strokeWidth={2} />
                              {job.department}
                            </span>
                          )}
                          {job.location && (
                            <span className="text-[#5b6472] font-inter text-[13px] flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#06bae1] shrink-0" strokeWidth={2} />
                              {job.location}
                            </span>
                          )}
                          <span className="text-[#5b6472] font-inter text-[13px] flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#06bae1] shrink-0" strokeWidth={2} />
                            {typeLabels[job.type] ?? job.type}
                          </span>
                        </div>
                      </div>

                      {/* Right: View Details CTA */}
                      <div className="shrink-0 pt-4 sm:pt-0">
                        <Link
                          href={`/career/${job.id}`}
                          className="inline-flex items-center justify-center gap-2 bg-[#0a0d53] hover:bg-[#06bae1] text-white hover:text-[#0a0d53] font-inter font-bold text-[13px] px-7 py-4 rounded-[10px] transition-all duration-300 w-full sm:w-auto"
                        >
                          View Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* ─── SEND US A MESSAGE ─── */}
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
                  />
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
