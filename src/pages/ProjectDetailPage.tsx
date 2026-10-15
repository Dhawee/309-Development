import React, { useState } from 'react';
import {
  MapPin,
  Download,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Building,
  Compass,
  ArrowRight
} from 'lucide-react';
import { VAR_PROJECT } from '../data/projectData';
import { PricingSection } from '../components/PricingSection';
import { FourStepProcess } from '../components/FourStepProcess';
import { FAQAccordion } from '../components/FAQAccordion';
import { BrochureViewer } from '../components/BrochureViewer';
import { EnquiryModal } from '../components/EnquiryModal';
import { createWhatsAppUrl } from '../utils/formService';

export const ProjectDetailPage: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState<string>('Verdant Vine');
  const [selectedSize, setSelectedSize] = useState<string>('Plot');

  const handleOpenEnquiry = (offering?: string, size?: string) => {
    if (offering) setSelectedOffering(offering);
    if (size) setSelectedSize(size);
    setIsEnquiryOpen(true);
  };

  const whatsappInspectionUrl = createWhatsAppUrl('Site Inspection Booking (VAR Alabata)', {
    Project: 'Verdant Acres & Resort',
    Location: 'Alabata, Abeokuta',
    Action: 'Inspection Booking',
  });

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* 1. PROJECT HERO (MIDNIGHT BLUE GRADIENT — LEFT TO RIGHT) */}
      <section className="bg-[#101D32] text-white py-20 sm:py-28 border-b border-[#1D3252] relative overflow-hidden">
        {/* Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32] via-[#101D32]/90 to-[#1D3A5C]/70" />
        {/* Subtle radial accent for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider font-mono">
                Flagship Development
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/20 text-xs font-mono font-medium">
                Status: {VAR_PROJECT.status}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 border border-white/20 text-xs font-mono">
                Title: {VAR_PROJECT.titleStatus}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
              Verdant Acres &amp; Resort (VAR)
            </h1>

            <div className="flex items-center space-x-2 text-sm sm:text-base text-slate-200">
              <MapPin className="h-4 w-4 text-white shrink-0" />
              <span>{VAR_PROJECT.location}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
              {VAR_PROJECT.subtitle} Master-planned to transform fertile Ogun State terrain into high-yield commercial agriculture (Verdant Vine) and scenic hospitality eco-tourism (Verdant Leisure).
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => handleOpenEnquiry()}
                className="px-7 py-3.5 rounded-full bg-[#101D32] hover:bg-[#182A45] text-white text-sm font-medium tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calendar className="h-4 w-4 text-[#ECB7B5]" />
                <span>Book Site Inspection</span>
              </button>
              <a
                href={whatsappInspectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-medium tracking-wide transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <MessageSquare className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={VAR_PROJECT.brochurePdfUrl}
                download
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-medium tracking-wide transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <Download className="h-4 w-4 text-slate-200" />
                <span>Download Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW & CONFIRMED LOCATION (WHITE BACKGROUND) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Overview text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                Strategic Development Profile
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
                A Convergence of Agribusiness & Serene Leisure
              </h2>
              <div className="accent-rule" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Verdant Acres & Resort represents 309 Development Ltd.'s flagship vision of modern spatial transformation. Situated in the vibrant growth corridor of Alabata, Abeokuta, the development is engineered to fulfill two distinct, high-value investor needs:
              </p>
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-sm bg-slate-50 border-l-4 border-blue-900 border-y border-r border-slate-200">
                  <h3 className="font-heading font-bold text-base text-[#101D32]">
                    1. Verdant Vine (Agricultural Land Offering)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Designed for commercial cultivation, farm holdings and agro-syndicates. Backed by community infrastructure including central borehole and shared farm barn storage.
                  </p>
                </div>
                <div className="p-4 rounded-sm bg-slate-50 border-l-4 border-[#101D32] border-y border-r border-slate-200">
                  <h3 className="font-heading font-bold text-base text-[#101D32]">
                    2. Verdant Leisure (Resort & Lifestyle Parcels)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Zoned for eco-tourism hospitality, vacation cottages, corporate retreat centers and scenic recreation.
                  </p>
                </div>
              </div>

              {/* Verified Location & Proximity */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="font-bold text-sm text-[#101D32] uppercase tracking-wider font-mono">
                  Verified Regional Landmarks & Proximity:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {VAR_PROJECT.landmarks.map((landmark) => (
                    <li key={landmark} className="flex items-center space-x-2 text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0" />
                      <span>{landmark}</span>
                    </li>
                  ))}
                  <li className="flex items-center space-x-2 text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0" />
                    <span>Direct access to Abeokuta metropolitan transit & logistics corridors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-slate-200 rounded-sm p-3 bg-slate-50 shadow-sm">
                <div className="aspect-[4/3] rounded-sm overflow-hidden bg-white border border-slate-200">
                  <img
                    src="/assets/var_map.png"
                    alt="Verdant Acres & Resort Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-bold text-[#101D32]">Alabata Site Location Map</span>
                  <span className="text-[#101D32] font-mono font-medium">Abeokuta, Ogun State</span>
                </div>
              </div>

              {/* Key Project Facts */}
              <div className="p-5 rounded-sm bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#101D32]">Project Highlights</h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0 mt-0.5" />
                    <span>Certificate of Occupancy (C of O) in View</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0 mt-0.5" />
                    <span>Dual offerings: Agribusiness & Serene Leisure</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0 mt-0.5" />
                    <span>Flexible outright & structured payment plans</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0 mt-0.5" />
                    <span>Full documentation: Survey, Allocation Letter & Deed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLANNED INFRASTRUCTURE (WHITE BACKGROUND) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#101D32] bg-[#ECB7B5]/25 px-2.5 py-1 rounded-sm border border-[#ECB7B5]/40 mb-3 font-mono">
              <Building className="h-4 w-4 text-[#101D32]" />
              <span>Project Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
              Planned Site Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Approved infrastructure commitments documented in the official VAR Charter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VAR_PROJECT.infrastructure.map((inf) => (
              <div
                key={inf.title}
                className="p-6 rounded-sm bg-white border border-slate-200 shadow-sm hover:border-[#101D32] transition-all"
              >
                <div className="p-3 rounded-sm bg-slate-100 text-[#101D32] w-fit mb-4 border border-slate-200">
                  <Compass className="h-6 w-6 text-[#101D32]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#101D32] mb-2">
                  {inf.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {inf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICING & PAYMENT OPTIONS (WHITE BACKGROUND) */}
      <PricingSection onOpenEnquiry={handleOpenEnquiry} />

      {/* 5. 4-STEP TRANSACTION PROCESS (BLUE BACKGROUND) */}
      <FourStepProcess />

      {/* 6. BROCHURE & FAQ (WHITE BACKGROUND) */}
      <BrochureViewer />
      <FAQAccordion />

      {/* 7. SITE INSPECTION REQUEST BAR (BLUE BACKGROUND) */}
      <section className="py-20 bg-[#101D32] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#15243C] text-[#ECB7B5] text-xs font-semibold tracking-widest uppercase border border-[#23395B] font-mono">
            <Calendar className="h-3.5 w-3.5 text-[#ECB7B5]" />
            <span>Physical Site Inspection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Experience Verdant Acres & Resort in Person
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Site inspections run weekly to Alabata, Abeokuta. Experience the topography, examine the boundary beacons, and meet our on-ground project engineers.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenEnquiry('Verdant Vine', 'Plot')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#182A45] hover:bg-[#1D3252] border border-[#ECB7B5]/60 text-white text-sm font-semibold tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Schedule Inspection Date</span>
              <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
            </button>
            <a
              href={whatsappInspectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>Inquire via WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultOffering={selectedOffering}
        defaultSize={selectedSize}
      />
    </div>
  );
};
