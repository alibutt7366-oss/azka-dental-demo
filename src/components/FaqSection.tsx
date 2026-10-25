import React, { useState } from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Helpful answers to assist you before your visit to Azka Dental Care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {clinicData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus-visible:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-teal-100 text-teal-800' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    
                    {/* Category indicator (Quiet unboxed metadata, no static pill) */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <span>Category</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-teal-800">{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center">
          <h3 className="text-base font-bold text-slate-900">
            Have a question about a specific dental symptom?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            Our clinic staff is available to answer questions regarding booking availability and appointment preparation.
          </p>

          <a
            href={buildWhatsAppAppointmentUrl({ message: 'Hello Azka Dental Care, I have a question regarding a dental concern.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp (+92 320 8735364)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
