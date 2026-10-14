import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2, MessageSquare, ShieldCheck } from 'lucide-react';
import { submitEnquiry, createWhatsAppUrl } from '../utils/formService';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOffering?: string;
  defaultSize?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultOffering = 'Verdant Vine',
  defaultSize = 'Plot',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [offering, setOffering] = useState(defaultOffering);
  const [parcelSize, setParcelSize] = useState(defaultSize);
  const [inspectionDate, setInspectionDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ id: string; message: string } | null>(null);

  if (!isOpen) return null;

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
      setError('Please provide a valid active telephone number.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitEnquiry({
        fullName,
        email,
        phone,
        offering,
        parcelSize,
        inspectionDate: inspectionDate || undefined,
        notes: notes || undefined,
        type: inspectionDate ? 'inspection' : 'general',
      });
      setSuccessData({ id: res.id, message: res.message });
    } catch (err: any) {
      setError(err?.message || 'Failed to submit enquiry. Please try again or reach out on WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccessData(null);
    setError(null);
    onClose();
  };

  const whatsappDirectUrl = createWhatsAppUrl('Direct Project Enquiry', {
    Name: fullName || 'Prospect',
    Offering: offering,
    'Parcel Size': parcelSize,
    'Inspection Date': inspectionDate || 'Not specified',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-sm max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-[#101D32] p-1.5 rounded-sm hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {successData ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#101D32]">
              Enquiry Received
            </h3>
            <div className="mt-2 inline-block px-3 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-mono text-[#101D32] font-semibold">
              Reference: {successData.id}
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {successData.message}
            </p>

            <div className="mt-6 p-4 rounded-sm bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
              <div className="font-semibold text-[#101D32]">Submission Summary:</div>
              <div>• Offering: <span className="font-medium text-[#101D32]">{offering}</span></div>
              <div>• Land Size: <span className="font-medium text-[#101D32]">{parcelSize}</span></div>
              {inspectionDate && <div>• Requested Inspection: <span className="font-medium text-[#101D32]">{inspectionDate}</span></div>}
              <div>• Name: <span className="font-medium text-[#101D32]">{fullName}</span></div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="py-3 px-5 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#ECB7B5]"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#101D32] font-bold">
                  309 Development Ltd.
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#101D32] mt-1.5">
                Project & Inspection Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Schedule a site inspection or receive verified documentation and contract terms.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-sm flex items-start space-x-2 text-red-700 text-xs">
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
                    Project Offering
                  </label>
                  <select
                    value={offering}
                    onChange={(e) => setOffering(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                  >
                    <option value="Verdant Vine">Verdant Vine (Farmland)</option>
                    <option value="Verdant Leisure">Verdant Leisure (Resort)</option>
                    <option value="General Portfolio Consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                    Land Size Interest
                  </label>
                  <select
                    value={parcelSize}
                    onChange={(e) => setParcelSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                  >
                    <option value="Plot">1 Plot (600 sqm standard)</option>
                    <option value="Acre">1 Acre (6 Plots)</option>
                    <option value="Hectare">1 Hectare (~15 Plots)</option>
                    <option value="Multiple Hectares / Syndicate">Syndicate / Multiple Hectares</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 flex items-center justify-between font-heading">
                  <span>Preferred Inspection Date (Optional)</span>
                  <span className="text-[10px] text-slate-500 font-normal">Alabata, Abeokuta Site</span>
                </label>
                <input
                  type="date"
                  value={inspectionDate}
                  onChange={(e) => setInspectionDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-sm border border-slate-200 focus:border-[#101D32] focus:ring-1 focus:ring-[#101D32] text-sm text-[#101D32] bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#101D32] uppercase tracking-wider mb-1 font-heading">
                  Questions / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your investment horizon, farm plans or inspection preference..."
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
                      <span>Verifying & Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Official Enquiry</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#101D32]" />
                  <span>Strict confidentiality assured</span>
                </div>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#101D32] font-semibold hover:underline flex items-center space-x-1"
                >
                  <MessageSquare className="h-3 w-3 text-[#25D366]" />
                  <span>Chat directly instead</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
