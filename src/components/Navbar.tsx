import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // All pages now have a Midnight Blue hero header, so navbar starts dark on all pages
  const showScrolled = isScrolled;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: '309 Ambassadors', path: '/ambassadors' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-[#101D32]/85 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#101D32] rounded-sm group py-1"
            aria-label="309 Development Ltd. Home"
          >
            <img
              src={isScrolled ? '/assets/official_logo_gold.png' : '/assets/official_logo_white.png'}
              alt="309 Development Ltd."
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                  isScrolled
                    ? isActive(link.path)
                      ? 'text-[#101D32]'
                      : 'text-slate-600 hover:text-[#101D32]'
                    : isActive(link.path)
                    ? 'text-white'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isScrolled ? 'bg-[#101D32]' : 'bg-white'}`} />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenEnquiry}
              className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                isScrolled
                  ? 'bg-[#101D32] hover:bg-[#182A45] text-white border border-[#101D32]'
                  : 'bg-white hover:bg-slate-100 text-[#101D32] border border-white'
              }`}
              id="enquire-now-nav-btn"
            >
              <span>Book Inspection / Enquire</span>
              <ArrowUpRight className={`ml-1.5 h-3.5 w-3.5 ${isScrolled ? 'text-[#ECB7B5]' : 'text-[#101D32]'}`} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101D32] ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-3 rounded-md text-base font-semibold tracking-wide transition-colors ${
                  isActive(link.path)
                    ? 'bg-slate-50 text-[#101D32] border-l-4 border-[#101D32]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#101D32]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center px-4 py-3 rounded-full bg-[#101D32] hover:bg-[#182A45] text-white text-base font-semibold tracking-wide transition-colors shadow-md cursor-pointer"
              >
                <span>Book Inspection / Enquire</span>
                <ArrowUpRight className="ml-2 h-4 w-4 text-[#ECB7B5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
