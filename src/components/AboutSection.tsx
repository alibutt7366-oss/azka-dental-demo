import React from 'react';
import { clinicData } from '../config/clinicData';
import { ShieldCheck, HeartHandshake, Stethoscope, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Clinic Values & Practice Information */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-3">
              <span>About Azka Dental Care</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal normal-case">Pakpattan, Punjab</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-6">
              Dedicated to Safe, Gentle, and Ethical Dental Health.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-4">
              <strong className="text-slate-900 font-semibold">{clinicData.name}</strong> was established to provide the residents of Pakpattan with reliable, compassionate dental care. Our practice is founded on three uncompromising pillars: clinical sterilization, gentle patient communication, and ethical treatment planning.
            </p>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              We understand that visiting a dental clinic can cause anxiety for many children and adults. We take the time to listen to your concerns, explain diagnostic findings clearly, and outline your treatment options so you can make informed decisions about your oral health with complete peace of mind.
            </p>

            {/* Core Practice Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 text-teal-800 font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Hospital-Grade Sterilization</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medical autoclaving for all surgical instruments, strict disinfection of treatment units, and single-use disposable barriers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 text-teal-800 font-semibold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Gentle & Patient-First</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Careful application of modern local anesthesia and attentive pacing so your dental visits remain as calm and pain-free as possible.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 text-teal-800 font-semibold text-sm mb-1.5">
                  <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Conservative Dentistry</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We prioritize saving and preserving your natural teeth whenever medically feasible through precise restorative procedures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 text-teal-800 font-semibold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Clear Consultation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No pressured decisions. We explain your diagnosis, available alternatives, and expected maintenance for each treatment.
                </p>
              </div>
            </div>

            {/* Address callout */}
            <div className="text-xs text-slate-600 bg-white border border-slate-200 rounded-lg p-3.5 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0"></span>
              <span>
                Located conveniently in Pakpattan at <strong>{clinicData.address.fullAddress}</strong>.
              </span>
            </div>
          </div>

          {/* Right Column: Visual Bento of Real Clinical Spaces */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Upper Card: Sterilized Instruments */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <img
                src={clinicData.images.instruments}
                alt="Sterilized stainless steel dental instruments on a clean surgical tray"
                className="w-full h-48 sm:h-56 object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Sterilization & Instrument Prep</span>
                <span className="text-teal-700 font-medium">Autoclaved & Sealed</span>
              </div>
            </div>

            {/* Lower Grid Split: Consultation & Reception */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                <img
                  src={clinicData.images.consultation}
                  alt="Modern dental consultation suite with digital dental radiograph monitor"
                  className="w-full h-36 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-2.5 text-xs text-slate-800 font-medium text-center">
                  Consultation Suite
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                <img
                  src={clinicData.images.reception}
                  alt="Welcoming and sanitized dental clinic reception area"
                  className="w-full h-36 object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-2.5 text-xs text-slate-800 font-medium text-center">
                  Reception & Waiting Area
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
