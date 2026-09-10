export const navItems = [
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Dentures', path: '/services/dentures' },
      { label: 'Implants', path: '/services/implants' },
      { label: 'Complex cases', path: '/services/complex-cases' },
      { label: 'Iv sedation', path: '/services/iv-sedation' },
    ],
  },
  {
    label: 'Smile gallery',
    path: '/smile-gallery',
    children: [
      { label: 'View patient results', path: '/smile-gallery/patient-results' },
    ],
  },
  {
    label: 'Why Dr. Tarkesh',
    path: '/why-dr-tarkesh',
    children: [
      { label: 'Meet Dr. Tarkesh', path: '/why-dr-tarkesh/meet-dr-tarkesh' },
      { label: 'Our approach', path: '/why-dr-tarkesh/our-approach' },
    ],
  },
  {
    label: 'Patient Resources',
    path: '/patient-resources',
    children: [
      { label: 'Pricing & Financing', path: '/patient-resources/pricing-financing' },
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
    children: [
      { label: 'Call Our Office', href: 'tel:6611234567' },
      { label: 'Location & Directions', path: '/contact/location-directions' },
    ],
  },
]

export const internalRoutes = navItems.flatMap(({ label, path, children = [] }) => [
  { label, path },
  ...children.filter((child) => child.path),
])
