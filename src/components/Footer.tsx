import React from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Dental Services', href: '#services' },
    { label: 'About Practice', href: '#about' },
    { label: 'Operating Schedule', href: '#hours' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Patient FAQs', href: '#faq' },
    { label: 'Book Appointment', href: '#appointment' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Clinic Identity & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shadow-md">
                <img
                  src={clinicData.logo}
                  alt="Azka Dental Care Official Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain aspect-square bg-black shadow-xs block"
                  loading="lazy"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {clinicData.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing modern, compassionate dental treatments in Pakpattan, Pakistan. Focused on instrument sterilization, gentle care, and patient comfort.
            </p>

            {/* Social Links (Facebook & Instagram) */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={clinicData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors flex items-center gap-2"
                  aria-label="Azka Dental Care Facebook Page"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  href={clinicData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors flex items-center gap-2"
                  aria-label="Azka Dental Care Instagram Profile"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
              Clinic Contact & Address
            </span>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {clinicData.address.houseNumber}, {clinicData.address.landmark}, {clinicData.address.city}, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="hover:text-teal-300 font-mono tabular-nums transition-colors"
                >
                  {clinicData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={buildWhatsAppAppointmentUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 transition-colors"
                >
                  WhatsApp: +92 320 8735364
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-500 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-slate-400">Notice:</strong> {clinicData.disclaimers.confirmationNotice}
          </p>
          <p>
            {clinicData.disclaimers.pricingNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {clinicData.name}. All rights reserved.</p>
          <p>Pakpattan, Punjab, Pakistan</p>
        </div>

      </div>
    </footer>
  );
};
