import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Briefcase,
  FileCheck
} from 'lucide-react';
import { submitAmbassadorRegistration, createWhatsAppUrl } from '../utils/formService';

export const AmbassadorsPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [experienceYears, setExperienceYears] = useState('1-3 Years');
  const [realtorGroup, setRealtorGroup] = useState('');
  const [notes, setNotes] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ id: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please provide your full legal name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Please provide a valid telephone number.');
      return;
    }
    if (!location.trim()) {
      setError('Please state your primary location / state of operation.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitAmbassadorRegistration({
        fullName,
        email,
        phone,
        location,
        experienceYears,
        realtorGroup: realtorGroup || undefined,
        notes: notes || undefined,
      });
      setSuccessData({ id: res.id, message: res.message });
    } catch (err: any) {
      setError(err?.message || 'Failed to submit registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappAmbassadorUrl = createWhatsAppUrl('309 Ambassador Network Onboarding', {
    Name: fullName || 'Realtor Candidate',
    Location: location || 'Nigeria',
    Experience: experienceYears,
  });

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header (Midnight Blue Gradient — Left to Right, White Text) */}
      <section className="bg-[#101D32] text-white py-20 sm:py-28 border-b border-[#1D3252] relative overflow-hidden">
        {/* Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32] via-[#101D32]/90 to-[#1D3A5C]/70" />
        {/* Subtle radial accent for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight">
              309 Ambassadors Network
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Empowering real estate professionals, consultants and sales executives to represent 309 Development Ltd. with verified opportunities, structured collateral and dependable developer backing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Registration Grid (White Background) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Ambassador Narrative & Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                Professional Collaboration
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
                Who Are 309 Ambassadors?
              </h2>
              <div className="accent-rule" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-[#101D32]">309 Ambassadors</strong> is the official designation for licensed realtors, property advisors, and independent sales executives who partner with 309 Development Ltd.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As a 309 Ambassador, you become an integral bridge connecting astute investors to structured land assets in Nigeria. We equip you with certified marketing materials, transparent legal documentation, site inspection logistics, and prompt transaction processing.
              </p>

              {/* Ambassador Core Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-[#101D32] font-heading font-bold text-base">
                    <FileCheck className="h-5 w-5 text-[#101D32]" />
                    <span>Verified Project Collateral</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Direct access to official brochures, coordinate charts, high-resolution imagery and subscription agreements.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-[#101D32] font-heading font-bold text-base">
                    <Briefcase className="h-5 w-5 text-[#101D32]" />
                    <span>Dedicated Developer Desk</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Direct liaison support for your clients' site inspections, survey questions, and contract of sale generation.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-[#101D32] font-heading font-bold text-base">
                    <ShieldCheck className="h-5 w-5 text-[#101D32]" />
                    <span>Integrity & Fraud Protection</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Transparent transaction protocols protecting your reputation and your clients' capital at every step.
                  </p>
                </div>
              </div>

              {/* Brand Imagery Mosaic */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-sm overflow-hidden border border-slate-200 aspect-square bg-slate-50">
                  <img
                    src="/assets/brand_lanyard.png"
                    alt="Ambassador Badge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-sm overflow-hidden border border-slate-200 aspect-square bg-slate-50">
                  <img
                    src="/assets/brand_cap.png"
                    alt="309 Merchandise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Registration Form (White/Slate Card with Blue Button) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm">
                {successData ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#101D32]">
                      Registration Received
                    </h3>
                    <div className="mt-2 inline-block px-3 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-[#101D32] font-bold">
                      Candidate ID: {successData.id}
                    </div>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                      {successData.message}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href={whatsappAmbassadorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Connect on WhatsApp Desk</span>
                      </a>
                      <button
                        onClick={() => setSuccessData(null)}
                        className="py-3 px-5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Register Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#101D32] font-bold bg-[#ECB7B5]/25 px-2.5 py-1 rounded-sm border border-[#ECB7B5]/50">
                        Official Application
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-[#101D32] mt-2">
                        Register as a 309 Ambassador
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Join our verified realtor network. We will review your submission and contact you with official partner documentation.
                      </p>
                    </div>

                    {error && (
                      <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-sm flex items-start space-x-2 text-red-700 text-xs">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Samuel Olawale"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="samuel@realty.ng"
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 800 000 0000"
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                            Location / State *
                          </label>
                          <input
                            type="text"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g. Lagos, Ogun, Abuja"
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                            Real Estate Experience
                          </label>
                          <select
                            value={experienceYears}
                            onChange={(e) => setExperienceYears(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          >
                            <option value="Under 1 Year">Under 1 Year / New to Real Estate</option>
                            <option value="1-3 Years">1 – 3 Years</option>
                            <option value="3-5 Years">3 – 5 Years</option>
                            <option value="5+ Years">5+ Years (Senior Realtor)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                          Realtor Group / Brokerage Affiliation (Optional)
                        </label>
                        <input
                          type="text"
                          value={realtorGroup}
                          onChange={(e) => setRealtorGroup(e.target.value)}
                          placeholder="e.g. Independent Realtor or Agency Name"
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                          Additional Remarks (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Mention your client focus or any specific questions..."
                          className="w-full px-3.5 py-2 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors resize-none"
                        />
                      </div>

                      {/* Blue Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3.5 px-4 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-sm font-semibold tracking-wide transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin text-[#ECB7B5]" />
                              <span>Submitting Ambassador Application...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit 309 Ambassador Registration</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="pt-2 text-center text-[11px] text-slate-500">
                        <p>
                          * Official registration ensures compliance with 309 Development Ltd. partner standards.
                        </p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
