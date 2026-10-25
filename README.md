# Azka Dental Care — Pakpattan, Pakistan

A premium, modern, responsive dental clinic website built for **Azka Dental Care**, located in Pakpattan, Pakistan.

---

## 🌟 Features

1. **Modern Healthcare Design**:
   - Clean white canvas with refined teal (`#0f766e` / `#0d9488`) and deep slate/navy accents.
   - High-fidelity clinical imagery showcasing sterilized treatment operatories, stainless steel trays, and consultation suites.
   - Zero-pill metadata design, clean typography using Plus Jakarta Sans, and balanced headline scaling.

2. **Centralized Configuration (`src/config/clinicData.ts`)**:
   - All clinic information—including clinic name, phone, WhatsApp number, exact street address, opening hours, services, FAQs, and social media handles—is stored in one clean, typed configuration file.

3. **Dental Services Showcase**:
   - General Checkup & Consultation
   - Teeth Cleaning & Ultrasonic Scaling
   - Dental Fillings & Restorations
   - Root Canal Treatment (RCT)
   - Tooth Extraction & Minor Surgery
   - Braces & Orthodontics
   - Cosmetic Dentistry
   - Explicit clinical notice: *All services and availability are strictly subject to clinic confirmation*.

4. **Appointment Booking Inquiry**:
   - Patient Name, Phone Number, Requested Service, Preferred Date & Time Slot, and Optional Symptoms/Notes.
   - Client-side validation with helpful error states.
   - Front-end transparency notice: Explains clearly that submissions are formatted into a direct WhatsApp message to clinic staff (+92 320 8735364), rather than pretending an unconfigured database stored the booking.

5. **WhatsApp Integration**:
   - Connected directly to clinic phone number: `+923208735364` (`923208735364`).
   - Generates formatted, prefilled messages including patient name, requested service, preferred date, and symptoms.
   - Persistent, accessible floating WhatsApp button for swift patient inquiries.

6. **Location & Accessibility**:
   - Exact Address: `House No. 190/S, opposite Canal Pull / Green Town Pull, Pakpattan, Pakistan`.
   - Embedded interactive location map with direct 1-click Google Maps navigation.
   - Landmark navigation tips for patients traveling from within or outside Pakpattan.

7. **Provisional Operating Schedule**:
   - Clearly marked tentative hours until the clinic owner confirms the permanent timetable.
   - Emergency and walk-in consultation instructions.

---

## 🛠️ How to Edit Clinic Content

To update any text, schedule, contact numbers, or service descriptions, edit **`src/config/clinicData.ts`**:

```typescript
export const clinicData = {
  name: 'Azka Dental Care',
  phone: '+92 320 8735364',
  whatsappNumber: '923208735364', // Number in international format without '+'
  
  address: {
    houseNumber: 'House No. 190/S',
    landmark: 'Opposite Canal Pull / Green Town Pull',
    city: 'Pakpattan',
    province: 'Punjab',
    country: 'Pakistan',
    fullAddress: 'House No. 190/S, opposite Canal Pull / Green Town Pull, Pakpattan, Pakistan',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Green+Town+Pull+Canal+Pull+Pakpattan+Pakistan',
    lat: 30.3411,
    lng: 73.3855,
  },

  socialLinks: {
    facebook: 'https://facebook.com/azkadentalcare',
    instagram: 'https://instagram.com/azkadentalcare',
  },

  openingHours: [
    // Update daily hours here
  ],

  services: [
    // Add, remove, or modify dental treatments
  ],
};
```

---

## 🧪 Local Testing & Development

### 1. Run Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 2. Verify Production Build
```bash
npm run build
```
This runs TypeScript checking and bundles optimized production assets into `dist/`.

### 3. Testing Key Patient Flows:
- **Test Booking Form**: Fill in sample patient details, click **"Prepare WhatsApp Booking"**, and inspect the formatted inquiry summary and WhatsApp launch button.
- **Test WhatsApp Quick Buttons**: Click any WhatsApp link in the header, service cards, or floating button to verify the prefilled text loads `https://wa.me/923208735364`.
- **Test Map Directions**: Click **"Get Directions on Google Maps"** to confirm navigation opens directly to the Pakpattan Canal Pull / Green Town Pull area.

---

## 🌐 Custom Domain & Deployment

### Connecting a Real Domain (e.g., `azkadentalcare.pk` or `azkadental.com`)
1. **Register Domain**: Purchase your domain through a registrar (such as PKNIC for `.pk` domains, Namecheap, or Google Domains/Squarespace).
2. **Add DNS Records**:
   - For root domain: Add an `A` record pointing to your hosting provider's IP address.
   - For `www` subdomain: Add a `CNAME` record pointing to your hosting alias (e.g. `cname.vercel-dns.com` or custom Cloud Run endpoint).
3. **SSL / HTTPS**: All modern platforms (Vercel, Cloud Run, Netlify) automatically issue free Let's Encrypt SSL certificates once DNS propagates.

### Deploying the Application

- **Static Hosting (Vercel / Netlify / Cloudflare Pages)**:
  - Framework Preset: `Vite`
  - Build Command: `npm run build`
  - Output Directory: `dist`

- **Google Cloud Run / Docker**:
  - Build container using Node 20/22.
  - Run `npm run build` and serve static files with NGINX or Express.
