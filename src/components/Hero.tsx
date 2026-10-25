import React from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { Calendar, MessageCircle, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const directWhatsAppUrl = buildWhatsAppAppointmentUrl({
    message: 'Hello, I would like to request information about scheduling a dental consultation at Azka Dental Care.',
  });

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clinic Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet Location & Identity Anchor */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              <span>Pakpattan, Punjab, Pakistan</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 font-normal normal-case">Opposite Canal Pull / Green Town Pull</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance mb-5">
              Comprehensive Oral Healthcare with Modern Clinical Standards.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Welcome to <strong className="font-semibold text-slate-900">Azka Dental Care</strong>. We provide patient-first dental treatments in a sanitized, comfortable environment in Pakpattan. From preventative cleanings and natural tooth-colored fillings to root canals and orthodontics, our clinical focus is your comfort and oral health.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Book Appointment</span>
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200/70 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-teal-700" />
                <span>WhatsApp (+92 320 8735364)</span>
              </a>
            </div>

            {/* Honest Patient Disclaimer */}
            <p className="text-xs text-slate-500 max-w-xl flex items-start gap-1.5 leading-relaxed">
              <span className="text-teal-700 font-semibold">*</span>
              <span>All appointment slots and service availability are subject to clinic confirmation. Online inquiries are reviewed directly by staff.</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle backdrop border */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl bg-white">
                <img
                  src={clinicData.images.hero}
                  alt="Modern clean dental treatment operatory at Azka Dental Care"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim overlay for legibility at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-medium text-teal-300 mb-1">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span>Sterilized & Safe Clinical Facility</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-snug">
                    Sanitized instruments, ergonomic dental suites, and compassionate care for you and your family.
                  </p>
                </div>
              </div>

              {/* Floating mini-badge with clinic landmark */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-200 shadow-md text-xs text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span className="font-medium">Opp. Canal / Green Town Pull</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Trust Strip Row (Placed in full-width row below hero split per frontend guidelines) */}
        <div className="mt-14 pt-10 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Sterilization Standards</h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Autoclaved surgical instruments & disposable consumables for strict patient safety.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Comprehensive Treatments</h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Preventative checkups, restorative fillings, root canals, extractions & orthodontics.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Direct WhatsApp Inquiry</h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Quick responses at <span className="font-medium text-slate-800">+92 320 8735364</span> for scheduling assistance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Ethical Healthcare</h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Honest diagnoses, clear consultation, and treatments tailored to your oral condition.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
