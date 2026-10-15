import promiseDoctorImage from '../../assets/dentalImplants/client-oct14/our-promise.png'
import './DentalImplantsPromiseSection.css'

function DentalImplantsPromiseSection() {
  return (
    <section
      className="dental-implants-promise"
      aria-labelledby="dental-implants-promise-heading"
    >
      <div className="dental-implants-promise__inner">
        <div className="dental-implants-promise__content">
          <p className="dental-implants-promise__eyebrow">OUR PROMISE</p>
          <h2
            id="dental-implants-promise-heading"
            className="dental-implants-promise__title"
          >
            Your Smile
            <br />
            Doesn&apos;t Have
            <br />
            to Wait
          </h2>
          <p className="dental-implants-promise__lead">
            Leave with a beautiful, comfortable smile from day one — even when
            your complete treatment continues beyond it.
          </p>
          <p className="dental-implants-promise__description">
            Dental treatment can take time. We value your time and work efficiently to make every stage feel comfortable, considered, and livable.
          </p>
        </div>
        <div className="dental-implants-promise__media">
          <img
            className="dental-implants-promise__image"
            src={promiseDoctorImage}
            alt="Dr. Tarkesh standing with the dental practice team"
          />
        </div>
      </div>
    </section>
  )
}

export default DentalImplantsPromiseSection
