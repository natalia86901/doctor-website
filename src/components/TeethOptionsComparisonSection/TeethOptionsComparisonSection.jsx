import { Link } from 'react-router-dom'
import implantsStabilizedRemovable from '../../assets/dentalImplants/teethOptionsComparison/implantsStabilizedRemovable.png'
import fixedFullArch from '../../assets/dentalImplants/teethOptionsComparison/fixedFullArch.png'
import './TeethOptionsComparisonSection.css'

const removableFeatures = [
  'SECURE',
  'IMPROVED COMFORT',
  'REMOVABLE',
  'PERSONALIZED',
  'A MAJOR UPGRADE FROM DENTURES',
]

const fixedFeatures = [
  'MAXIMUM STABILITY',
  'CLOSEST TO NATURAL TEETH',
  'FIXED',
  'FULLY CUSTOMIZED',
  'DESIGNED TO FEEL LIKE YOUR OWN SMILE',
]

function OptionCard({
  badge,
  title,
  description,
  emphasis,
  features,
  image,
  imageAlt,
  variant,
  linkTo,
  linkLabel,
}) {
  return (
    <article className={`teeth-options-comparison__option teeth-options-comparison__option--${variant}`}>
      <div className="teeth-options-comparison__image-stage">
        <img
          className="teeth-options-comparison__image"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="teeth-options-comparison__card">
        <div className="teeth-options-comparison__card-header">
          <span className="teeth-options-comparison__badge">{badge}</span>
          <h3 className="teeth-options-comparison__option-title">{title}</h3>
          <p className="teeth-options-comparison__description">{description}</p>
          <p className="teeth-options-comparison__emphasis">{emphasis || '\u00a0'}</p>
        </div>
        <ul className="teeth-options-comparison__features">
          {features.map((feature) => (
            <li className="teeth-options-comparison__feature" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
        <Link className="teeth-options-comparison__option-link" to={linkTo}>
          {linkLabel}
        </Link>
      </div>
    </article>
  )
}

function TeethOptionsComparisonSection() {
  return (
    <section
      className="teeth-options-comparison"
      aria-labelledby="teeth-options-comparison-heading"
    >
      <div className="teeth-options-comparison__inner">
        <header className="teeth-options-comparison__header">
          <h2
            id="teeth-options-comparison-heading"
            className="teeth-options-comparison__title"
          >
            CHOOSE HOW YOU WANT YOUR
            <br />
            NEW TEETH TO FEEL
          </h2>
          <p className="teeth-options-comparison__intro">
            Both options are supported by implants. The difference is in
            stability, comfort and how close the experience feels to natural
            teeth.
          </p>
        </header>

        <div className="teeth-options-comparison__options">
          <OptionCard
            badge="IMPLANT-SUPPORTED"
            title={<>IMPLANT-STABILIZED<br />REMOVABLE TEETH</>}
            description="More secure. More comfortable. More confidence than a traditional denture."
            features={removableFeatures}
            image={implantsStabilizedRemovable}
            imageAlt="Implant-stabilized removable upper denture supported by dental implants"
            variant="removable"
            linkTo="/dentures-and-implants/implant-supported-dentures"
            linkLabel="EXPLORE REMOVABLE"
          />
          <OptionCard
            badge="FIXED FULL-ARCH"
            title={<>FIXED FULL-ARCH<br />FIXED TEETH</>}
            description="Designed to feel more stable, more natural and more like your own teeth"
            emphasis="THE CLOSEST EXPERIENCE TO NATURAL TEETH"
            features={fixedFeatures}
            image={fixedFullArch}
            imageAlt="Fixed full-arch upper implant-supported prosthetic teeth"
            variant="fixed"
            linkTo="/dentures-and-implants/dental-implants"
            linkLabel="EXPLORE FIXED TEETH"
          />
        </div>

        <footer className="teeth-options-comparison__footer">
          <p className="teeth-options-comparison__question">
            Not sure which one is right for you?
          </p>
          <Link
            className="teeth-options-comparison__consultation-link"
            to="/contact/schedule-consultation"
          >
            SEE WHAT&apos;S POSSIBLE FOR ME
          </Link>
        </footer>
      </div>
    </section>
  )
}

export default TeethOptionsComparisonSection
