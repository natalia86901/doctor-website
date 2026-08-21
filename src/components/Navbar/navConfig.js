export const navItems = [
  {
    label: 'Dentures & Implants',
    path: '/dentures-and-implants',
    children: [
      { label: 'Full & Partial Dentures', path: '/dentures-and-implants/full-partial-dentures' },
      { label: 'Dental Implants', path: '/dentures-and-implants/dental-implants' },
      { label: 'Full-Mouth Implants', path: '/dentures-and-implants/full-mouth-implants' },
      { label: 'Implant-Supported Dentures', path: '/dentures-and-implants/implant-supported-dentures' },
      { label: 'Extractions & Other Services', path: '/dentures-and-implants/extractions' },
    ],
  },
  {
    label: 'Patient Results',
    path: '/patient-results',
    children: [
      { label: 'Before & After', path: '/patient-results/before-after' },
      { label: 'Patient Stories', path: '/patient-results/patient-stories' },
      { label: 'Video Testimonials', path: '/patient-results/video-testimonials' },
      { label: 'Complex Cases', path: '/patient-results/complex-cases' },
    ],
  },
  {
    label: 'Why Dr. Tarkesh',
    path: '/why-dr-tarkesh',
    children: [
      { label: 'Meet Dr. Tarkesh', path: '/why-dr-tarkesh/meet-dr-tarkesh' },
      { label: 'Our Approach', path: '/why-dr-tarkesh/our-approach' },
      { label: 'Advanced Implant Technology', path: '/why-dr-tarkesh/advanced-implant-technology' },
      { label: 'Complex Cases Welcome', path: '/why-dr-tarkesh/complex-cases-welcome' },
      { label: 'Why Patients Choose Us', path: '/why-dr-tarkesh/why-patients-choose-us' },
    ],
  },
  {
    label: 'Patient Resources',
    path: '/patient-resources',
    children: [
      { label: 'Pricing & Financing', path: '/patient-resources/pricing-financing' },
      { label: 'Insurance Information', path: '/patient-resources/insurance' },
      { label: 'New Patient Forms', path: '/patient-resources/new-patient-forms' },
      { label: 'Frequently Asked Questions', path: '/patient-resources/faq' },
      { label: 'Aftercare Instructions', path: '/patient-resources/aftercare' },
      { label: 'Educational Resources', path: '/patient-resources/education' },
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
    children: [
      { label: 'Schedule a Consultation', path: '/contact/schedule-consultation' },
      { label: 'Call Our Office', href: 'tel:6611234567' },
      { label: 'Location & Directions', path: '/contact/location-directions' },
      { label: 'Office Hours', path: '/contact/office-hours' },
    ],
  },
]

export const internalRoutes = navItems.flatMap(({ label, path, children = [] }) => [
  { label, path },
  ...children.filter((child) => child.path),
])
