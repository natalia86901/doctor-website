import backdrop from '../../assets/pricingFinancing/consultation-backdrop-full.png'
import ConsultationLink from './ConsultationLink'

export default function ConsultationSection() {
  return <section className="pricing-financing__section pricing-financing__consultation" aria-labelledby="pricing-consultation-title">
    <div className="pricing-financing__container pricing-financing__consultation-grid">
      <div className="pricing-financing__consultation-copy">
        <h2 id="pricing-consultation-title">Know Your Options. <span>Make Your Decision.</span></h2>
        <p>Meet with Dr. Tarkesh to discuss your needs, explore treatment options, and get a clear understanding of the costs before making any decisions.</p>
        <ConsultationLink variant="gold">Schedule Your Free Consultation</ConsultationLink>
      </div>
    </div>
    <picture className="pricing-financing__consultation-photo">
      <img src={backdrop} alt="Dr. Tarkesh explaining dental implant options beside a scan of implant-supported teeth" loading="lazy" />
    </picture>
  </section>
}
