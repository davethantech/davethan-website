import Link from 'next/link';

export function CtaBlock() {
  return (
    <section className="py-12 lg:py-16 bg-white px-4 sm:px-6">
      <div className="max-w-[1280px] mx-auto bg-white border border-[#e4e9f2] rounded-[24px] shadow-[0px_8px_32px_12px_rgba(191,249,234,0.35)] px-8 py-16 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="text-center lg:text-left flex-1 max-w-2xl">
          <h3 className="text-[#0a0d53] font-roboto font-bold text-[28px] lg:text-[36px] leading-tight mb-4">
            Start the conversation with a free 30-minute consultation
          </h3>
          <p className="text-[#0a0d53] font-inter text-[15px] leading-relaxed opacity-80">
            Let&apos;s discuss your IT strategy, services, and business solutions &amp; compliance concerns.
          </p>
        </div>

        <Link href="/contact" className="shrink-0">
          <div className="bg-[rgba(6,186,225,0.2)] border border-[#0a0d53] rounded-[10px] h-[56px] px-[40px] flex items-center justify-center hover:bg-[rgba(6,186,225,0.35)] transition-colors cursor-pointer">
            <span className="text-[#0a0d53] font-inter font-bold text-[15px]">
              Book your call
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}
