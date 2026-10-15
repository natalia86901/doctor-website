import { Link } from 'react-router-dom'
import heroImage from '../../assets/dentalImplants/client-oct14/hero.png'
import './DentalImplantsHeroSection.css'

function DentalImplantsHeroSection() {
  return (
    <section className="dental-implants-hero" aria-labelledby="dental-implants-hero-title">
      <div className="dental-implants-hero__content">
        <h1 className="dental-implants-hero__title" id="dental-implants-hero-title">
          Dental Implants That Feel Secure and Help You Feel Like Yourself Again
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
          alt="Dr. Tarkesh smiling in a navy blazer inside the dental office"
        />
      </div>
    </section>
  )
}

export default DentalImplantsHeroSection
