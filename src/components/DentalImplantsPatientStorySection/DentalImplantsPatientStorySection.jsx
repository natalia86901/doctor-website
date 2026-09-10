import { Link } from 'react-router-dom'
import patientStoryPreview from '../../assets/dentalImplants/patientStoryPreview.png'
import './DentalImplantsPatientStorySection.css'

const patientStoryVideoPath = '/why-dr-tarkesh/meet-dr-tarkesh#patient-story-video'

function DentalImplantsPatientStorySection() {
  return (
    <section
      className="dental-implants-patient-story"
      aria-labelledby="dental-implants-patient-story-heading"
    >
      <div className="dental-implants-patient-story__inner">
        <Link
          className="dental-implants-patient-story__preview-link"
          to={patientStoryVideoPath}
          aria-label="Watch the patient story with Dr. Tarkesh"
        >
          <img
            className="dental-implants-patient-story__image"
            src={patientStoryPreview}
            alt="Patient smiling with Dr. Tarkesh in a dental treatment room"
          />
          <span className="dental-implants-patient-story__play" aria-hidden="true">
            <span className="dental-implants-patient-story__play-icon" />
          </span>
        </Link>

        <div className="dental-implants-patient-story__content">
          <p className="dental-implants-patient-story__eyebrow">PATIENT STORY</p>
          <h2
            id="dental-implants-patient-story-heading"
            className="dental-implants-patient-story__title"
          >
            REAL RESULTS.
            <br />
            REAL CONFIDENCE.
          </h2>
          <p className="dental-implants-patient-story__description">
            See how treatment can change not only a smile, but the way a patient
            feels in everyday life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DentalImplantsPatientStorySection
