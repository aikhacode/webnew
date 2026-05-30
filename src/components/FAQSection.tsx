"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/seoData";

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title = "Pertanyaan yang Sering Diajukan (FAQ)",
  subtitle = "Temukan jawaban cepat mengenai layanan sewa mobil, travel, dan carter drop off Asoka Trans Madiun."
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-sky-400" />
            <span>{title}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 hover:bg-slate-900/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-400" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-slate-900" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-slate-300 text-sm md:text-base leading-relaxed bg-slate-950">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
