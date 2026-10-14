import React from 'react';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <section className="bg-[#101D32] text-white py-16 border-b border-[#23395B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#ECB7B5] mb-3 font-mono">
            <FileText className="h-3.5 w-3.5" />
            <span>Official Investor Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Terms of Investment & Allocation Charter
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Transcribed from the official 309 Development Ltd. VAR Subscription & FAQ Charter
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white border-x border-b border-slate-200 rounded-b-sm shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Mandate Notice */}
        <div className="p-4 rounded-sm bg-slate-50 border-l-4 border-[#101D32] text-xs sm:text-sm space-y-1 border-y border-r border-slate-200">
          <div className="font-heading font-bold text-[#101D32]">Binding Corporate Governance:</div>
          <p>
            Filling a subscription form without payment of deposit does not create an obligation between subscribers and the company. Names will appear on your title documents exactly as filled on the official form. Any subsequent alteration attracts a fee of ₦50,000.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">1. Direct Payment Condition</h2>
          <p>
            All cash payments and cheques must be made directly in favor of <strong>309 DEVELOPMENT LIMITED</strong> (Account Number: <strong>1312966909</strong>). 309 Development Ltd. does not accept responsibility or liability for payments made into unauthorized or private accounts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">2. Transaction Process & Documentation</h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
            <li>Fill and submit the official Subscription Form with accurate personal/KYC information.</li>
            <li>Remit payment for land into the designated corporate bank account.</li>
            <li>Issuance of official Payment Receipt and Contract of Sale.</li>
            <li>Issuance of Physical Allocation Letter, Registered Survey Plan, and Deed of Assignment upon completion of full payment.</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">3. Allocation Protocol</h2>
          <p>
            Allocation shall be communicated to every subscriber, provided that all payments are made in full. The payments required for allocation include full payment for the plot(s) of land, Deed of Assignment, and Survey Plan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">4. Reselling & Change of Ownership</h2>
          <p>
            A subscriber up to date with plot payments can resell their land, provided 309 Development Ltd. is officially notified. A fee of <strong>₦100,000</strong> is payable to the company to cover the administrative cost of change of ownership to the new subscriber. The original copies of documents issued must be surrendered, and the new subscriber shall pay the applicable fees for preparation of Deed of Assignment and Survey in their name. 309 Development Ltd. does not resell plots on behalf of subscribers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">5. Payment Default Policy</h2>
          <p>
            After initial deposit, 309 Development Ltd. allows a <strong>30-day grace period</strong> for subscribers on installment payment plans upon written notice, before adding a 5% late fee penalty. Where a subscriber is in default for 3 continuous months, the company reserves the liberty to revoke the subscription and refund payments less a <strong>40% administrative fee</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">6. Refund Policy</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Land refund process takes 90–120 days.</li>
            <li>In the event of a land refund, a 40% administrative fee will be deducted.</li>
            <li>A purchaser can only request a refund during the subsistence of the payment schedule.</li>
            <li>Alternatively, a client may introduce a buyer or engage a realtor to facilitate transfer of interest, subject to developer approval.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-[#101D32]">7. Anti-Money Laundering (AML) Declaration</h2>
          <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-sm border border-slate-200">
            Subscribers affirm that funds utilized for real estate purchases at 309 Development Ltd. are not proceeds of any criminal or money laundering activity as defined under the Anti-Money Laundering Laws of the Federal Republic of Nigeria.
          </p>
        </section>
      </div>
    </div>
  );
};
