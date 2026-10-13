import ConsultationLink from './ConsultationLink'

export default function NewPatientOffer() {
  return <section className="pricing-financing__section pricing-financing__offer" aria-labelledby="pricing-offer-title">
    <div className="pricing-financing__container pricing-financing__offer-grid">
      <div className="pricing-financing__offer-summary">
        <p className="pricing-financing__eyebrow">NEW PATIENT OFFER</p>
        <h2 id="pricing-offer-title">All-on-4 Fixed Teeth</h2>
        <p className="pricing-financing__offer-price" aria-label="$19,000"><span aria-hidden="true"><span className="pricing-financing__price-currency">$</span>19<span className="pricing-financing__price-comma">,</span>000</span></p>
        <p className="pricing-financing__per-arch">per arch</p>
      </div>
      <div className="pricing-financing__offer-includes">
        <h3>Your treatment includes</h3>
        <ul>{['Extractions', 'Implant placement', 'Sedation', 'Final fixed restoration'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        <ConsultationLink variant="cream">Request a Consultation</ConsultationLink>
      </div>
    </div>
  </section>
}
