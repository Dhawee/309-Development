import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

export const BrochureViewer: React.FC = () => {
  const pages = [
    { num: 1, title: 'VAR Official Brochure Cover', file: '/assets/brochure_pages/page_1.jpg' },
    { num: 2, title: 'Vision & Concept', file: '/assets/brochure_pages/page_2.jpg' },
    { num: 3, title: 'Spatial Planning', file: '/assets/brochure_pages/page_3.jpg' },
    { num: 31, title: 'Verdant Leisure Pre-Launch Pricing', file: '/assets/brochure_pages/page_31.jpg' },
    { num: 32, title: 'Verdant Vine Agricultural Pricing', file: '/assets/brochure_pages/page_32.jpg' },
    { num: 33, title: 'Corporate Banking & Designation', file: '/assets/brochure_pages/page_33.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200" id="brochure-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#ECB7B5]/20 text-[#101D32] text-xs font-semibold tracking-widest uppercase mb-3 border border-[#ECB7B5]/40 font-mono">
            <FileText className="h-3.5 w-3.5 text-[#101D32]" />
            <span>Official Investor Materials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
            Verdant Acres & Resort Official Brochure
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Browse official publication pages or download the complete 34-page developer portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Active Page Preview Viewer */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-4 sm:p-6 shadow-sm flex flex-col items-center">
            <div className="relative w-full max-w-xl aspect-[3/4] bg-slate-50 border border-slate-200 rounded-sm overflow-hidden flex items-center justify-center">
              <img
                src={pages[currentIndex].file}
                alt={pages[currentIndex].title}
                className="w-full h-full object-contain"
                loading="lazy"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#101D32]/85 hover:bg-[#101D32] text-white backdrop-blur-sm transition-all focus:outline-none cursor-pointer"
                aria-label="Previous brochure page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#101D32]/85 hover:bg-[#101D32] text-white backdrop-blur-sm transition-all focus:outline-none cursor-pointer"
                aria-label="Next brochure page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Page caption & controls */}
            <div className="mt-4 w-full flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-[#101D32]">
                {pages[currentIndex].title} (Page {pages[currentIndex].num})
              </span>
              <span>
                {currentIndex + 1} of {pages.length} featured preview slides
              </span>
            </div>
          </div>

          {/* Download & Specifications Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-[#101D32] mb-3">
                Download Official PDF Asset
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Get full access to the high-resolution masterplan, agricultural specifications, resort projections and corporate disclosures.
              </p>

              <div className="space-y-3 mb-6 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#101D32]" />
                  <span>34 Full Pages • High Resolution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#101D32]" />
                  <span>Approved Pre-launch Pricing Schedules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-[#101D32]" />
                  <span>Official Corporate Account Mandate</span>
                </div>
              </div>

              {/* Blue Button */}
              <a
                href="/assets/VAR_Brochure.pdf"
                download="309_Development_VAR_Brochure.pdf"
                className="w-full py-3.5 px-5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-sm font-semibold tracking-wide transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4 text-[#ECB7B5]" />
                <span>Download VAR Brochure (10.6 MB)</span>
              </a>

              <div className="mt-3 text-center">
                <a
                  href="/assets/VAR_Form_and_FAQ.pdf"
                  download="309_Development_VAR_Subscription_FAQ.pdf"
                  className="text-xs text-slate-500 hover:text-[#101D32] underline transition-colors"
                >
                  Or download Subscription Form & FAQ (824 KB)
                </a>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="bg-white border border-slate-200 rounded-sm p-4">
              <div className="text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-3 font-heading">
                Quick Jump to Key Pages
              </div>
              <div className="grid grid-cols-3 gap-2">
                {pages.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => setCurrentIndex(idx)}
                    className={`aspect-[3/4] rounded-sm overflow-hidden border-2 transition-all relative cursor-pointer ${
                      currentIndex === idx
                        ? 'border-[#101D32] shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={p.file} alt={p.title} className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 right-0 bg-[#101D32]/90 text-white text-[9px] px-1 font-mono font-bold">
                      p.{p.num}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
