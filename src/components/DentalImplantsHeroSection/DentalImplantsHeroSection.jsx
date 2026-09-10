import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero1.jpeg'
import './DentalImplantsHeroSection.css'

function DentalImplantsHeroSection() {
  return (
    <section className="dental-implants-hero" aria-labelledby="dental-implants-hero-title">
      <div className="dental-implants-hero__content">
        <h1 className="dental-implants-hero__title" id="dental-implants-hero-title">
          Dental implants that feel secure and help you feel like yourself again.
        </h1>

        <p className="dental-implants-hero__description">
          Comfort that feels natural. Confidence that shows.
          <br />
          Care that's personal, right here in Bakersfield.
        </p>

        <div className="dental-implants-hero__actions">
          <Link
            className="dental-implants-hero__primary-cta"
            to="/contact/schedule-consultation"
          >
            BOOK FREE CONSULTATION
          </Link>
          <Link
            className="dental-implants-hero__secondary-cta"
            to="/patient-resources/pricing-financing"
          >
            VIEW FINANCING AND PRICING
          </Link>
        </div>
      </div>

      <div className="dental-implants-hero__media">
        <img
          className="dental-implants-hero__image"
          src={heroImage}
          alt="A smiling man in a gray suit standing inside a modern office"
        />
      </div>
    </section>
  )
}

export default DentalImplantsHeroSection