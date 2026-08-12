import React from 'react';

export function CtaBlock() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(159,233,220,0.3)] border border-cyan-50 p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-[#070933] mb-4">
            Start the conversation with a free 30-minute consultation
          </h2>
          <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed">
            Let's discuss your IT strategy, services, and business solutions &amp; compliance concerns.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 shrink-0">
          <button className="bg-cyan-100/50 hover:bg-cyan-100 border border-cyan-300 text-[#070933] font-bold py-3 px-8 rounded-lg shadow-sm transition-colors whitespace-nowrap">
            Book your call
          </button>
        </div>

        {/* Background Decorative Element (Optional subtle gradient) */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </div>
    </div>
  );
}
