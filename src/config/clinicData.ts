/**
 * Azka Dental Care - Clinic Configuration & Content Object
 * Centralized, easy-to-edit business configuration.
 * All details can be updated here without touching UI code.
 */

export interface DentalService {
  id: string;
  title: string;
  category: 'Preventive Care' | 'Restorative' | 'Endodontics' | 'Oral Surgery' | 'Orthodontics' | 'Cosmetic';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  isAvailable: boolean;
  availabilityNote: string;
}

export interface ClinicHoursItem {
  days: string;
  hours: string;
  note: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Appointments' | 'Treatments' | 'Hygiene' | 'General';
}

export const clinicData = {
  name: 'Azka Dental Care',
  logo: '/assets/aistudio/Azka_Dental_Care_Gold_Emblem_87bb3877.png',
  tagline: 'Modern, Patient-Centered Dental Health in Pakpattan',
  shortAbout: 'A dedicated dental clinic in Pakpattan, Pakistan committed to ethical oral healthcare, rigorous instrument sterilization, and comfortable patient consultations.',
  
  // Contact & Phone
  phone: '+92 320 8735364',
  phoneRaw: '+923208735364',
  whatsappNumber: '923208735364', // Numeric international format for wa.me links
  email: 'info@azkadentalcare.pk', // Editable placeholder contact email
  
  // Address & Location
  address: {
    houseNumber: 'House No. 190/S',
    landmark: 'Opposite Canal Pull / Green Town Pull',
    city: 'Pakpattan',
    province: 'Punjab',
    country: 'Pakistan',
    postalNote: 'Pakpattan Sharif, Punjab, Pakistan',
    fullAddress: 'House No. 190/S, opposite Canal Pull / Green Town Pull, Pakpattan, Pakistan',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Green+Town+Pull+Canal+Pull+Pakpattan+Pakistan',
    // Latitude and longitude anchor near Green Town Canal Pull Pakpattan
    lat: 30.3411,
    lng: 73.3855,
    locationVerified: false, // Flag for owner verification
  },

  // Social Links (Editable)
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },

  // Schedule Notice (Explicitly noted as tentative until confirmed by owner)
  scheduleNotice: 'Tentative Schedule — Actual operating hours are subject to clinic confirmation. Please message or call prior to your visit.',
  openingHours: [
    {
      days: 'Monday – Thursday',
      hours: '4:00 PM – 9:00 PM',
      note: 'Evening clinical sessions (Subject to confirmation)',
    },
    {
      days: 'Friday',
      hours: '5:00 PM – 9:00 PM',
      note: 'Post-Jummah clinical consultations',
    },
    {
      days: 'Saturday',
      hours: '4:00 PM – 9:00 PM',
      note: 'General & orthodontic checkups',
    },
    {
      days: 'Sunday',
      hours: 'Consultation by Prior Appointment',
      note: 'Please confirm in advance via WhatsApp',
    },
  ] as ClinicHoursItem[],

  // Dental Services
  // Mark all services and availability as subject to clinic confirmation
  services: [
    {
      id: 'general-checkup',
      title: 'General Checkup & Consultation',
      category: 'Preventive Care',
      shortDesc: 'Routine diagnostic oral examination, dental charting, and personalized preventative care guidance.',
      fullDesc: 'Comprehensive visual and clinical assessment of teeth, gums, and oral soft tissues to identify incipient decay, gum inflammation, and bite harmony before symptoms worsen.',
      features: [
        'Complete mouth visual examination',
        'Gum health & periodontal assessment',
        'Personalized treatment recommendations',
        'Preventative oral hygiene advice',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
    {
      id: 'teeth-cleaning',
      title: 'Teeth Cleaning & Scaling',
      category: 'Preventive Care',
      shortDesc: 'Ultrasonic plaque and tartar removal to support healthy gums and fresh breath.',
      fullDesc: 'Professional scaling to remove hardened calculus deposits and biofilm from above and below the gumline that daily home brushing cannot reach.',
      features: [
        'Ultrasonic scaling technology',
        'Surface plaque and tartar removal',
        'Gentle polish for a smooth enamel finish',
        'Gum health maintenance guidance',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
    {
      id: 'dental-fillings',
      title: 'Dental Fillings & Restorations',
      category: 'Restorative',
      shortDesc: 'Natural tooth-colored composite fillings to repair cavities, chipped teeth, and localized decay.',
      fullDesc: 'Tooth-colored composite resin restorations bonded precisely to your natural enamel structure to restore strength, function, and aesthetics without visible metal.',
      features: [
        'Shade-matched composite resin',
        'Careful decay debridement',
        'Anatomical tooth contouring',
        'Bite check and smooth polishing',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
    {
      id: 'root-canal',
      title: 'Root Canal Treatment (RCT)',
      category: 'Endodontics',
      shortDesc: 'Conservative treatment to relieve acute dental pain and preserve damaged or infected teeth.',
      fullDesc: 'Careful removal of infected dental pulp, thorough disinfection of the root canal system, and biocompatible sealing to save natural teeth from extraction.',
      features: [
        'Relief from acute toothache and pressure',
        'Careful canal instrumentation and disinfection',
        'Biocompatible sealing material',
        'Structural assessment for protective crown',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
    {
      id: 'tooth-extraction',
      title: 'Tooth Extraction & Minor Surgery',
      category: 'Oral Surgery',
      shortDesc: 'Safe, atraumatic removal of non-restorable, severely broken, or painful teeth.',
      fullDesc: 'Gentle tooth extraction performed under local anesthesia with careful socket management and comprehensive post-operative instructions for clean healing.',
      features: [
        'Local anesthesia for patient comfort',
        'Conservative, atraumatic extraction technique',
        'Hemostasis and socket care',
        'Detailed aftercare and recovery instructions',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
    {
      id: 'braces-orthodontics',
      title: 'Braces & Orthodontic Assessment',
      category: 'Orthodontics',
      shortDesc: 'Alignment evaluation for crooked teeth, crowding, spacing, and bite irregularities.',
      fullDesc: 'Orthodontic consultations to assess dental alignment and plan gentle corrective movement for improved masticatory function and smile aesthetics.',
      features: [
        'Bite and dental alignment consultation',
        'Evaluation of crowding or spacing issues',
        'Treatment phase progression planning',
        'Retention and maintenance guidance',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      category: 'Cosmetic',
      shortDesc: 'Aesthetic smile enhancements including professional enamel brightening and composite edge contouring.',
      fullDesc: 'Custom aesthetic solutions designed to harmonize your smile, brighten dull teeth, and correct minor surface irregularities in a safe clinical environment.',
      features: [
        'Aesthetic shade and symmetry assessment',
        'Enamel-safe clinical teeth brightening',
        'Cosmetic edge bonding and contouring',
        'Natural-looking aesthetic results',
      ],
      isAvailable: true,
      availabilityNote: 'Subject to clinical confirmation upon appointment review',
    },
  ] as DentalService[],

  // Frequently Asked Questions
  faqs: [
    {
      category: 'Appointments',
      question: 'How do I book an appointment at Azka Dental Care?',
      answer: 'You can submit your appointment request through our online booking inquiry form, which prepares a direct WhatsApp message to our clinic phone number (+92 320 8735364). Our clinic team will review the requested date and time and confirm availability directly with you.',
    },
    {
      category: 'Appointments',
      question: 'Is my appointment confirmed immediately after sending the form?',
      answer: 'No. To ensure high-quality patient care and prevent double-booking, all appointments are strictly tentative until reviewed and confirmed by our clinic staff via WhatsApp or telephone.',
    },
    {
      category: 'Hygiene',
      question: 'What hygiene and sterilization protocols are followed?',
      answer: 'Patient safety is our priority. We adhere to medical-grade sterilization procedures, using autoclaved instruments, disposable single-use consumables (such as cups, gloves, and suction tips), and thorough surface disinfection between every patient visit.',
    },
    {
      category: 'Treatments',
      question: 'Will my dental procedure be painful?',
      answer: 'Modern dental techniques and effective local anesthetics make most procedures, including fillings, root canals, and extractions, virtually pain-free during treatment. If you experience dental anxiety, please let us know so we can adjust our pace and ensure your comfort.',
    },
    {
      category: 'General',
      question: 'Where is the clinic located in Pakpattan?',
      answer: 'Azka Dental Care is located at House No. 190/S, opposite Canal Pull / Green Town Pull in Pakpattan, Punjab, Pakistan. It is easily accessible from the main Canal road and Green Town area.',
    },
    {
      category: 'General',
      question: 'Do you accept emergency walk-in patients?',
      answer: 'We accommodate dental emergencies whenever possible during clinic hours. For urgent pain or swelling, we strongly recommend sending a quick message on WhatsApp (+92 320 8735364) before traveling so we can prepare for your arrival.',
    },
  ] as FaqItem[],

  // Important Medical & Legal Disclaimers
  disclaimers: {
    confirmationNotice: 'All appointments and treatment schedules are strictly subject to direct clinical confirmation by clinic staff. Online inquiry does not establish an immediate doctor-patient relationship.',
    pricingNotice: 'Treatment requirements and fees vary based on clinical diagnosis during an in-person examination. Please inquire directly at the clinic for specific treatment plans.',
    privacyNotice: 'Your contact information is used strictly to coordinate your dental consultation and is treated with professional confidentiality.',
  },

  // Imagery Assets
  images: {
    logo: '/assets/aistudio/Azka_Dental_Care_Gold_Emblem_87bb3877.png',
    hero: '/src/assets/images/hero_dental_clinic_1792840864957.jpg',
    instruments: '/src/assets/images/dental_instruments_tray_1792840866458.jpg',
    consultation: '/src/assets/images/dental_consultation_operatory_1792840866845.jpg',
    reception: '/src/assets/images/dental_reception_desk_1792840866558.jpg',
  },
};

/**
 * Helper to build prefilled WhatsApp appointment URL
 */
export function buildWhatsAppAppointmentUrl(details: {
  patientName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}): string {
  const number = clinicData.whatsappNumber;
  let text = `Hello Azka Dental Care Pakpattan,\nI would like to inquire about a dental appointment.\n`;
  
  if (details.patientName) {
    text += `\n*Patient Name:* ${details.patientName.trim()}`;
  }
  if (details.phone) {
    text += `\n*Contact Phone:* ${details.phone.trim()}`;
  }
  if (details.service) {
    text += `\n*Requested Service:* ${details.service}`;
  }
  if (details.preferredDate) {
    text += `\n*Preferred Date:* ${details.preferredDate}`;
  }
  if (details.preferredTime) {
    text += `\n*Preferred Time:* ${details.preferredTime}`;
  }
  if (details.message && details.message.trim()) {
    text += `\n*Notes/Symptoms:* ${details.message.trim()}`;
  }
  
  text += `\n\n(Note: I understand this appointment is subject to clinic availability and confirmation.)`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
