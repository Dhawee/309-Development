import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';
import { createWhatsAppUrl } from '../utils/formService';

export const Footer: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl('General Corporate Enquiry');

  return (
    <footer className="bg-[#101D32] text-white pt-16 pb-12 border-t border-[#1D3252]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#23395B]/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/assets/official_logo_white.png"
                alt="309 Development Ltd."
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#ECB7B5] font-semibold">
              {COMPANY_INFO.motto}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-1">
              {COMPANY_INFO.description}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="italic">"{COMPANY_INFO.statement}"</p>
            </div>
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center space-x-2 px-4 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-[0.18em] font-bold text-[#ECB7B5] font-heading">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About 309 Development</Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">All Projects</Link>
              </li>
              <li>
                <Link to="/ambassadors" className="text-slate-300 hover:text-white transition-colors">309 Ambassadors</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact & Inspection</Link>
              </li>
            </ul>
          </div>

          {/* Flagship Projects */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-[0.18em] font-bold text-[#ECB7B5] font-heading">
              Flagship Portfolio
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/projects/verdant-acres-resort"
                  className="text-white font-semibold hover:text-[#ECB7B5] transition-colors flex items-center group"
                >
                  <span>Verdant Acres & Resort</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projects/verdant-acres-resort#verdant-vine" className="text-slate-300 hover:text-white transition-colors">
                  • Verdant Vine (Farm)
                </Link>
              </li>
              <li>
                <Link to="/projects/verdant-acres-resort#verdant-leisure" className="text-slate-300 hover:text-white transition-colors">
                  • Verdant Leisure (Resort)
                </Link>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                <span className="inline-block px-2 py-0.5 rounded-sm bg-[#1D3252] text-[#ECB7B5] font-mono font-medium border border-[#23395B]">
                  More products coming soon
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-[0.18em] font-bold text-[#ECB7B5] font-heading">
              Enquiries
            </h5>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#ECB7B5] shrink-0 mt-0.5" />
                <span>Cafe One Yaba, 3rd Floor, E-Centre, 1-11 Commercial Avenue, Yaba</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#ECB7B5] shrink-0" />
                <a href="tel:+2349167118929" className="hover:text-white transition-colors font-mono font-medium">
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#ECB7B5] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/assets/VAR_Brochure.pdf"
                  download
                  className="inline-flex items-center text-xs text-[#ECB7B5] hover:underline font-medium"
                >
                  Download VAR Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} 309 Development Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-[#23395B]">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Investment & Allocation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
