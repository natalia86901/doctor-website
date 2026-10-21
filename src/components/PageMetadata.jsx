import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://bdidental.com'
const siteName = 'Bakersfield Dentures & Implants'
const pages = {
  "/": [
    "Dental Implants & Dentures in Bakersfield | Bakersfield Dentures & Implants",
    "Explore dental implants, same-day dentures and personalized care with Dr. Tarkesh in Bakersfield. Schedule a consultation with Bakersfield Dentures & Implants."
  ],
  "/services/implants": [
    "Dental Implants in Bakersfield | Bakersfield Dentures & Implants",
    "Explore fixed full-arch and implant-supported tooth replacement with Dr. Tarkesh in Bakersfield. Learn about your options and request a consultation."
  ],
  "/services/dentures": [
    "Same-Day Dentures in Bakersfield | Bakersfield Dentures & Implants",
    "Discover traditional and implant-supported denture options in Bakersfield, with an in-house lab and personalized care. Schedule your consultation."
  ],
  "/services/complex-cases": [
    "Complex Dental Cases & Second Opinions | Bakersfield Dentures & Implants",
    "Explore treatment planning for complex dental implant cases and second opinions with Dr. Tarkesh in Bakersfield."
  ],
  "/services/iv-sedation": [
    "Oral & IV Sedation in Bakersfield | Bakersfield Dentures & Implants",
    "Learn about oral and IV sedation options for dental treatment with Dr. Tarkesh in Bakersfield. Contact our team to discuss your care."
  ],
  "/patient-resources/pricing-financing": [
    "Dental Pricing & Financing | Bakersfield Dentures & Implants",
    "Explore dental treatment pricing, payment and financing information from Bakersfield Dentures & Implants. Contact our team with questions."
  ],
  "/why-dr-tarkesh/meet-dr-tarkesh": [
    "Meet Dr. Tarkesh | Bakersfield Dentures & Implants",
    "Meet Dr. Tarkesh and learn about his approach to dental implants, full-arch treatment and personalized patient care in Bakersfield."
  ],
  "/smile-gallery/patient-results": [
    "Smile Gallery: Before & After Results | Bakersfield Dentures & Implants",
    "Explore patient before-and-after dental treatment photographs from Bakersfield Dentures & Implants. See smile transformations and learn about your options."
  ],
  "/contact/schedule-consultation": [
    "Request a Dental Appointment | Bakersfield Dentures & Implants",
    "Request an appointment with Bakersfield Dentures & Implants. Tell us about your needs and our team will contact you to confirm your visit."
  ],
  "/contact/location-directions": [
    "Location & Directions | Bakersfield Dentures & Implants",
    "Find Bakersfield Dentures & Implants at 3726 Coffee Road, Bakersfield, CA 93312. Get directions or call (661) 231-6323 to contact our office."
  ]
}
const aliases = { '/smile-gallery': '/smile-gallery/patient-results', '/dentures': '/services/dentures' }

export default function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const cleanPath = pathname.replace(/\/+$/, '') || '/'
    const path = aliases[cleanPath] || cleanPath
    const page = pages[path]
    const [title, description] = page || [siteName, 'Contact Bakersfield Dentures & Implants for information about personalized dental care in Bakersfield.']
    document.title = title
    function meta(attribute, name, content) {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.content = content
    }
    meta('name', 'description', description)
    meta('name', 'robots', page ? 'index, follow' : 'noindex, follow')
    meta('property', 'og:title', title)
    meta('property', 'og:description', description)
    meta('property', 'og:url', `${siteUrl}${path}`)
    meta('name', 'twitter:title', title)
    meta('name', 'twitter:description', description)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${siteUrl}${path}`
  }, [pathname])
  return null
}
