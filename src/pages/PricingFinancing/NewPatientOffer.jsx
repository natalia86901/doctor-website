import ConsultationLink from './ConsultationLink'

const defaultOffer = {
  title: 'All-on-4 Fixed Teeth',
  price: 19000,
  priceNote: 'per arch',
  includes: ['Extractions', 'Implant placement', 'Sedation', 'Final fixed restoration'],
}

function FormattedPrice({ value }) {
  const groups = Math.round(value).toLocaleString('en-US').split(',')
  return <span aria-hidden="true">
    <span className="pricing-financing__price-currency">$</span>
    {groups.map((group, index) => index === 0
      ? group
      : [<span key={index} className="pricing-financing__price-comma">,</span>, group])}
  </span>
}

export default function NewPatientOffer({ offer }) {
  const { title, price, priceNote, includes } = {
    ...defaultOffer,
    ...Object.fromEntries(Object.entries(offer ?? {}).filter(([, value]) => value != null && value !== '')),
  }
  const items = includes?.length ? includes : defaultOffer.includes

  return <section className="pricing-financing__section pricing-financing__offer" aria-labelledby="pricing-offer-title">
    <div className="pricing-financing__container pricing-financing__offer-grid">
      <div className="pricing-financing__offer-summary">
        <p className="pricing-financing__eyebrow">NEW PATIENT OFFER</p>
        <h2 id="pricing-offer-title">{title}</h2>
        <p className="pricing-financing__offer-price" aria-label={`$${Math.round(price).toLocaleString('en-US')}`}><FormattedPrice value={price} /></p>
        <p className="pricing-financing__per-arch">{priceNote}</p>
      </div>
      <div className="pricing-financing__offer-includes">
        <h3>Your treatment includes</h3>
        <ul>{items.map((item, index) => <li key={index}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        <ConsultationLink variant="cream">Request a Consultation</ConsultationLink>
      </div>
    </div>
  </section>
}
