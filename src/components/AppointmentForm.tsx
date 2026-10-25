import React, { useState, useEffect } from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import {
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface AppointmentFormProps {
  preselectedService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ preselectedService }) => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState(preselectedService || clinicData.services[0].title);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Evening (5:00 PM – 8:00 PM)');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message?: string;
  } | null>(null);

  // Update service if prop changes
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  // Minimum date is today (format YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!patientName.trim()) {
      errs.patientName = 'Please enter patient name.';
    } else if (patientName.trim().length < 2) {
      errs.patientName = 'Name must be at least 2 characters.';
    }

    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter a valid phone number.';
    } else {
      // Basic phone check: numbers, spaces, plus, hyphens, min 10 digits
      const cleaned = phoneNumber.replace(/[^0-9]/g, '');
      if (cleaned.length < 10) {
        errs.phoneNumber = 'Please provide a complete 10-11 digit contact number (e.g. 0320 8735364).';
      }
    }

    if (!service) {
      errs.service = 'Please select a service.';
    }

    if (!preferredDate) {
      errs.preferredDate = 'Please select your preferred date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate brief validation feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: patientName.trim(),
        phone: phoneNumber.trim(),
        service,
        date: preferredDate,
        time: preferredTime,
        message: message.trim(),
      });
    }, 350);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setPatientName('');
    setPhoneNumber('');
    setPreferredDate('');
    setMessage('');
    setErrors({});
  };

  // Build the WhatsApp URL for submitted data or active inputs
  const currentWhatsAppUrl = buildWhatsAppAppointmentUrl({
    patientName: submittedData ? submittedData.name : patientName,
    phone: submittedData ? submittedData.phone : phoneNumber,
    service: submittedData ? submittedData.service : service,
    preferredDate: submittedData ? submittedData.date : preferredDate,
    preferredTime: submittedData ? submittedData.time : preferredTime,
    message: submittedData ? submittedData.message : message,
  });

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Scheduling & Consultation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Request an Appointment Inquiry
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Fill out the consultation inquiry below. To protect your scheduling convenience, appointments are coordinated and confirmed directly via WhatsApp with our clinic staff.
          </p>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-slate-900">How Scheduling Works: </strong>
            This web inquiry validates your preferred visit details. As no cloud database is used, submission directly formats your appointment request into a WhatsApp message for clinic staff at <span className="font-semibold text-slate-900">+92 320 8735364</span>. An appointment is only confirmed once staff verifies availability.
          </div>
        </div>

        {/* Success Card or Form */}
        {submittedData ? (
          <div className="bg-slate-50/70 rounded-2xl border border-teal-200 p-6 sm:p-10 shadow-sm animate-in fade-in duration-300">
            <div className="flex flex-col items-center text-center max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Inquiry Details Prepared!
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Thank you, <strong className="text-slate-900">{submittedData.name}</strong>. Your consultation details have been formatted. Please click the button below to send this request to Azka Dental Care via WhatsApp to confirm date & time availability.
              </p>

              {/* Inquiry Summary Box */}
              <div className="w-full mt-6 bg-white rounded-xl border border-slate-200 p-5 text-left text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-900">{submittedData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Contact Phone:</span>
                  <span className="font-mono tabular-nums font-semibold text-slate-900">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Requested Service:</span>
                  <span className="font-semibold text-teal-800">{submittedData.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-semibold text-slate-900">{submittedData.date}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Preferred Shift:</span>
                  <span className="font-semibold text-slate-900">{submittedData.time}</span>
                </div>
                {submittedData.message && (
                  <div className="pt-1">
                    <span className="text-slate-500 block mb-1">Additional Notes:</span>
                    <span className="text-slate-700 italic bg-slate-50 p-2 rounded block">{submittedData.message}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="w-full mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <a
                  href={currentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Request to WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset / New Inquiry</span>
                </button>
              </div>

              <p className="mt-4 text-[11px] text-slate-500">
                Clinic WhatsApp: +92 320 8735364 · Response time depends on active patient care sessions.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6"
          >
            {/* Grid 2-column for name and phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Patient Name */}
              <div>
                <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Patient Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="patientName"
                    value={patientName}
                    onChange={(e) => {
                      setPatientName(e.target.value);
                      if (errors.patientName) {
                        setErrors({ ...errors, patientName: '' });
                      }
                    }}
                    placeholder="e.g. Muhammad Ali"
                    className={`block w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:bg-white transition-colors ${
                      errors.patientName ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-400' : 'border-slate-300 focus:border-teal-600'
                    }`}
                    required
                  />
                </div>
                {errors.patientName && (
                  <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.patientName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number (WhatsApp) <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) {
                        setErrors({ ...errors, phoneNumber: '' });
                      }
                    }}
                    placeholder="0320 8735364"
                    className={`block w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:bg-white transition-colors ${
                      errors.phoneNumber ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-400' : 'border-slate-300 focus:border-teal-600'
                    }`}
                    required
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Requested Dental Service */}
            <div>
              <label htmlFor="serviceSelect" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Requested Dental Treatment <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <select
                  id="serviceSelect"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="block w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/40 text-slate-900 focus:bg-white focus:border-teal-600 transition-colors"
                  required
                >
                  {clinicData.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                  <option value="General Consultation / Unsure">Other / Not Listed Above</option>
                </select>
              </div>
              <p className="mt-1.5 text-[11px] text-slate-500">
                Service availability and recommended procedure will be assessed during clinical checkup.
              </p>
            </div>

            {/* Date & Shift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Date <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="preferredDate"
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      if (errors.preferredDate) {
                        setErrors({ ...errors, preferredDate: '' });
                      }
                    }}
                    className={`block w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-slate-50/40 text-slate-900 focus:bg-white transition-colors ${
                      errors.preferredDate ? 'border-rose-400 focus:border-rose-500 ring-1 ring-rose-400' : 'border-slate-300 focus:border-teal-600'
                    }`}
                    required
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1.5 text-xs text-rose-600 font-medium">{errors.preferredDate}</p>
                )}
              </div>

              {/* Preferred Time Shift */}
              <div>
                <label htmlFor="preferredTime" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="block w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/40 text-slate-900 focus:bg-white focus:border-teal-600 transition-colors"
                  >
                    <option value="Early Evening (4:00 PM – 6:00 PM)">Early Evening (4:00 PM – 6:00 PM)</option>
                    <option value="Late Evening (6:00 PM – 9:00 PM)">Late Evening (6:00 PM – 9:00 PM)</option>
                    <option value="Friday Post-Jummah (5:00 PM – 9:00 PM)">Friday Evening (5:00 PM – 9:00 PM)</option>
                    <option value="Weekend / Flexible Shift">Flexible / Any Available Slot</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Optional Symptoms / Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Symptoms or Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your symptoms, tooth sensitivity, or questions (e.g. sharp pain on lower molar, interested in braces consultation)..."
                  className="block w-full p-3.5 text-sm rounded-lg border border-slate-300 bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-600 transition-colors"
                ></textarea>
              </div>
            </div>

            {/* Privacy & Safety Note */}
            <div className="text-xs text-slate-500 leading-relaxed pt-2">
              By submitting this form, you acknowledge that your details are used strictly to coordinate your appointment inquiry via WhatsApp or phone.
            </div>

            {/* Submit Button & Direct WhatsApp Alternative */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm transition-all disabled:opacity-70 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span>Formatting Inquiry...</span>
                ) : (
                  <>
                    <span>Prepare WhatsApp Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <a
                href={currentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-teal-700" />
                <span>Quick WhatsApp (+923208735364)</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
