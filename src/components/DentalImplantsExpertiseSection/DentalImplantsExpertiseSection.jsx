import VideoButton from '../VideoButton/VideoButton'
import videoSource from '../../assets/dentalImplants/client-oct14/swiss-tarkesh.mp4'
import expertiseDoctor from '../../assets/dentalImplants/client-oct14/doctor-patient.png'
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
          alt="Dr. Tarkesh explaining implant-supported teeth to a patient beside a dental display"
        />


      </div>

      <div className="dental-implants-expertise__content">
        <p className="dental-implants-expertise__eyebrow">
          The biggest complaint
          <br />
          we hear from our patients:
        </p>

        <h2
          id="dental-implants-expertise-heading"
          className="dental-implants-expertise__title"
        >
          <span className="dental-implants-expertise__quotation-mark">“</span>Why Didn’t I
          <br />
          Do This Sooner?<span className="dental-implants-expertise__quotation-mark">”</span>
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

        <VideoButton
          className="dental-implants-expertise__cta"
          src={videoSource}
          title="Dental implant options with Dr. Tarkesh"
        >
          SEE WHAT’S POSSIBLE
        </VideoButton>
      </div>
    </section>
  )
}

export default DentalImplantsExpertiseSection
