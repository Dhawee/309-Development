import React from 'react';
import { Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <section className="bg-[#101D32] text-white py-16 sm:py-24 border-b border-[#1D3252] relative overflow-hidden">
        {/* Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32] via-[#101D32]/90 to-[#1D3A5C]/70" />
        {/* Subtle radial accent for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-slate-300 mb-3 font-mono">
            <Lock className="h-3.5 w-3.5 text-white" />
            <span>Corporate Governance & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-medium text-white">
            Privacy Policy & Data Notice
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Effective Date: October 2026 • 309 Development Ltd.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white border-x border-b border-slate-200 rounded-b-sm shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">1. Introduction</h2>
          <p>
            {COMPANY_INFO.name} ("the Company", "we", "us", or "our") respects your privacy and is committed to protecting the personal data of our subscribers, investors, realtors, and website visitors in accordance with the Nigeria Data Protection Act (NDPA) and applicable regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">2. Information We Collect</h2>
          <p>
            When you inquire about Verdant Acres & Resort (VAR), register as a 309 Ambassador, or submit a subscription form, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Full legal name, title, and nationality.</li>
            <li>Contact details including telephone number, WhatsApp number, and residential/business address.</li>
            <li>Means of identification (e.g., National ID Card, International Passport, Driver’s License, Voter’s Card) for title deed issuance.</li>
            <li>Next of kin details and corporate affiliation (where applicable).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">3. Use of Information</h2>
          <p>
            Your information is processed strictly for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Processing land subscriptions, title registrations, and Deed of Assignment preparation.</li>
            <li>Communicating physical site inspection schedules and allocation letters.</li>
            <li>Compliance with federal Anti-Money Laundering (AML) and Counter-Terrorist Financing regulations.</li>
            <li>Managing 309 Ambassador accreditation and sales administration.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">4. Confidentiality & Security</h2>
          <p>
            All information supplied on subscription forms, KYC declarations, and enquiry channels is treated with strict corporate confidentiality. We implement technical and administrative safeguards to protect your personal details against unauthorized disclosure, loss, or misuse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">5. Contact Our Data Protection Officer</h2>
          <p>
            For questions or requests concerning your data, please contact:
            <br />
            <strong>309 Development Ltd.</strong>
            <br />
            Email: <a href="mailto:info@309development.com" className="text-[#101D32] font-semibold hover:underline">info@309development.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};
