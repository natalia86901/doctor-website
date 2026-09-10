import promiseDoctorImage from '../../assets/dentalImplants/ourPromiseDoctor.png'
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
            YOUR SMILE
            <br />
            DOESN&apos;T HAVE
            <br />
            TO WAIT.
          </h2>
          <p className="dental-implants-promise__lead">
            Leave with a beautiful, comfortable smile from day one — even when
            your complete treatment continues beyond it.
          </p>
          <p className="dental-implants-promise__description">
            Prosthetic treatment can take time. Our job is to make every stage
            feel comfortable, considered and livable.
          </p>
        </div>
        <div className="dental-implants-promise__media">
          <img
            className="dental-implants-promise__image"
            src={promiseDoctorImage}
            alt="Dentist standing in a modern dental treatment room with digital smile planning displayed on a monitor"
          />
        </div>
      </div>
    </section>
  )
}

export default DentalImplantsPromiseSection
