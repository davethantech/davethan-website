"use client";

import { useState } from "react";

const faqs = [
  { q: "What are Managed IT Services?", a: "Outsourced IT support and management — including proactive monitoring, maintenance, and support for your infrastructure, networks, and security." },
  { q: "What benefits can Managed IT Services offer businesses?", a: "Improved reliability and performance through proactive monitoring that reduces downtime and keeps systems optimized." },
  { q: "What services are typically included?", a: "Common services include network monitoring and management, tailored to the needs of your business." },
  { q: "How do Managed IT Services differ from traditional IT support?", a: "Traditional support is reactive; managed services take a proactive approach, continuously monitoring your systems." },
  { q: "Is Managed IT Services suitable for small businesses?", a: "Yes — it offers cost-effective access to advanced IT resources, expertise, and support of a kind that's often out of reach in-house." }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col border-t border-[#e4e9f2]">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#e4e9f2] py-6">
          <div 
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => toggle(i)}
          >
            <h4 className="text-[#0a0d53] font-inter font-bold text-[16px] transition-colors hover:text-[#06bae1]">{faq.q}</h4>
            {openIndex === i ? (
              <div className="w-[16px] h-[3px] bg-[#06bae1] shrink-0 ml-4 rounded-full transition-all duration-300" />
            ) : (
              <span className="text-[#06bae1] text-[24px] font-bold shrink-0 ml-4 leading-none transition-all duration-300">+</span>
            )}
          </div>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#5b6472] font-inter text-[13px] pr-12">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
