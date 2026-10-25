import React, { useState } from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const directWhatsAppUrl = buildWhatsAppAppointmentUrl({
    message: 'Hello Azka Dental Care, I would like to inquire about an appointment.',
  });

  return (
    <div className="fixed bottom-5 right-5 z-30 flex items-end gap-2.5">
      {/* Optional tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-800 animate-in fade-in slide-in-from-right-2">
          <span>Book or Inquire on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 group"
        aria-label="Chat on WhatsApp with Azka Dental Care (+92 320 8735364)"
        title="Chat on WhatsApp with Azka Dental Care"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
