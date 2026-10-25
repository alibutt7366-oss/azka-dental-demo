import React from 'react';
import { clinicData, buildWhatsAppAppointmentUrl } from '../config/clinicData';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, ShieldAlert, Compass } from 'lucide-react';

export const MapLocation: React.FC = () => {
  // OpenStreetMap embed URL centered around Pakpattan coordinates
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=73.355%2C30.325%2C73.415%2C30.360&layer=mapnik&marker=${clinicData.address.lat}%2C${clinicData.address.lng}`;

  return (
    <section id="location" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            <span>Location & Accessibility</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-normal normal-case">Directions in Pakpattan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Find Azka Dental Care in Pakpattan
          </h2>

          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            Conveniently situated along the main landmark axis, opposite Canal Pull / Green Town Pull.
          </p>
        </div>

        {/* 2-Column Split: Details and Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Address, Navigation & Landmarks */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Clinic Address
              </h3>
              <p className="text-sm font-semibold text-teal-900 mb-1">
                {clinicData.address.houseNumber}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {clinicData.address.landmark}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {clinicData.address.city}, Punjab, Pakistan
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col gap-3">
                <a
                  href={clinicData.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call Clinic ({clinicData.phone})</span>
                </a>
              </div>
            </div>

            {/* Landmark Directions Guide */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Compass className="w-4 h-4 text-teal-600" />
                <span>Landmark Navigation Tips</span>
              </div>

              <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-slate-800">Primary Landmark:</strong> Located directly opposite the Canal Pull / Green Town Pull (canal bridge).
                </p>
                <p>
                  <strong className="text-slate-800">Assistance:</strong> If you are traveling from outside the central town or need live directions, please call us or message via WhatsApp before arriving.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppAppointmentUrl({ message: 'Hello, could you please guide me to Azka Dental Care from my current location in Pakpattan?' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Request WhatsApp Direction Assistance</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            
            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              
              {/* Verification status ribbon */}
              <div className="bg-slate-900 text-slate-200 text-xs px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span className="font-medium text-white">Canal Pull / Green Town Pull Sector</span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Pakpattan, Punjab
                </span>
              </div>

              {/* Embedded Map */}
              <div className="h-80 sm:h-96 w-full relative">
                <iframe
                  title="Azka Dental Care Location Map"
                  src={osmEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  aria-label="Map showing vicinity of Canal Pull and Green Town Pull in Pakpattan"
                ></iframe>
              </div>

              {/* Map Footer Information */}
              <div className="p-3.5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                  <span>Exact GPS coordinates subject to final clinic verification</span>
                </span>

                <a
                  href={clinicData.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 font-medium inline-flex items-center gap-1"
                >
                  <span>Open Full Satellite View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal px-1">
              * The map above highlights the Canal Pull and Green Town Pull corridor in Pakpattan. Once the clinic owner completes final verification, direct indoor pin routing will be enabled.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
