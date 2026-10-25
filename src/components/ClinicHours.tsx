import React from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { Clock, AlertTriangle, Phone, MessageCircle } from 'lucide-react';

export const ClinicHours: React.FC = () => {
  return (
    <section id="hours" className="py-16 lg:py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Operating Schedule</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal normal-case">Pakpattan Facility</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
            Clinic Hours & Consultation Times
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Consultations are arranged during afternoon and evening sessions to serve working professionals and families in Pakpattan.
          </p>
        </div>

        {/* Schedule & Emergency Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Schedule Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
            
            {/* Tentative Schedule Notice Header */}
            <div className="p-4 sm:p-5 bg-amber-50/70 border-b border-amber-200/60 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-amber-900">
                  Tentative Schedule — Subject to Clinic Confirmation
                </h3>
                <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed">
                  These hours are provisional placeholder timings until verified by the clinic owner. We strongly recommend sending a WhatsApp inquiry or calling <span className="font-semibold text-amber-950">{clinicData.phone}</span> prior to visiting.
                </p>
              </div>
            </div>

            {/* Hours Table */}
            <div className="p-5 sm:p-6 divide-y divide-slate-100">
              {clinicData.openingHours.map((item, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                    <span className="text-sm font-semibold text-slate-900">{item.days}</span>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-sm font-bold text-teal-900 font-mono tabular-nums block sm:inline">
                      {item.hours}
                    </span>
                    <span className="text-xs text-slate-500 block sm:mt-0.5 font-normal">
                      {item.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer with Quick Call Out */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span>Need to verify today’s slot?</span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="font-semibold text-slate-900 hover:text-teal-800 transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>{clinicData.phone}</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={buildWhatsAppAppointmentUrl({ message: 'Hello, what are your available consultation hours today at Azka Dental Care?' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-700 hover:text-teal-800 transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Check on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Emergency & Walk-in Guidelines */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Emergency & Walk-in Inquiries
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We accommodate acute dental toothaches and broken restorations as quickly as our clinical schedule permits.
              </p>
              
              <ul className="text-xs text-slate-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Notify via WhatsApp before departing so staff can prepare the operatory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>Carry any prior dental records, prescriptions, or X-rays if available.</span>
                </li>
              </ul>

              <a
                href={buildWhatsAppAppointmentUrl({ message: 'EMERGENCY INQUIRY: I have acute toothache/dental pain and need an urgent checkup.' })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-teal-400" />
                <span>Urgent Dental Message</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-teal-900 leading-relaxed">
              <strong>Friday Prayer Consideration:</strong> Friday consultation sessions start after Jummah prayers at 5:00 PM (tentative).
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
