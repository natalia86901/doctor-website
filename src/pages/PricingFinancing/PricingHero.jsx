import photo from '../../assets/pricingFinancing/pricing-hero-photo.png'
import ConsultationLink from './ConsultationLink'

const defaultParagraphs = [
  'Explore treatment pricing and options for paying over time.',
  'Your consultation will help determine the right treatment for you and the full cost of your care.',
]

export default function PricingHero({ title, paragraphs }) {
  const copy = paragraphs?.length ? paragraphs : defaultParagraphs
  return <section className="pricing-financing__section pricing-financing__hero" aria-labelledby="pricing-title">
    <img className="pricing-financing__hero-photo" src={photo} alt="Patients discussing treatment costs with a dental team member" />
    <div className="pricing-financing__container">
      <div className="pricing-financing__hero-copy">
        {title
          ? <h1 id="pricing-title">{title.split('\n').map((line, index) => index === 0 ? line : [<br key={index} />, line])}</h1>
          : <h1 id="pricing-title">Treatment Costs &amp;<br />Payment Options</h1>}
        {copy.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <ConsultationLink>Request a Consultation</ConsultationLink>
      </div>
    </div>
  </section>
}
