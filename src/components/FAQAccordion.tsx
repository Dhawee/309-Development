import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText } from 'lucide-react';
import { VAR_PROJECT } from '../data/projectData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Location', 'Documentation', 'Pricing', 'Investment', 'Company'];

  const filteredFaqs =
    activeFilter === 'All'
      ? VAR_PROJECT.faqs
      : VAR_PROJECT.faqs.filter((faq) => faq.category === activeFilter);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#ECB7B5]/20 text-[#101D32] text-xs font-semibold tracking-widest uppercase mb-3 border border-[#ECB7B5]/40 font-mono">
            <HelpCircle className="h-3.5 w-3.5 text-[#101D32]" />
            <span>Due Diligence & Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Clear, transparent answers from the official 309 Development Ltd. Subscription & FAQ Charter.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-1.5 rounded-sm text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#101D32] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#101D32] border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-sm transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#101D32] bg-slate-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-[#101D32]">
                    {faq.question}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'transform rotate-180 bg-[#101D32] text-white'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200/80 animate-fadeIn">
                    <p>{faq.answer}</p>
                    {faq.category && (
                      <span className="inline-block mt-3 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-mono bg-slate-200/80 text-slate-700 font-medium">
                        Category: {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Brochure Download CTA inside FAQ */}
        <div className="mt-12 p-6 rounded-sm bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-3 bg-white border border-slate-200 rounded-sm text-[#101D32]">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-base text-[#101D32]">
                Official Subscription Form & FAQ Document (PDF)
              </div>
              <div className="text-xs text-slate-500">
                Complete 7-page legal documentation, KYC specifications and terms (824 KB).
              </div>
            </div>
          </div>
          <a
            href="/assets/VAR_Form_and_FAQ.pdf"
            download
            className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shrink-0 text-center shadow-sm"
          >
            Download FAQ & Form
          </a>
        </div>
      </div>
    </section>
  );
};
