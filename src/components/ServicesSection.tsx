import React, { useState } from 'react';
import { clinicData, DentalService, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { Check, Calendar, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = ['All', 'Preventive Care', 'Restorative', 'Endodontics', 'Oral Surgery', 'Orthodontics', 'Cosmetic'];

  const filteredServices = selectedCategory === 'All'
    ? clinicData.services
    : clinicData.services.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Clinical Treatments</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal normal-case">Comprehensive Dental Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Dental Care Tailored to Your Long-Term Oral Health
          </h2>

          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            All dental treatments and procedures are provided using sterilized clinical instruments and modern hygiene standards. Please note that exact treatment plans and availability are determined during an in-person clinical examination.
          </p>
        </div>

        {/* Filter Segmented Control (Interactive buttons, styled cleanly per design guidelines) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const isExpanded = expandedCardId === service.id;
            const waServiceUrl = buildWhatsAppAppointmentUrl({
              service: service.title,
              message: `I would like to inquire about ${service.title} at Azka Dental Care.`,
            });

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 hover:border-teal-400 p-6 shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  {/* Category and Service Number (Clean editorial numbering, no mechanical comments) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-medium text-teal-800">{service.category}</span>
                    <span className="font-mono tabular-nums text-slate-400">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Expanded Full Details if toggled */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>{service.fullDesc}</p>
                    </div>
                  )}

                  {/* Key Features / Procedure Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Clinical Confirmation Badge & Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  {/* Availability Note */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50/80 px-2.5 py-1.5 rounded-md mb-4">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span className="text-[11px] leading-tight font-medium">
                      Availability subject to clinic confirmation
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Inquiry</span>
                    </button>

                    <a
                      href={waServiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-lg transition-colors"
                      title={`WhatsApp inquiry for ${service.title}`}
                      aria-label={`WhatsApp inquiry for ${service.title}`}
                    >
                      <MessageCircle className="w-4 h-4 text-teal-700" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setExpandedCardId(isExpanded ? null : service.id)}
                      className="px-2.5 py-2.5 text-xs text-slate-500 hover:text-slate-800 border border-slate-200 rounded-lg transition-colors"
                      title={isExpanded ? 'Show less' : 'Read more details'}
                    >
                      {isExpanded ? 'Less' : 'More'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Notice Box for Services */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                Need a specific consultation not listed here?
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Our clinic reviews each case personally. Contact us directly at <span className="font-semibold text-slate-800">+92 320 8735364</span> with your query.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppAppointmentUrl({ message: 'Hello, I have a general dental question regarding treatments at Azka Dental Care.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-teal-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-teal-700" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
