import backdrop from '../../assets/pricingFinancing/consultation-backdrop-full.png'
import ConsultationLink from './ConsultationLink'

const defaultText = 'Meet with Dr. Tarkesh to discuss your needs, explore treatment options, and get a clear understanding of the costs before making any decisions.'

export default function ConsultationSection({ title, text }) {
  return <section className="pricing-financing__section pricing-financing__consultation" aria-labelledby="pricing-consultation-title">
    <div className="pricing-financing__container pricing-financing__consultation-grid">
      <div className="pricing-financing__consultation-copy">
        {title
          ? <h2 id="pricing-consultation-title">{title.split('\n').map((line, index) => index === 0 ? line : <span key={index}> {line}</span>)}</h2>
          : <h2 id="pricing-consultation-title">Know Your Options. <span>Make Your Decision.</span></h2>}
        <p>{text || defaultText}</p>
        <ConsultationLink variant="gold">Schedule Your Free Consultation</ConsultationLink>
      </div>
    </div>
    <picture className="pricing-financing__consultation-photo">
      <img src={backdrop} alt="Dr. Tarkesh explaining dental implant options beside a scan of implant-supported teeth" loading="lazy" />
    </picture>
  </section>
}
