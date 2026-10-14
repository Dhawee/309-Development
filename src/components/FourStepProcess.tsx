import React from 'react';
import { FileCheck, CreditCard, Scroll, Award, ArrowRight } from 'lucide-react';
import { VAR_PROJECT } from '../data/projectData';

export const FourStepProcess: React.FC = () => {
  const stepIcons = [FileCheck, CreditCard, Scroll, Award];

  return (
    <section className="py-20 bg-[#101D32] text-white relative overflow-hidden" id="investment-process">
      {/* Background Architectural Accent lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full border-[20px] border-[#ECB7B5]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#15243C] text-[#ECB7B5] text-xs font-semibold tracking-widest uppercase mb-3 border border-[#23395B] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
            <span>Structured Acquisition Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            The 4-Step Investment Pathway
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            From initial enquiry to physical parcel demarcation, every stage at 309 Development Ltd. is protected by verified legal documentation and corporate accountability.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VAR_PROJECT.processSteps.map((step, idx) => {
            const IconComponent = stepIcons[idx] || FileCheck;
            return (
              <div
                key={step.step}
                className="bg-[#15243C] border border-[#23395B] rounded-sm p-6 relative group hover:border-[#ECB7B5] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-[#ECB7B5]">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-sm bg-[#101D32] border border-[#23395B] text-[#ECB7B5] group-hover:scale-105 transition-transform">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#23395B]/80 flex items-center text-[11px] text-[#ECB7B5] font-semibold">
                  <span>Standard Process Step</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Need guidance navigating terms or payment schedules? Our 309 Ambassadors and advisory directors are ready to assist.
          </p>
        </div>
      </div>
    </section>
  );
};
