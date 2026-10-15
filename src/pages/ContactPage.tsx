import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';
import { submitEnquiry, createWhatsAppUrl } from '../utils/formService';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ id: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setError('Please enter an active telephone or WhatsApp number.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitEnquiry({
        fullName,
        email,
        phone,
        offering: subject,
        parcelSize: 'General',
        inspectionDate: preferredDate || undefined,
        notes: message || undefined,
        type: preferredDate ? 'inspection' : 'general',
      });
      setSuccessData({ id: res.id, message: res.message });
    } catch (err: any) {
      setError(err?.message || 'Submission failed. Please try again or reach out on WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappDirectUrl = createWhatsAppUrl('General Contact / Inspection Request', {
    Name: fullName || 'Visitor',
    Subject: subject,
    'Preferred Inspection Date': preferredDate || 'Not specified',
  });

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header Banner (Midnight Blue Gradient — Left to Right, White Text) */}
      <section className="bg-[#101D32] text-white py-20 sm:py-28 border-b border-[#1D3252] relative overflow-hidden">
        {/* Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32] via-[#101D32]/90 to-[#1D3A5C]/70" />
        {/* Subtle radial accent for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight">
              Contact 309 Development Ltd.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Connect directly with our investment advisory desk for parcel allocations, site inspections at Alabata, Abeokuta, or formal corporate documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid (White Background) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Office Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  Get in Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#101D32] mt-1">
                  We Are Ready to Assist You
                </h2>
                <div className="accent-rule mt-3" />
                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  Whether you are an individual exploring your first plot at Verdant Vine or an institutional syndicate evaluating multiple hectares, our team delivers personalized, transparent counsel.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <MapPin className="h-5 w-5 text-[#101D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101D32] font-semibold font-heading">Corporate Liaison Offices</strong>
                    <span className="text-slate-600">{COMPANY_INFO.contact.address}</span>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <Phone className="h-5 w-5 text-[#101D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101D32] font-semibold font-heading">Phone / WhatsApp</strong>
                    <a href="tel:+2349167118929" className="text-[#101D32] hover:underline font-mono font-medium">
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <Mail className="h-5 w-5 text-[#101D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101D32] font-semibold font-heading">Email</strong>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-600 hover:text-[#101D32] break-all">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                  <Clock className="h-5 w-5 text-[#101D32] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#101D32] font-semibold font-heading">Inspection Schedule</strong>
                    <span className="text-slate-600">Thursdays & Saturdays (Departure from Lagos & Abeokuta designated points)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action (Blue Box) */}
              <div className="p-5 rounded-sm bg-[#101D32] text-white space-y-3">
                <div className="flex items-center space-x-2 text-[#25D366]">
                  <MessageSquare className="h-5 w-5" />
                  <span className="font-heading font-bold text-white text-base">Instant WhatsApp Desk</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prefer instant mobile chat? Reach out directly to our verified corporate customer desk.
                </p>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>

            </div>

            {/* Working Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-10 shadow-sm">
                {successData ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#101D32]">
                      Message Successfully Sent
                    </h3>
                    <div className="mt-2 inline-block px-3 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-[#101D32] font-bold">
                      Reference: {successData.id}
                    </div>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                      {successData.message}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Continue on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSuccessData(null)}
                        className="py-3 px-6 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-[#101D32]">
                        Send Us an Enquiry or Book an Inspection
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Please provide accurate contact details so our team can follow up promptly.
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
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Chief Adeleke Olumide"
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
                            placeholder="name@domain.com"
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                            Telephone / WhatsApp *
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
                            Purpose of Contact
                          </label>
                          <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          >
                            <option value="Verdant Vine Acquisition">Verdant Vine (Farmland Acquisition)</option>
                            <option value="Verdant Leisure Acquisition">Verdant Leisure (Resort Parcel Acquisition)</option>
                            <option value="Book Site Inspection">Book Physical Site Inspection</option>
                            <option value="General Corporate Consultation">General Corporate Consultation</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                            Preferred Inspection Date (Optional)
                          </label>
                          <input
                            type="date"
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                          Message / Specific Queries
                        </label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Please provide any specific requirements regarding land size, budget or timeline..."
                          className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors resize-none"
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
                              <span>Submitting Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Verified Enquiry</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="pt-2 text-center text-[11px] text-slate-500">
                        <p>
                          * Submitting this form implies agreement with our privacy notice. Your information is treated with strict corporate confidentiality.
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
