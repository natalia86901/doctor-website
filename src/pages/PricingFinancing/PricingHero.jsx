import photo from '../../assets/pricingFinancing/pricing-hero-photo.png'
import ConsultationLink from './ConsultationLink'

export default function PricingHero() {
  return <section className="pricing-financing__section pricing-financing__hero" aria-labelledby="pricing-title">
    <img className="pricing-financing__hero-photo" src={photo} alt="Patients discussing treatment costs with a dental team member" />
    <div className="pricing-financing__container">
      <div className="pricing-financing__hero-copy">
        <h1 id="pricing-title">Treatment Costs &amp;<br />Payment Options</h1>
        <p>Explore treatment pricing and options for paying over time.</p>
        <p>Your consultation will help determine the right treatment for you and the full cost of your care.</p>
        <ConsultationLink>Request a Consultation</ConsultationLink>
      </div>
    </div>
  </section>
}
