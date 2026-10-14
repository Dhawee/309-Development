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

  // On the homepage, start transparent over dark hero; on other pages start scrolled
  const isHomePage = location.pathname === '/';
  const showScrolled = isScrolled || !isHomePage;

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
        showScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-[#101D32] py-4 border-b border-[#1D3252]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo — white when dark, coloured when scrolled */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#101D32] rounded-sm group py-1"
            aria-label="309 Development Ltd. Home"
          >
            <img
              src={showScrolled ? '/assets/official_logo_gold.png' : '/assets/official_logo_white.png'}
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
                  showScrolled
                    ? isActive(link.path)
                      ? 'text-[#101D32]'
                      : 'text-slate-500 hover:text-[#101D32]'
                    : isActive(link.path)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full ${showScrolled ? 'bg-[#101D32]' : 'bg-[#ECB7B5]'}`} />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenEnquiry}
              className={`inline-flex items-center justify-center px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                showScrolled
                  ? 'bg-[#101D32] hover:bg-[#182A45] text-white border border-[#101D32]'
                  : 'bg-[#182A45] hover:bg-[#1D3252] border border-[#ECB7B5]/60 text-white shadow-md'
              }`}
              id="enquire-now-nav-btn"
            >
              <span>Enquire Now</span>
              <span className="ml-2 w-2 h-2 rounded-full bg-[#ECB7B5]"></span>
              <ArrowUpRight className="ml-1 h-4 w-4 text-[#ECB7B5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#101D32] ${
                showScrolled
                  ? 'text-[#101D32] hover:bg-slate-100'
                  : 'text-slate-200 hover:text-white hover:bg-[#1D3252]'
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
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-3 rounded-sm text-base font-semibold tracking-wide transition-colors ${
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
                className="w-full flex items-center justify-center px-4 py-3 rounded-sm bg-[#101D32] hover:bg-[#182A45] text-white text-base font-semibold tracking-wide transition-colors shadow-md cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="ml-2 h-4 w-4 text-[#ECB7B5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
