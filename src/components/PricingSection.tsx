import React, { useState } from 'react';
import { Check, Info, AlertCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/formService';

interface PricingSectionProps {
  onOpenEnquiry?: (offeringName?: string, size?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenEnquiry }) => {
  const [activePlan, setActivePlan] = useState<'outright' | 'installment' | 'brochure_audit'>('outright');

  return (
    <section className="py-20 bg-white border-y border-slate-200" id="pricing-plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#ECB7B5]/20 text-[#101D32] text-xs font-semibold tracking-widest uppercase mb-4 border border-[#ECB7B5]/40 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
            <span>Approved Investment Schedules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32] tracking-tight">
            Transparent Land Pricing & Payment Options
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Every space holds the potential for wealth creation. Explore structured pricing for Verdant Acres & Resort (VAR) across agricultural and leisure offerings.
          </p>

          {/* Pricing Model Selector */}
          <div className="mt-8 inline-flex p-1 rounded-sm bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActivePlan('outright')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-sm transition-all cursor-pointer ${
                activePlan === 'outright'
                  ? 'bg-[#101D32] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#101D32]'
              }`}
            >
              Outright (0 – 3 Months)
            </button>
            <button
              onClick={() => setActivePlan('installment')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-sm transition-all cursor-pointer ${
                activePlan === 'installment'
                  ? 'bg-[#101D32] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#101D32]'
              }`}
            >
              Structured (4 – 6 Months)
            </button>
            <button
              onClick={() => setActivePlan('brochure_audit')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-sm transition-all flex items-center space-x-1.5 cursor-pointer ${
                activePlan === 'brochure_audit'
                  ? 'bg-[#101D32] text-[#ECB7B5] shadow-sm border border-[#ECB7B5]/40'
                  : 'text-[#101D32] hover:text-slate-900'
              }`}
            >
              <Info className="h-3.5 w-3.5 text-[#ECB7B5]" />
              <span>Brochure Audit & Transparency</span>
            </button>
          </div>
        </div>

        {/* Pricing Transparency Advisory Banner */}
        <div className="mb-10 bg-slate-50 border-l-4 border-[#101D32] p-4 sm:p-5 rounded-r-sm shadow-sm flex items-start space-x-3.5 border-y border-r border-slate-200">
          <AlertCircle className="h-5 w-5 text-[#101D32] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700">
            <strong className="text-[#101D32] font-semibold">Pricing Safeguard & Brochure Verification:</strong>{' '}
            Prices are sourced directly from the official VAR Brochure (Pages 31 & 32) and VAR FAQ Document.
            {activePlan === 'outright' && ' Showing 0–3 months outright rate.'}
            {activePlan === 'installment' && ' Showing 4–6 months installment schedule.'}
            {activePlan === 'brochure_audit' && ' Comparing both brochure figures (Figure A vs Figure B).'}
            {' '}All Verdant Leisure deposits are subject to individual contract confirmation.
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* VERDANT VINE CARD */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm hover:border-[#101D32] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#101D32] font-bold bg-[#ECB7B5]/25 px-2.5 py-1 rounded-sm border border-[#ECB7B5]/50">
                    Agricultural Investment
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#101D32] mt-3">
                    Verdant Vine
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Structured agricultural farmland with dedicated farm barn & borehole access.
                  </p>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-blue-50 text-blue-800 border border-blue-200">
                  Pre-Launch Active
                </span>
              </div>

              {/* Pricing Rows */}
              <div className="mt-6 space-y-4 divide-y divide-slate-100">
                {/* Plot */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm text-[#101D32]">1 Plot (Farmland)</div>
                    <div className="text-[11px] text-slate-500">
                      Deposit: <span className="font-bold text-[#101D32]">₦200,000</span> (Brochure p.32)
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    {activePlan === 'outright' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦650,000</span>
                        <span className="text-[10px] text-slate-500 block">0–3 Months Outright</span>
                      </div>
                    )}
                    {activePlan === 'installment' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦800,000</span>
                        <span className="text-[10px] text-slate-500 block">4–6 Months Plan</span>
                      </div>
                    )}
                    {activePlan === 'brochure_audit' && (
                      <div className="text-xs font-mono">
                        <span className="text-[#101D32] font-bold">₦650,000</span> /{' '}
                        <span className="text-slate-600">₦800,000</span>
                        <span className="text-[10px] text-slate-500 block">Outright vs 6-Mo</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Acre */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm text-[#101D32]">1 Acre (6 Plots)</div>
                    <div className="text-[11px] text-slate-500">
                      Deposit: <span className="font-bold text-[#101D32]">₦500,000</span> (Brochure p.32)
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    {activePlan === 'outright' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦3,600,000</span>
                        <span className="text-[10px] text-slate-500 block">0–3 Months Outright</span>
                      </div>
                    )}
                    {activePlan === 'installment' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦4,500,000</span>
                        <span className="text-[10px] text-slate-500 block">4–6 Months Plan</span>
                      </div>
                    )}
                    {activePlan === 'brochure_audit' && (
                      <div className="text-xs font-mono">
                        <span className="text-[#101D32] font-bold">₦3.6M</span> /{' '}
                        <span className="text-slate-600">₦4.5M</span>
                        <span className="text-[10px] text-slate-500 block">Brochure Dual Figure</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hectare */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm text-[#101D32]">1 Hectare (~15 Plots)</div>
                    <div className="text-[11px] text-slate-500">
                      Deposit: <span className="font-bold text-[#101D32]">₦2,000,000</span> (Brochure p.32)
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    {activePlan === 'outright' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦9,000,000</span>
                        <span className="text-[10px] text-slate-500 block">0–3 Months Outright</span>
                      </div>
                    )}
                    {activePlan === 'installment' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦11,000,000</span>
                        <span className="text-[10px] text-slate-500 block">4–6 Months Plan</span>
                      </div>
                    )}
                    {activePlan === 'brochure_audit' && (
                      <div className="text-xs font-mono">
                        <span className="text-[#101D32] font-bold">₦9M</span> /{' '}
                        <span className="text-slate-600">₦11M</span>
                        <span className="text-[10px] text-slate-500 block">Commercial Syndicate Rate</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2 text-[#101D32]">
                  <Check className="h-4 w-4 text-[#101D32]" />
                  <span>Price inclusive of Land, Survey & Documentation</span>
                </div>
                <div className="flex items-center space-x-2 text-[#101D32]">
                  <Check className="h-4 w-4 text-[#101D32]" />
                  <span>Central Borehole & Farm Barn Access</span>
                </div>
                <div className="flex items-center space-x-2 text-[#101D32]">
                  <Check className="h-4 w-4 text-[#101D32]" />
                  <span>Physical Allocation upon completion of payments</span>
                </div>
              </div>
            </div>

            {/* Actions: Blue Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Verdant Vine', 'Plot')}
                className="flex-1 py-3 px-4 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <span>Subscribe to Verdant Vine</span>
                <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
              </button>
              <a
                href={createWhatsAppUrl('Verdant Vine Agricultural Enquiry', {
                  Offering: 'Verdant Vine',
                  Location: 'Alabata, Abeokuta',
                  'Plan Selected': activePlan,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-sm border-1.5 border-[#101D32] text-[#101D32] hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center space-x-1"
              >
                <MessageSquare className="h-4 w-4 text-[#101D32]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* VERDANT LEISURE CARD */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm hover:border-[#101D32] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#101D32] font-bold bg-[#ECB7B5]/25 px-2.5 py-1 rounded-sm border border-[#ECB7B5]/50">
                    Resort & Lifestyle
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#101D32] mt-3">
                    Verdant Leisure
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Eco-resort, country retreat and hospitality parcels in master-planned scenic landscape.
                  </p>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-blue-50 text-blue-800 border border-blue-200">
                  Pre-Launch Active
                </span>
              </div>

              {/* Pricing Rows */}
              <div className="mt-6 space-y-4 divide-y divide-slate-100">
                {/* Plot */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm text-[#101D32]">1 Plot (Resort/Leisure)</div>
                    <div className="text-[11px] text-slate-500">
                      Deposit: <span className="font-bold text-[#101D32]">₦500,000</span> (Brochure p.31 note)
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    {activePlan === 'outright' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦800,000</span>
                        <span className="text-[10px] text-slate-500 block">0–3 Months Outright</span>
                      </div>
                    )}
                    {activePlan === 'installment' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦1,000,000</span>
                        <span className="text-[10px] text-slate-500 block">4–6 Months Plan</span>
                      </div>
                    )}
                    {activePlan === 'brochure_audit' && (
                      <div className="text-xs font-mono">
                        <span className="text-[#101D32] font-bold">₦800,000</span> /{' '}
                        <span className="text-slate-600">₦1,000,000</span>
                        <span className="text-[10px] text-slate-500 block">Outright vs 6-Mo</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Acre */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm text-[#101D32]">1 Acre (Resort Parcel)</div>
                    <div className="text-[11px] text-slate-500">
                      Deposit: <span className="font-bold text-[#101D32]">₦500,000</span> (Subject to contract)
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    {activePlan === 'outright' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦4,500,000</span>
                        <span className="text-[10px] text-slate-500 block">0–3 Months Outright</span>
                      </div>
                    )}
                    {activePlan === 'installment' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦4,800,000</span>
                        <span className="text-[10px] text-slate-500 block">4–6 Months Plan</span>
                      </div>
                    )}
                    {activePlan === 'brochure_audit' && (
                      <div className="text-xs font-mono">
                        <span className="text-[#101D32] font-bold">₦4.5M</span> /{' '}
                        <span className="text-slate-600">₦4.8M</span>
                        <span className="text-[10px] text-slate-500 block">Brochure Dual Figure</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hectare */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-sm text-[#101D32]">1 Hectare (Estate/Retreat)</div>
                    <div className="text-[11px] text-slate-500">
                      Deposit: <span className="font-bold text-[#101D32]">₦500,000</span> (Subject to contract)
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    {activePlan === 'outright' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦11,000,000</span>
                        <span className="text-[10px] text-slate-500 block">0–3 Months Outright</span>
                      </div>
                    )}
                    {activePlan === 'installment' && (
                      <div>
                        <span className="text-xl font-bold font-heading text-[#101D32]">₦12,000,000</span>
                        <span className="text-[10px] text-slate-500 block">4–6 Months Plan</span>
                      </div>
                    )}
                    {activePlan === 'brochure_audit' && (
                      <div className="text-xs font-mono">
                        <span className="text-[#101D32] font-bold">₦11M</span> /{' '}
                        <span className="text-slate-600">₦12M</span>
                        <span className="text-[10px] text-slate-500 block">Brochure Dual Figure</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2 text-[#101D32]">
                  <Check className="h-4 w-4 text-[#101D32]" />
                  <span>All Inclusive (Land, Survey & Documentation)</span>
                </div>
                <div className="flex items-center space-x-2 text-[#101D32]">
                  <Check className="h-4 w-4 text-[#101D32]" />
                  <span>Prime zoning for hospitality, holiday lodges & retreats</span>
                </div>
                <div className="flex items-center space-x-2 text-[#101D32]">
                  <Check className="h-4 w-4 text-[#101D32]" />
                  <span>Formal Allocation Letter & Survey upon settlement</span>
                </div>
              </div>
            </div>

            {/* Actions: Blue Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('Verdant Leisure', 'Plot')}
                className="flex-1 py-3 px-4 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <span>Subscribe to Verdant Leisure</span>
                <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
              </button>
              <a
                href={createWhatsAppUrl('Verdant Leisure Resort Enquiry', {
                  Offering: 'Verdant Leisure',
                  Location: 'Alabata, Abeokuta',
                  'Plan Selected': activePlan,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-sm border-1.5 border-[#101D32] text-[#101D32] hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center space-x-1"
              >
                <MessageSquare className="h-4 w-4 text-[#101D32]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Note on Terms */}
        <div className="mt-10 text-center text-xs text-slate-500">
          <p>
            * Payment schedules are subject to contract terms. Initial deposits reserve subscription rights. Physical allocation is executed upon 100% payment clearance.
          </p>
        </div>
      </div>
    </section>
  );
};
