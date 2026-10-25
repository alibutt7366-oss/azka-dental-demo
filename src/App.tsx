import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { AppointmentForm } from './components/AppointmentForm';
import { ClinicHours } from './components/ClinicHours';
import { MapLocation } from './components/MapLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const scrollToAppointment = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    const formElement = document.getElementById('appointment');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <Navbar onOpenBooking={() => scrollToAppointment()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onBookClick={() => scrollToAppointment()} />

        {/* 2. Services Section */}
        <ServicesSection onSelectService={(title) => scrollToAppointment(title)} />

        {/* 3. About Practice Section */}
        <AboutSection />

        {/* 4. Interactive Appointment Booking Inquiry */}
        <AppointmentForm preselectedService={selectedServiceForBooking} />

        {/* 5. Clinic Hours & Consultation Schedule */}
        <ClinicHours />

        {/* 6. Map & Location in Pakpattan */}
        <MapLocation />

        {/* 7. Patient FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
