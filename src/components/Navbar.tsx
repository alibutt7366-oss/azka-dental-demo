import React, { useState } from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Clinic Hours', href: '#hours' },
    { label: 'Location & Map', href: '#location' },
    { label: 'FAQs', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = buildWhatsAppAppointmentUrl({});

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-6 sm:gap-8">
          {/* Zone 1: Brand wordmark & official logo emblem (preserving 1:1 circular proportions) */}
          <a
            href="#home"
            className="flex items-center gap-3 sm:gap-3.5 text-slate-900 group whitespace-nowrap shrink-0 py-1"
          >
            <div className="relative shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src={clinicData.logo}
                alt="Azka Dental Care Official Logo"
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-contain aspect-square bg-black shadow-xs block"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight group-hover:text-teal-900 transition-colors">
                {clinicData.name}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-normal">
                Pakpattan, Pakistan
              </span>
            </div>
          </a>

          {/* Zone 2: Concise navigation links (single line, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary CTA button & Mobile menu toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              Book Appointment
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2.5 text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
              aria-label="WhatsApp Appointment"
            >
              <MessageCircle className="w-5 h-5 text-teal-700" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
            <div className="flex items-center gap-3 p-2.5 mb-2 rounded-xl bg-slate-50 border border-slate-100">
              <div className="relative shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shadow-xs">
                <img
                  src={clinicData.logo}
                  alt="Azka Dental Care Emblem"
                  className="w-10 h-10 rounded-full object-contain aspect-square bg-black block"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-tight">
                  {clinicData.name}
                </span>
                <span className="text-[11px] text-slate-500 font-normal">
                  Opp. Canal Pull / Green Town Pull, Pakpattan
                </span>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-colors"
              >
                Book Appointment Inquiry
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-teal-700" />
                <span>WhatsApp (+92 320 8735364)</span>
              </a>
            </div>
          </div>
        )}
      </header>
  );
};
