import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';
import { createWhatsAppUrl } from '../utils/formService';

export const Footer: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl('General Corporate Enquiry');

  return (
    <footer className="bg-white text-slate-800 pt-20 pb-14 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-slate-200/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/assets/official_logo_gold.png"
                alt="309 Development Ltd."
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#101D32] font-semibold">
              {COMPANY_INFO.motto}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm pt-1">
              {COMPANY_INFO.description}
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="italic">"{COMPANY_INFO.statement}"</p>
            </div>
            {/* WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-[0.18em] font-bold text-slate-900 font-heading">
              Navigation
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-slate-950 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-slate-950 transition-colors">About 309 Development</Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 hover:text-slate-950 transition-colors">All Projects</Link>
              </li>
              <li>
                <Link to="/ambassadors" className="text-slate-600 hover:text-slate-950 transition-colors">309 Ambassadors Network</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-slate-950 transition-colors">Contact & Inspection</Link>
              </li>
            </ul>
          </div>

          {/* Flagship Projects */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-[0.18em] font-bold text-slate-900 font-heading">
              Flagship Portfolio
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/projects/verdant-acres-resort"
                  className="text-slate-900 font-semibold hover:text-[#101D32] transition-colors flex items-center group"
                >
                  <span>Verdant Acres & Resort</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#101D32]" />
                </Link>
              </li>
              <li>
                <Link to="/projects/verdant-acres-resort#verdant-vine" className="text-slate-600 hover:text-slate-950 transition-colors">
                  • Verdant Vine (Farmland)
                </Link>
              </li>
              <li>
                <Link to="/projects/verdant-acres-resort#verdant-leisure" className="text-slate-600 hover:text-slate-950 transition-colors">
                  • Verdant Leisure (Resort)
                </Link>
              </li>
              <li className="text-slate-600">
                <span>• VERDANT ABODE (residential)</span>
                <span className="ml-1.5 text-[10px] font-mono uppercase bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 font-medium">Coming Soon</span>
              </li>
              <li className="text-slate-600">
                <span>• VERDANT RESERVE (Land banking)</span>
                <span className="ml-1.5 text-[10px] font-mono uppercase bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 font-medium">Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-[0.18em] font-bold text-slate-900 font-heading">
              Enquiries & Office
            </h5>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#101D32] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Cafe One Yaba, 3rd Floor, E-Centre, 1-11 Commercial Avenue, Yaba, Lagos</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#101D32] shrink-0" />
                <a href="tel:+2349167118929" className="hover:text-slate-950 transition-colors font-mono font-medium">
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#101D32] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-slate-950 transition-colors break-all">
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/assets/VAR_Brochure.pdf"
                  download
                  className="inline-flex items-center text-xs font-semibold text-[#101D32] hover:underline"
                >
                  Download VAR Brochure (PDF) →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} 309 Development Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-slate-950 transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms" className="hover:text-slate-950 transition-colors">Terms of Investment & Allocation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
