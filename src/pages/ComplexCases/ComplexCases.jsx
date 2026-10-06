import { Link } from 'react-router-dom'
import { navItems } from '../../components/Navbar/navConfig'
import monitor from '../../assets/compleCases/advanced-care-monitor.jpg'
import standardCase from '../../assets/complexCases/standard-case.jpg'
import complexCase from '../../assets/complexCases/complex-case.jpg'
import patientBefore from '../../assets/complexCases/patient-before.jpg'
import patientAfter from '../../assets/complexCases/patient-after.jpg'
import './ComplexCases.css'

const officeContact = navItems.find(({ path }) => path === '/contact')
  .children.find(({ href }) => href?.startsWith('tel:')).href

function ConsultationLink({ children = 'Discuss My Case', variant = '' }) {
  return (
    <a className={`complex-cases__cta${variant ? ` complex-cases__cta--${variant}` : ''}`} href={officeContact}>
      {children}<span aria-hidden="true">→</span>
    </a>
  )
}

const cases = [
  {
    label: 'Standard Case',
    image: standardCase,
    alt: 'Frontal skull illustration with short implants in the upper jaw',
    title: 'When enough bone is available',
    description: 'A standard implant can be placed when there is sufficient bone volume.',
  },
  {
    label: 'Complex Case',
    image: complexCase,
    alt: 'Frontal skull illustration with longer implants extending toward the cheekbones',
    title: 'When the jawbone is not enough',
    description: 'Advanced techniques like zygomatic implants can anchor into stronger bone areas, providing support even in severe bone loss cases.',
  },
]

export default function ComplexCases() {
  return (
    <main className="complex-cases">
      <section className="complex-cases__hero" aria-labelledby="complex-cases-title">
        <div className="complex-cases__inner complex-cases__hero-grid">
          <div className="complex-cases__hero-copy">
            <p className="complex-cases__eyebrow">Advanced Care</p>
            <h1 id="complex-cases-title">When the case is complex, experience matters more</h1>
            <div className="complex-cases__rule" aria-hidden="true" />
            <p>Severe bone loss, previous implant failures, or difficult anatomy don’t always mean there are no options. Dr. Tarkesh has advanced training, specialized equipment, and a personalized approach to help patients with even the most challenging cases.</p>
            <a className="complex-cases__cta complex-cases__hero-cta" href={officeContact}>
              Discuss My Case
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false"><path d="M3 12h17M13 5l7 7-7 7" /></svg>
            </a>
            <Link className="complex-cases__video-cta" to="/why-dr-tarkesh/meet-dr-tarkesh#patient-story-video">
              <span>See How We Treat Complex Cases</span>
              <span className="complex-cases__play" aria-hidden="true"><svg viewBox="0 0 12 14" focusable="false"><path d="m1 1 10 6-10 6V1Z" /></svg></span>
            </Link>
          </div>
        </div>
        <img className="complex-cases__monitor" src={monitor} alt="Dental planning monitor displaying a skull and implant visualization, with a clinician pointing to the screen" width="1672" height="941" fetchPriority="high" />
      </section>

      <section className="complex-cases__section" aria-labelledby="complex-cases-options">
        <div className="complex-cases__inner">
          <header className="complex-cases__heading">
            <p className="complex-cases__eyebrow">How Advanced Implants Can Help</p>
            <h2 id="complex-cases-options">When there isn’t enough bone,<br className="complex-cases__desktop-break" /> we don’t always have to build more</h2>
            <p>In complex cases, longer implants can be used to anchor into stronger bone areas for added support — allowing treatment options where standard implants may not be possible.</p>
          </header>
          <div className="complex-cases__comparison">
            {cases.map((item, index) => (
              <article className="complex-cases__case" key={item.label}>
                <div className="complex-cases__case-media">
                  <img src={item.image} alt={item.alt} width="1200" height="800" loading="lazy" />
                  <p className={`complex-cases__case-label${index === 1 ? ' complex-cases__case-label--gold' : ''}`}>{item.label}</p>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="complex-cases__actions">
            <Link className="complex-cases__cta" to="/services/implants">Explore Implant Options</Link>
            <ConsultationLink variant="outline">Make an Appointment</ConsultationLink>
          </div>
        </div>
      </section>

      <section className="complex-cases__section complex-cases__story" aria-labelledby="complex-cases-story">
        <div className="complex-cases__inner complex-cases__story-grid">
          <div className="complex-cases__portraits">
            <figure className="complex-cases__portrait">
              <img src={patientBefore} alt="Patient before treatment, as shown in the supplied case photographs" width="474" height="706" loading="lazy" />
              <figcaption>Before</figcaption>
            </figure>
            <figure className="complex-cases__portrait complex-cases__portrait--after">
              <img src={patientAfter} alt="The same patient smiling after the full-arch solution shown in the supplied case photographs" width="474" height="706" loading="lazy" />
              <figcaption>After — Full-Arch Solution</figcaption>
            </figure>
          </div>
          <div className="complex-cases__story-copy">
            <p className="complex-cases__eyebrow">Real Complex Case</p>
            <div className="complex-cases__rule" aria-hidden="true" />
            <h2 id="complex-cases-story">“I thought there was nowhere to put implants”</h2>
            <p>Other doctors said No,<br /> but Dr. Tarkesh found a way.</p>
            <ConsultationLink />
          </div>
        </div>
      </section>

      <section className="complex-cases__section complex-cases__closing" aria-labelledby="complex-cases-consultation">
        <div className="complex-cases__inner">
          <h2 id="complex-cases-consultation">Some cases are challenging, but with the right training and experience, we take them thoughtfully and carefully</h2>
          <ConsultationLink variant="gold">Book Free Consultation</ConsultationLink>
        </div>
      </section>
    </main>
  )
}
