import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Download, Sparkles } from 'lucide-react';
import { VAR_PROJECT } from '../data/projectData';
import { EnquiryModal } from '../components/EnquiryModal';

export const ProjectsPage: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState<string>('Verdant Vine');

  const handleOpenEnquiry = (offering: string) => {
    setSelectedOffering(offering);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header (Blue Background) */}
      <section className="bg-[#101D32] text-white py-16 sm:py-20 border-b border-[#23395B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#ECB7B5] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
              <span>Real Estate Development Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Our Projects
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our master-planned property developments designed to turn land into structured, bankable and high-yielding assets.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Feature Card: VAR (White Background) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-sm bg-[#101D32] text-white text-[10px] font-mono uppercase tracking-widest font-semibold">
                    Flagship Masterplan
                  </span>
                  <span className="px-2.5 py-1 rounded-sm bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-semibold tracking-wider uppercase font-mono">
                    Pre-Launch Phase
                  </span>
                  <span className="px-2.5 py-1 rounded-sm bg-white text-slate-700 border border-slate-200 text-[10px] font-medium font-mono">
                    C of O in View
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
                  Verdant Acres & Resort (VAR)
                </h2>
                <div className="accent-rule" />

                <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-[#101D32] shrink-0" />
                  <span>Located at Alabata, Abeokuta, Ogun State, Nigeria</span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A pioneering 309 Development concept bridging commercial agriculture and eco-tourism hospitality. Featuring dual structured offerings: <strong className="text-[#101D32]">Verdant Vine</strong> for agrarian investors and <strong className="text-[#101D32]">Verdant Leisure</strong> for resort and country home developers.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
                  <div className="p-3.5 rounded-sm bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Verdant Vine</div>
                    <div className="font-heading font-bold text-sm text-[#101D32] mt-0.5">From ₦650,000</div>
                  </div>
                  <div className="p-3.5 rounded-sm bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Verdant Leisure</div>
                    <div className="font-heading font-bold text-sm text-[#101D32] mt-0.5">From ₦800,000</div>
                  </div>
                  <div className="p-3.5 rounded-sm bg-white border border-slate-200 col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Available Sizes</div>
                    <div className="font-semibold text-xs text-[#101D32] mt-0.5">Plot, Acre, Hectare</div>
                  </div>
                </div>

                {/* Blue Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    to="/projects/verdant-acres-resort"
                    className="px-6 py-3.5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>View Project Specifications</span>
                    <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
                  </Link>
                  <a
                    href="/assets/VAR_Brochure.pdf"
                    download
                    className="px-5 py-3.5 rounded-sm bg-white border-1.5 border-[#101D32] hover:bg-slate-50 text-[#101D32] text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4 text-[#101D32]" />
                    <span>Download Brochure (PDF)</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/assets/design_3.png"
                    alt="Agribusiness & Serene Leisure — Verdant Acres & Resort"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinct Offerings Section (White Background) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
              The Two Offerings of Verdant Acres & Resort
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Choose between structured agricultural land and scenic lifestyle resort parcels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {VAR_PROJECT.offerings.map((offering) => (
              <div
                key={offering.id}
                id={offering.id}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:border-[#101D32] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] relative overflow-hidden bg-[#101D32]">
                    <img
                      src={offering.image}
                      alt={offering.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-sm bg-[#101D32]/90 backdrop-blur-md text-white text-xs font-heading font-bold">
                      {offering.name}
                    </div>
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-sm bg-blue-900 text-white text-[10px] font-semibold uppercase tracking-wider font-mono">
                      {offering.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      {offering.tagline}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#101D32]">
                      {offering.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {offering.description}
                    </p>

                    <div className="space-y-2 pt-2 text-xs text-slate-700">
                      {offering.features.map((feat) => (
                        <div key={feat} className="flex items-center space-x-2">
                          <CheckCircle2 className="h-4 w-4 text-[#101D32] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing Pill */}
                    <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 text-xs space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Plot (0-3 Mo Outright):</span>
                        <strong className="text-sm font-heading font-bold text-[#101D32]">
                          {offering.pricing.plot.outright}
                        </strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Acre (0-3 Mo Outright):</span>
                        <strong className="text-sm font-heading font-bold text-[#101D32]">
                          {offering.pricing.acre.outright}
                        </strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Hectare (0-3 Mo Outright):</span>
                        <strong className="text-sm font-heading font-bold text-[#101D32]">
                          {offering.pricing.hectare.outright}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blue Buttons */}
                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3 border-t border-slate-100 mt-4">
                  <Link
                    to="/projects/verdant-acres-resort"
                    className="flex-1 py-3 px-4 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs font-semibold text-center transition-colors shadow-sm"
                  >
                    View Complete Specs
                  </Link>
                  <button
                    onClick={() => handleOpenEnquiry(offering.name)}
                    className="flex-1 py-3 px-4 rounded-sm border-1.5 border-[#101D32] text-[#101D32] hover:bg-slate-50 text-xs font-semibold text-center transition-colors cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Pipeline (White Background with subtle slate card) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-[#101D32] mb-2 font-mono">
              <Sparkles className="h-3.5 w-3.5 text-[#ECB7B5]" />
              <span>Future Pipeline & Masterplan Extensions</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#101D32]">
              Upcoming 309 Development Phases
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Documented in our corporate expansion roadmap; detailed specifications will be published upon regulatory clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-sm bg-white border border-slate-200 opacity-90">
              <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Coming Soon
              </span>
              <h4 className="font-heading font-bold text-lg text-[#101D32] mt-2">
                Verdant Abode
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Master-planned residential community designed for country living, sustainable architecture and community security in Alabata.
              </p>
            </div>
            <div className="p-6 rounded-sm bg-white border border-slate-200 opacity-90">
              <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Coming Soon
              </span>
              <h4 className="font-heading font-bold text-lg text-[#101D32] mt-2">
                Verdant Reserve
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dedicated institutional land banking vehicle created for syndicates and long-horizon capital preservation portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultOffering={selectedOffering}
      />
    </div>
  );
};
