import { Link } from 'react-router-dom'
import logo from '../../assets/brand/logoFooter.png'
import './Footer.css'

const officeHours = [
  ['Monday', '8:00 AM - 5:00 PM'],
  ['Tuesday', '8:00 AM - 5:00 PM'],
  ['Wednesday', '8:00 AM - 5:00 PM'],
  ['Thursday', '8:00 AM - 5:00 PM'],
  ['Friday', '8:00 AM - 12:00 PM'],
]

const quickLinks = [
  ['Home', '/'],
  ['Dentures', '/dentures-and-implants'],
  ['Implants', '/dentures-and-implants/dental-implants'],
  ['Complex Cases', '/patient-results/complex-cases'],
  ['Patient Results', '/patient-results'],
  ['Meet Dr. Tarkesh', '/why-dr-tarkesh/meet-dr-tarkesh'],
  ['New Patients', '/patient-resources/new-patient-forms'],
  ['Contact', '/contact'],
]

function Footer() {
  const currentYear = new Date().getFullYear()

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <section
            className="site-footer__brand"
            aria-labelledby="footer-brand-heading"
          >
            <h2
              className="site-footer__visually-hidden"
              id="footer-brand-heading"
            >
              Bakersfield Dentures and Implants
            </h2>

            <div className="site-footer__logo-frame">
              <img
                className="site-footer__logo"
                src={logo}
                alt="Bakersfield Dentures and Implants"
              />
            </div>

            <address className="site-footer__contact">
              <span>3726 Coffee Road</span>
              <span>Bakersfield, CA 93312</span>

              <a
                className="site-footer__contact-link"
                href="tel:6611234567"
              >
                (661) 123-4567
              </a>

              <a
                className="site-footer__contact-link"
                href="mailto:INFO@3D-DENTISTRY.COM"
              >
                INFO@3D-DENTISTRY.COM
              </a>
            </address>
          </section>

          <section
            className="site-footer__hours"
            aria-labelledby="footer-hours-heading"
          >
            <h2
              className="site-footer__heading"
              id="footer-hours-heading"
            >
              Office Hours
            </h2>

            <dl className="site-footer__hours-list">
              {officeHours.map(([day, hours]) => (
                <div
                  className="site-footer__hours-row"
                  key={day}
                >
                  <dt className="site-footer__day">
                    {day}
                  </dt>

                  <dd className="site-footer__time">
                    {hours}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              className="site-footer__appointment"
              to="/contact/schedule-consultation"
            >
              Book an Appointment
            </Link>
          </section>

          <nav
            className="site-footer__navigation"
            aria-label="Footer navigation"
          >
            <h2 className="site-footer__heading">
              Quick Links
            </h2>

            <ul className="site-footer__links">
              {quickLinks.map(([label, path]) => (
                <li key={path}>
                  <Link
                    className="site-footer__link"
                    to={path}
                    onClick={path === '/' ? handleHomeClick : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; {currentYear} Bakersfield Dentures and Implants.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer