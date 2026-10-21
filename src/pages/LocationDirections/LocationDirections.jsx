import { Link } from 'react-router-dom'
import './LocationDirections.css'

const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=3726+Coffee+Road%2C+Bakersfield%2C+CA+93312'

function LocationIcon({ phone = false }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {phone ? <path d="m9 5 5 6-3 4c2 4 4 6 8 8l4-3 5 4c-1 4-3 5-6 4C12 25 6 19 4 10 3 7 5 5 9 5Z" /> : <><path d="M26 13c0 8-10 16-10 16S6 21 6 13a10 10 0 1 1 20 0Z" /><circle cx="16" cy="13" r="3.5" /></>}
  </svg>
}

export default function LocationDirections() {
  return <main className="location-page">
    <section className="location-page__layout" aria-labelledby="location-title">
      <div className="location-page__copy">
        <p className="location-page__eyebrow">Contact Our Office</p>
        <h1 id="location-title">Let’s Talk About<br />Your Smile</h1>
        <p className="location-page__description">Whether you’re exploring dental implants, considering new dentures, or simply have questions, we’re here to help. Our team is ready to listen, answer your questions, and guide you toward the best solution for your smile.</p>
        <Link className="location-page__cta" to="/contact/schedule-consultation">Schedule Your Free Consultation <span aria-hidden="true">→</span></Link>
        <a className="location-page__phone" href="tel:6612316323"><span className="location-page__phone-icon"><LocationIcon phone /></span><span>(661) 231-6323</span></a>
      </div>
      <div className="location-page__location">
        <iframe
          className="location-page__map"
          title="Google Maps — Bakersfield Dentures & Implants, 3726 Coffee Road"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d52031.30455837773!2d-119.0891181!3d35.4063279!3m2!1i1024!2i768!4f13.1!2m1!1s3726%20Coffee%20Rd%20Bakersfield%20CA%2093308%20tarkesh!5e0!3m2!1sen!2sus!4v1792620016611!5m2!1sen!2sus"
          width="600" height="450" allowFullScreen loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="location-page__address-card">
          <span className="location-page__address-icon"><LocationIcon /></span>
          <div><p className="location-page__eyebrow">Our Location</p><address>3726 Coffee Road<br />Bakersfield, CA 93312</address></div>
          <a className="location-page__directions" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions <span aria-hidden="true">→</span><span className="location-page__sr-only"> (opens Google Maps in a new tab)</span></a>
        </div>
      </div>
    </section>
    <div className="location-page__signature"><span>Expert Care <b aria-hidden="true">·</b> Personal Attention <b aria-hidden="true">·</b> A Brighter Tomorrow</span></div>
  </main>
}
