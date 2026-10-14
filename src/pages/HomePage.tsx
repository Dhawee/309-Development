import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  Users,
  PhoneCall,
  MessageSquare,
  TrendingUp,
  MapPin,
  Star,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';
import { FourStepProcess } from '../components/FourStepProcess';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryModal } from '../components/EnquiryModal';
import { createWhatsAppUrl } from '../utils/formService';

export const HomePage: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState<string>('Verdant Vine');
  const [selectedSize, setSelectedSize] = useState<string>('Plot');

  const handleOpenEnquiry = (offering?: string, size?: string) => {
    if (offering) setSelectedOffering(offering);
    if (size) setSelectedSize(size);
    setIsEnquiryOpen(true);
  };

  const whatsappGeneralUrl = createWhatsAppUrl('General Investment Consultation');

  return (
    <div className="bg-white">
      {/* ─── 1. CINEMATIC VIDEO HERO ─── */}
      <section className="relative bg-[#101D32] text-white overflow-hidden min-h-screen flex items-center pt-20">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/design_3.png"
        >
          {/* Farmland video — users can replace this src with a real video file */}
          <source src="/assets/farmland.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32]/95 via-[#101D32]/80 to-[#101D32]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent z-10" />

        {/* Fallback background image if no video */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url('/assets/design_3.png')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-20 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5] animate-pulse" />
              <span>Real Estate & Investment Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Building Wealth Through{' '}
              <span className="text-[#ECB7B5]">
                Strategic Real Estate.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              309 Development Ltd. structures high-value property and investment products designed to turn land into bankable, lasting wealth for forward-looking individuals and institutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <Link
                to="/projects"
                className="px-7 py-3.5 rounded-sm bg-white text-[#101D32] text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 hover:bg-slate-100 transform hover:-translate-y-0.5"
                id="hero-explore-projects-cta"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => handleOpenEnquiry()}
                className="px-7 py-3.5 rounded-sm bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="hero-speak-team-cta"
              >
                <PhoneCall className="h-4 w-4 text-[#ECB7B5]" />
                <span>Speak to Our Team</span>
              </button>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/20 pt-8">
              <div>
                <div className="text-white font-bold font-heading text-xl sm:text-2xl">Verified</div>
                <div className="text-slate-400 text-xs mt-0.5">C of O in View</div>
              </div>
              <div>
                <div className="text-white font-bold font-heading text-xl sm:text-2xl">Prime</div>
                <div className="text-slate-400 text-xs mt-0.5">Growth Corridors</div>
              </div>
              <div>
                <div className="text-white font-bold font-heading text-xl sm:text-2xl">Multi</div>
                <div className="text-slate-400 text-xs mt-0.5">Product Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. BRAND TRUST BAR ─── */}
      <section className="bg-white border-b border-slate-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-sm font-semibold text-slate-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 text-[#101D32]" />
              <span>Verified Titles</span>
            </div>
            <span className="hidden sm:block text-slate-200">•</span>
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-[#101D32]" />
              <span>Registered Developer</span>
            </div>
            <span className="hidden sm:block text-slate-200">•</span>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-[#101D32]" />
              <span>High-Value Opportunities</span>
            </div>
            <span className="hidden sm:block text-slate-200">•</span>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-[#101D32]" />
              <span>Multiple Product Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT INTRODUCTION ─── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#101D32] bg-slate-100 px-3 py-1.5 rounded-full">
                <Building className="h-3.5 w-3.5" />
                <span>About 309 Development Ltd.</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32] leading-tight">
                Turning Spaces Into Assets That Build Lasting Wealth.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                309 Development Ltd. is an established Nigerian property development and real estate investment firm. We specialize in identifying, structuring, and delivering high-value real estate and investment opportunities for forward-looking individuals, institutions, and syndicates.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From farmland to resort parcels, and beyond — our product pipeline is designed to offer diverse, structured pathways to wealth creation through land and real estate.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-[#101D32] hover:text-blue-800 tracking-wide transition-colors"
                >
                  <span>Learn About Our Company</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-[#101D32] transition-colors"
                >
                  <span>Contact Us</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm aspect-[4/5]">
                  <img
                    src="/assets/design_3.png"
                    alt="Agribusiness land"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-lg bg-[#101D32] text-white">
                  <div className="font-heading font-bold text-base">Integrity First</div>
                  <div className="text-xs text-slate-300 mt-1">C of O in view, strict corporate documentation standards.</div>
                </div>
              </div>
              <div className="space-y-4 pt-6 sm:pt-8">
                <div className="p-5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-heading font-bold text-[#101D32]">Alabata</div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">Abeokuta, Ogun State growth corridor.</div>
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-sm aspect-[4/5]">
                  <img
                    src="/assets/design_2.png"
                    alt="Resort and leisure land"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE 309 DEVELOPMENT ─── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[#101D32] text-xs font-semibold tracking-widest uppercase mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Our Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
              Why Choose 309 Development Ltd.
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              We stand apart through verification, structural rigour and development-first commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-white border border-slate-100 hover:border-[#101D32] hover:shadow-md transition-all flex flex-col"
              >
                <div className="font-mono text-xs text-slate-400 font-bold mb-3">0{idx + 1}</div>
                <h3 className="font-heading font-bold text-base text-[#101D32] mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. INVESTMENT PRODUCTS (with VAR as current active product) ─── */}
      <section className="py-20 sm:py-24 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#101D32] bg-slate-100 px-3 py-1.5 rounded-full mb-4">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Investment Products</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32] tracking-tight">
                Our Current Offerings
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                We are building a portfolio of structured real estate and investment products. More products are coming — VAR is our inaugural flagship.
              </p>
            </div>
          </div>

          {/* VAR Flagship Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px]">
                <img
                  src="/assets/design_3.png"
                  alt="Verdant Acres & Resort"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#101D32] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                    Active
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/90 text-[#101D32] text-[10px] font-semibold tracking-wide uppercase">
                    Pre-Launch Phase
                  </span>
                </div>
              </div>
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Flagship Development · VAR</div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#101D32]">
                    Verdant Acres & Resort
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A pioneering land development concept bridging commercial agriculture and eco-tourism hospitality. Located at Alabata, Abeokuta, Ogun State. Featuring two tailored investment streams: <strong className="text-[#101D32]">Verdant Vine</strong> (agribusiness farmland) and <strong className="text-[#101D32]">Verdant Leisure</strong> (serene resort parcels).
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-white border border-slate-200 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Verdant Vine</div>
                      <div className="font-heading font-bold text-sm text-[#101D32] mt-0.5">From ₦650k</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Verdant Leisure</div>
                      <div className="font-heading font-bold text-sm text-[#101D32] mt-0.5">From ₦800k</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200 text-center col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-slate-500 uppercase font-mono">Location</div>
                      <div className="font-semibold text-xs text-[#101D32] mt-0.5">Alabata, Ogun</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/projects/verdant-acres-resort"
                    className="flex-1 py-3 px-5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-sm font-semibold text-center transition-colors shadow-sm flex items-center justify-center space-x-2"
                  >
                    <span>View Full Project Details</span>
                    <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
                  </Link>
                  <button
                    onClick={() => handleOpenEnquiry('Verdant Vine', 'Plot')}
                    className="py-3 px-5 rounded-sm border border-[#101D32] text-[#101D32] hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Products Placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-6 rounded-xl bg-slate-50 border border-dashed border-slate-300 relative overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Coming Soon
              </div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 mb-4" />
              <h4 className="font-heading font-bold text-base text-slate-500 mb-1">Next Investment Product</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Details will be published upon regulatory clearance. Register your interest to be notified first.</p>
              <button
                onClick={() => handleOpenEnquiry()}
                className="mt-4 text-xs font-semibold text-[#101D32] hover:underline cursor-pointer"
              >
                Notify Me →
              </button>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-dashed border-slate-300 relative overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Coming Soon
              </div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 mb-4" />
              <h4 className="font-heading font-bold text-base text-slate-500 mb-1">Institutional Products</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Dedicated vehicles for syndicates, family offices, and long-horizon capital preservation portfolios.</p>
              <button
                onClick={() => handleOpenEnquiry()}
                className="mt-4 text-xs font-semibold text-[#101D32] hover:underline cursor-pointer"
              >
                Express Interest →
              </button>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-dashed border-slate-300 relative overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Coming Soon
              </div>
              <div className="w-10 h-10 rounded-lg bg-slate-200 mb-4" />
              <h4 className="font-heading font-bold text-base text-slate-500 mb-1">Residential Developments</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Master-planned country living communities, sustainable architecture and community living.</p>
              <button
                onClick={() => handleOpenEnquiry()}
                className="mt-4 text-xs font-semibold text-[#101D32] hover:underline cursor-pointer"
              >
                Get Early Access →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. FOUR-STEP PROCESS ─── */}
      <FourStepProcess />

      {/* ─── 7. 309 AMBASSADORS ─── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100" id="ambassadors-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#101D32] bg-white border border-slate-200 px-3 py-1.5 rounded-full">
                  <Users className="h-3.5 w-3.5" />
                  <span>Realtor & Sales Network</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
                  Become a 309 Ambassador
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  309 Ambassadors is the company's structured network of professional realtors, property advisors, and sales executives. Gain direct access to verified project collateral, swift client registration protocols, and dedicated developer liaisons.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    to="/ambassadors"
                    className="px-6 py-3.5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>Register as a 309 Ambassador</span>
                    <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
                  </Link>
                  <a
                    href={createWhatsAppUrl('309 Ambassador Network Onboarding')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-sm border border-[#101D32] text-[#101D32] hover:bg-white text-sm font-semibold transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="h-4 w-4 text-[#25D366]" />
                    <span>Ambassador WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm aspect-square bg-white">
                  <img src="/assets/brand_hardhat.jpg" alt="309 Hard Hat" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm aspect-square bg-white">
                  <img src="/assets/brand_lanyard.png" alt="309 Ambassador Credential" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ ─── */}
      <FAQAccordion />

      {/* ─── 9. FINAL CTA ─── */}
      <section className="py-20 sm:py-24 bg-[#101D32] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
            <span>Ready to Invest?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Schedule Your Inspection or Request an Allocation Advisory Today.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our investment specialists are on ground in Lagos and Abeokuta to provide guided inspections, coordinate charts and contract of sale terms.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-white text-[#101D32] text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer hover:bg-slate-100"
            >
              <span>Enquire Now / Book Inspection</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>Direct WhatsApp Discussion</span>
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
