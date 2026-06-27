/**
 * Single source of truth for site content.
 * NOTE: contact details below are sourced from the public listing for
 * Amruta Maternity & General Hospital, Dange Chowk, Tathawade, Pune.
 * Replace any value here to update it everywhere on the site.
 */

export const site = {
  name: "Amruta Maternity Hospital",
  shortName: "Amruta",
  tagline: "Caring hands for every new beginning",
  description:
    "A warm, modern maternity & women's health hospital in Tathawade, Pune — compassionate care for pregnancy, childbirth, gynaecology and your newborn, every step of the way.",
  established: 2009,

  contact: {
    phone: "+91 96995 68700",
    phoneHref: "tel:+919699568700",
    emergency: "+91 96995 68700",
    email: "care@amrutamaternity.com",
    whatsapp: "+91 96995 68700",
    address: {
      line1: "Plot 44, Survey 51/2/3, Dange Chowk",
      line2: "Tathawade, Pimpri-Chinchwad",
      city: "Pune",
      state: "Maharashtra",
      pin: "411033",
    },
    mapQuery: "Amruta Maternity and General Hospital Dange Chowk Tathawade Pune",
    hours: [
      { day: "Monday – Sunday", time: "9:00 AM – 10:00 PM" },
      { day: "Emergency & Labour", time: "Open 24 × 7" },
    ],
  },

  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Journey", href: "#journey" },
    { label: "Doctors", href: "#doctors" },
    { label: "Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    { value: 15, suffix: "+", label: "Years of care" },
    { value: 12000, suffix: "+", label: "Safe deliveries" },
    { value: 30000, suffix: "+", label: "Families cared for" },
    { value: 98, suffix: "%", label: "Would recommend us" },
  ],

  services: [
    {
      icon: "pregnancy",
      title: "Pregnancy & Antenatal Care",
      text: "Regular check-ups, scans and nutrition guidance that keep you and your baby healthy through every trimester.",
    },
    {
      icon: "delivery",
      title: "Safe Delivery & Birthing",
      text: "Normal and C-section deliveries in a calm, fully-equipped labour suite with round-the-clock specialist support.",
    },
    {
      icon: "newborn",
      title: "Newborn & NICU Care",
      text: "Gentle newborn care, vaccinations and a Level-II neonatal unit for babies who need a little extra help.",
    },
    {
      icon: "gynaec",
      title: "Gynaecology",
      text: "Complete women's health — routine exams, infections, menstrual and menopause care, with privacy and dignity.",
    },
    {
      icon: "laparoscopy",
      title: "Laparoscopic Surgery",
      text: "Minimally-invasive gynaec surgery for faster healing, less pain and smaller scars.",
    },
    {
      icon: "fertility",
      title: "PCOD / PCOS & Fertility",
      text: "Personalised treatment for PCOD/PCOS, hormonal balance and gentle guidance on your path to parenthood.",
    },
  ],

  journey: [
    {
      step: "01",
      title: "Planning & Pre-pregnancy",
      text: "Pre-conception counselling, health checks and fertility support so you start your journey with confidence.",
    },
    {
      step: "02",
      title: "Pregnancy & Antenatal",
      text: "Trimester check-ups, ultrasound scans, nutrition and wellness so every week is monitored with care.",
    },
    {
      step: "03",
      title: "Delivery & Birth",
      text: "A safe, supported birth experience — normal or C-section — led by experienced obstetricians, 24×7.",
    },
    {
      step: "04",
      title: "Postnatal & Newborn",
      text: "Recovery support, lactation guidance, newborn screening and vaccinations for a healthy start together.",
    },
  ],

  whyUs: [
    {
      icon: "shield",
      title: "Experienced specialists",
      text: "Senior obstetricians, gynaecologists and paediatricians under one trusted roof.",
    },
    {
      icon: "clock",
      title: "24×7 emergency & labour",
      text: "Round-the-clock doctors, nursing and ambulance support whenever you need us.",
    },
    {
      icon: "heart",
      title: "Personal, compassionate care",
      text: "Unhurried consultations where your questions and comfort always come first.",
    },
    {
      icon: "equipment",
      title: "Modern, safe facilities",
      text: "Sterile labour suites, advanced monitoring, ultrasound and a Level-II NICU.",
    },
  ],

  doctors: [
    {
      name: "Dr. Vijay Kumar S. Mete",
      role: "Consultant Obstetrician & Gynaecologist",
      detail: "MBBS, DGO — Founder & Chief Surgeon",
      image: "/images/doctor-1.jpg",
    },
    {
      name: "Dr. Priya Deshmukh",
      role: "Gynaecologist & Fertility Specialist",
      detail: "MBBS, MS (OBGY) — PCOS & Infertility",
      image: "/images/doctor-2.jpg",
    },
    {
      name: "Dr. Aniket Kulkarni",
      role: "Consultant Paediatrician & Neonatologist",
      detail: "MBBS, MD (Paediatrics) — NICU Lead",
      image: "/images/doctor-3.jpg",
    },
    {
      name: "Dr. Sneha Patil",
      role: "Obstetrician & Laparoscopic Surgeon",
      detail: "MBBS, DNB (OBGY) — Minimal Access Surgery",
      image: "/images/doctor-4.jpg",
    },
  ],

  testimonials: [
    {
      quote:
        "From my first scan to delivery, the team made me feel safe and cared for. My C-section was smooth and the nurses were so gentle with my baby.",
      name: "Sneha Joshi",
      detail: "New mother · Tathawade",
    },
    {
      quote:
        "After years of PCOS struggles, Dr. Mete's team guided us with so much patience. We are now parents to a healthy baby girl. Forever grateful.",
      name: "Pooja & Rahul Shinde",
      detail: "Wakad",
    },
    {
      quote:
        "Clean, calm and genuinely caring. They explained every step of my pregnancy clearly and never rushed me. Highly recommend to every expecting mom.",
      name: "Aarti Kale",
      detail: "Punawale",
    },
  ],

  faq: [
    {
      q: "How do I book an appointment?",
      a: "You can call or WhatsApp us on +91 96995 68700, or use the appointment form on this page. We'll confirm a convenient time and share what to bring for your first visit.",
    },
    {
      q: "Do you offer 24×7 emergency and delivery services?",
      a: "Yes. Our labour and emergency services are open 24 hours, every day of the year, with on-call obstetricians, paediatric support and ambulance assistance.",
    },
    {
      q: "What should I bring for my first antenatal visit?",
      a: "Please bring any previous scans, test reports and a list of current medications. If it's your first pregnancy visit, we'll plan your full antenatal schedule together.",
    },
    {
      q: "Do you handle high-risk and complicated pregnancies?",
      a: "Absolutely. Our specialists manage high-risk and complicated pregnancies with close monitoring, and our Level-II NICU supports newborns who need extra care.",
    },
    {
      q: "Is insurance / cashless treatment accepted?",
      a: "We accept most major insurance and cashless TPAs. Call us with your policy details and our front desk will help you understand your coverage before admission.",
    },
  ],
};

export type Site = typeof site;
