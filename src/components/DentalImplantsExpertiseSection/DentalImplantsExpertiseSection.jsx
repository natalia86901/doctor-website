import { Link } from 'react-router-dom'
import expertiseDoctor from '../../assets/dentalImplants/ExpertiseDoctor.png'
import './DentalImplantsExpertiseSection.css'

function DentalImplantsExpertiseSection() {
  return (
    <section
      className="dental-implants-expertise"
      aria-labelledby="dental-implants-expertise-heading"
    >
      <div className="dental-implants-expertise__media">
        <img
          className="dental-implants-expertise__image"
          src={expertiseDoctor}
          alt="Dentist reviewing a digital full-arch implant treatment plan on a clinical monitor"
        />

        <div className="dental-implants-expertise__callouts">
          <article className="dental-implants-expertise__callout dental-implants-expertise__callout--planning">
            <span
              className="dental-implants-expertise__connector"
              aria-hidden="true"
            />

            <h3 className="dental-implants-expertise__callout-title">
              <span className="dental-implants-expertise__callout-number">
                01 —
              </span>{' '}
              DIGITAL PLANNING
            </h3>

            <p className="dental-implants-expertise__callout-description">
              Every detail considered before
              <br />
              treatment begins
            </p>
          </article>

          <article className="dental-implants-expertise__callout dental-implants-expertise__callout--clinical">
            <span
              className="dental-implants-expertise__connector"
              aria-hidden="true"
            />

            <h3 className="dental-implants-expertise__callout-title">
              <span className="dental-implants-expertise__callout-number">
                02 —
              </span>{' '}
              CLINICAL EXPERTISE
            </h3>

            <p className="dental-implants-expertise__callout-description">
              Advanced decisions guided by
              <br />
              experience
            </p>
          </article>

          <article className="dental-implants-expertise__callout dental-implants-expertise__callout--craftsmanship">
            <span
              className="dental-implants-expertise__connector"
              aria-hidden="true"
            />

            <h3 className="dental-implants-expertise__callout-title">
              <span className="dental-implants-expertise__callout-number">
                03 —
              </span>{' '}
              CUSTOM CRAFTSMANSHIP
            </h3>

            <p className="dental-implants-expertise__callout-description">
              Designed specifically for your
              <br />
              anatomy and smile
            </p>
          </article>
        </div>
      </div>

      <div className="dental-implants-expertise__content">
        <p className="dental-implants-expertise__eyebrow">
          THE BIGGEST COMPLAINT
          <br />
          WE HEAR FROM OUR PATIENTS:
        </p>

        <h2
          id="dental-implants-expertise-heading"
          className="dental-implants-expertise__title"
        >
          WHY DIDN’T I
          <br />
          DO THIS SOONER?
        </h2>

        <div className="dental-implants-expertise__body">
          <p className="dental-implants-expertise__paragraph">
            Advanced treatment is an investment in how you eat, speak, smile
            and live every day—with confidence.
          </p>

          <p className="dental-implants-expertise__paragraph">
            We explain every stage, answer your questions and show you exactly
            what you are investing in before treatment begins.
          </p>
        </div>

        <blockquote className="dental-implants-expertise__quote">
          “It’s not just a dental change.”
        </blockquote>

        <Link
          className="dental-implants-expertise__cta"
          to="/patient-results/before-after"
        >
          SEE WHAT’S POSSIBLE
        </Link>
      </div>
    </section>
  )
}

export default DentalImplantsExpertiseSection