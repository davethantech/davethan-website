import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Clock, Briefcase, Mail } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { getPayloadClient } from '@/lib/payload';
import type { Job } from '@/payload-types';

export const revalidate = 60;

// Type labels and badges
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

function renderSlateNode(node: any, key: string | number): React.ReactNode {
  if (Array.isArray(node)) {
    return <>{node.map((c, i) => renderSlateNode(c, i))}</>;
  }

  if (node.text !== undefined) {
    let el: React.ReactNode = node.text;
    if (node.bold) el = <strong>{el}</strong>;
    if (node.italic) el = <em>{el}</em>;
    if (node.underline) el = <u>{el}</u>;
    if (node.strikethrough) el = <s>{el}</s>;
    if (node.code) el = <code className="bg-gray-100 rounded px-1 py-0.5 text-[#0a0d53] text-[14px]">{el}</code>;
    return <span key={key}>{el}</span>;
  }

  const type = node.type;
  const children = Array.isArray(node.children) ? node.children : [];
  const renderedChildren = children.map((c: any, i: number) => renderSlateNode(c, i));

  switch (type) {
    case 'h1':
    case 'h2':
      return <h2 key={key} className="text-[#0a0d53] font-roboto font-bold text-[24px] sm:text-[28px] mt-10 mb-5">{renderedChildren}</h2>;
    case 'h3':
      return <h3 key={key} className="text-[#0a0d53] font-roboto font-bold text-[20px] sm:text-[22px] mt-8 mb-4">{renderedChildren}</h3>;
    case 'h4':
    case 'h5':
    case 'h6':
      return <h4 key={key} className="text-[#0a0d53] font-roboto font-bold text-[17px] sm:text-[18px] mt-6 mb-3">{renderedChildren}</h4>;
    case 'ul':
      return <ul key={key} className="list-disc list-inside space-y-2 mb-6 text-[#5b6472] font-inter text-[15px] leading-[1.8]">{renderedChildren}</ul>;
    case 'ol':
      return <ol key={key} className="list-decimal list-inside space-y-2 mb-6 text-[#5b6472] font-inter text-[15px] leading-[1.8]">{renderedChildren}</ol>;
    case 'li':
      return <li key={key}>{renderedChildren}</li>;
    case 'link':
      return <a key={key} href={node.url} target={node.newTab ? '_blank' : undefined} className="text-[#06bae1] hover:underline font-bold transition-colors">{renderedChildren}</a>;
    case 'blockquote':
      return <blockquote key={key} className="border-l-4 border-[#06bae1] pl-6 my-6 text-[#5b6472] italic font-inter text-[15px] leading-relaxed">{renderedChildren}</blockquote>;
    case 'indent':
      return <div key={key} className="pl-6">{renderedChildren}</div>;
    default:
      return <p key={key} className="text-[#5b6472] font-inter text-[15px] sm:text-[16px] leading-[1.8] mb-4">{renderedChildren}</p>;
  }
}

function RichTextContent({ content }: { content: any }) {
  if (!content) return null;
  return <>{renderSlateNode(content, 'root')}</>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const payload = await getPayloadClient();
    const job = await payload.findByID({ collection: 'jobs', id }) as Job;
    if (!job) return { title: 'Job Not Found | Davethan Career' };
    return {
      title: `${job.title} | Davethan Career`,
    };
  } catch {
    return { title: 'Davethan Career' };
  }
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const payload = await getPayloadClient();
  let job: Job | null = null;
  try {
    job = await payload.findByID({ collection: 'jobs', id }) as Job;
  } catch (err) {
    notFound();
  }
  if (!job || !job.active) {
    notFound();
  }

  const dateString = new Date(job.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        {/* ─── HEADER ─── */}
        <section className="bg-[#f8f9fc] pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-[#5b6472] hover:text-[#06bae1] font-inter font-bold text-[12px] uppercase tracking-widest transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Careers
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className={`text-[11px] font-inter font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${typeBadgeStyles[job.type] ?? typeBadgeStyles['full-time']}`}>
                {typeLabels[job.type] ?? job.type}
              </span>
              <span className="text-[#8e98a8] font-inter text-[13px]">
                Posted {dateString}
              </span>
            </div>

            <h1 className="text-[#0a0d53] font-roboto font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] mb-6">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {job.department && (
                <span className="text-[#5b6472] font-inter text-[14px] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#06bae1]" strokeWidth={2} />
                  {job.department}
                </span>
              )}
              {job.location && (
                <span className="text-[#5b6472] font-inter text-[14px] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#06bae1]" strokeWidth={2} />
                  {job.location}
                </span>
              )}
              <span className="text-[#5b6472] font-inter text-[14px] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#06bae1]" strokeWidth={2} />
                {typeLabels[job.type] ?? job.type}
              </span>
            </div>
            
            <div className="mt-8">
              <a
                href={`mailto:${job.applicationEmail}?subject=Application for ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] text-[#0a0d53] font-inter font-bold text-[14px] px-8 py-4 rounded-[10px] transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4" /> Apply for this position
              </a>
            </div>
          </div>
        </section>

        {/* ─── JOB DESCRIPTION ─── */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <article className="prose prose-lg max-w-none prose-headings:text-[#0a0d53] prose-p:text-[#5b6472] prose-li:text-[#5b6472] prose-strong:text-[#0a0d53]">
              <RichTextContent content={job.description as Record<string, unknown>} />
            </article>

            <div className="mt-16 pt-10 border-t border-[#e4e9f2] text-center">
              <h3 className="text-[#0a0d53] font-roboto font-bold text-[24px] mb-4">Think you'd be a great fit?</h3>
              <p className="text-[#5b6472] font-inter text-[15px] mb-8">Send us your CV and a brief cover letter. We look forward to hearing from you.</p>
              <a
                href={`mailto:${job.applicationEmail}?subject=Application for ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0a0d53] hover:bg-[#06bae1] text-white hover:text-[#0a0d53] font-inter font-bold text-[14px] px-8 py-4 rounded-[10px] transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
