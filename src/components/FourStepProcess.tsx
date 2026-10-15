import React from 'react';
import { FileCheck, CreditCard, Scroll, Award, ArrowRight } from 'lucide-react';
import { VAR_PROJECT } from '../data/projectData';

export const FourStepProcess: React.FC = () => {
  const stepIcons = [FileCheck, CreditCard, Scroll, Award];

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-100 relative overflow-hidden" id="investment-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold tracking-widest uppercase mb-4 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#101D32]"></span>
            <span>Structured Acquisition Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight">
            The 4-Step Investment Pathway
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From initial enquiry to physical parcel demarcation, every stage at 309 Development Ltd. is protected by verified legal documentation and corporate accountability.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VAR_PROJECT.processSteps.map((step, idx) => {
            const IconComponent = stepIcons[idx] || FileCheck;
            return (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-2xl p-8 relative group hover:border-[#101D32] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#101D32]">
                      {step.step}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-100 text-[#101D32] border border-slate-200 group-hover:scale-105 transition-transform">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#101D32]">
                  <span>Standard Process Step</span>
                  <ArrowRight className="h-3 w-3 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Need guidance navigating terms or payment schedules? Our 309 Ambassadors and advisory directors are ready to assist.
          </p>
        </div>
      </div>
    </section>
  );
};
