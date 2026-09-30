import { navItems } from '../../components/Navbar/navConfig'
import hero from '../../assets/dentures/hero-lab.png'
import traditional from '../../assets/dentures/foodComparison/traditional-denture-transparent.png'
import traditionalCategory from '../../assets/dentures/foodComparison/denture-2-transparent.png'
import implantCategory from '../../assets/dentures/foodComparison/snap-in-5-transparent.png'
import snapComparison from '../../assets/dentures/foodComparison/snap-in-denture-transparent.png'
import snapOption from '../../assets/dentures/foodComparison/snap-in-6-transparent.png'
import fixedComparison from '../../assets/dentures/foodComparison/all-on-4-transparent.png'
import fixedOption from '../../assets/dentures/foodComparison/all-on-4-2-transparent.png'
import softFoods from '../../assets/dentures/soft-foods.png'
import sandwich from '../../assets/dentures/sandwich.png'
import steak from '../../assets/dentures/steak-apple.png'
import beforeAfter1 from '../../assets/dentures/actualPatientJourney/beforeAfter.Image1.png'
import before1 from '../../assets/dentures/actualPatientJourney/Before1.png'
import after1 from '../../assets/dentures/actualPatientJourney/After1.png'
import beforeAfter2 from '../../assets/dentures/actualPatientJourney/beforeAfter.Image2.png'
import before2 from '../../assets/dentures/actualPatientJourney/Before2.png'
import after2 from '../../assets/dentures/actualPatientJourney/After2.png'
import beforeAfter3 from '../../assets/dentures/actualPatientJourney/beforeAfter.Image3.png'
import before3 from '../../assets/dentures/actualPatientJourney/Before3.png'
import after3 from '../../assets/dentures/actualPatientJourney/After3.png'
import './Dentures.css'
import PatientComparison from './PatientJourneyComparison'

const officeContact = navItems.find(({ path }) => path === '/contact').children.find(({ href }) => href?.startsWith('tel:')).href

function Consultation({ children = 'Book a Free Consultation', variant = 'light' }) {
  return <a className={'dentures__cta dentures__cta--on-' + variant} href={officeContact}>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" /></svg>
    {children}<span aria-hidden="true">→</span>
  </a>
}

function SectionHeading({ id, title, children, eyebrow }) {
  return <header className="dentures__heading">
    {eyebrow && <p className="dentures__eyebrow">{eyebrow}</p>}
    <h2 id={id}>{title}</h2>
    {children && <p className="dentures__intro">{children}</p>}
  </header>
}

function DenturesHero() {
  return <section className="dentures__hero" aria-labelledby="dentures-title">
    <div className="dentures__hero-copy"><h1 id="dentures-title">Same-Day<br />Dentures</h1>
      <p>Made in our in-house lab, <br />your dentures are designed for a natural look,{' '}
       <br />comfortable fit,<br className="dentures__hero-mobile-break" /> and confident smile.</p><Consultation>Free Consultation</Consultation>
    </div>
    <img src={hero} alt="Dentures held in gloved hands in a dental laboratory" fetchPriority="high" width="1536" height="1024" />
  </section>
}

function DayOne() {
  const steps = [['Day One', 'We take your dental impressions.'], ['During Treatment', 'Surgery will be done if needed.'], ['Final Restoration', 'Delivery of denture same day.']]
  return <section className="dentures__section" aria-labelledby="dentures-day-one">
    <div className="dentures__inner"><SectionHeading id="dentures-day-one" title="A Beautiful Smile from Day One">Your new smile is ready when you need it — so you never have to go without teeth.</SectionHeading>
      <div className="dentures__three">{steps.map(([title, text], i) => <article className="dentures__day-card" key={title}>
        <span className="dentures__number">0{i + 1}</span><h3>{title}</h3><p>{text}</p>
      </article>)}</div>
    </div>
  </section>
}

const optionGroups = [
  { id: 'traditional', title: 'Traditional Denture', titleLines: ['Traditional', 'Denture'], label: 'Standard', image: traditionalCategory, imageAlt: 'Traditional removable denture', options: [
    { title: 'Standard', image: traditional, imageAlt: 'Standard traditional denture', text: 'A reliable, functional solution for your smile.' },
    { title: 'Customized', image: traditional, imageAlt: 'Customized traditional denture', text: 'An enhanced fit, comfort and natural appearance.' },
  ] },
  { id: 'implants', title: 'Implant-Supported Teeth', titleLines: ['Implant-', 'Supported Teeth'], label: 'Customized', image: implantCategory, imageAlt: 'Implant-supported denture', options: [
    { title: 'All-on-4 Fixed Arch', imageClass: 'dentures__option-image--fixed', image: fixedOption, imageAlt: 'All-on-4 fixed implant-supported arch', text: 'A permanent solution for a confident, natural smile.' },
    { title: 'Snap-in Denture', imageClass: 'dentures__option-image--snap', image: snapOption, imageAlt: 'Snap-in implant-supported denture', text: 'A secure, removable option with implant support.' },
  ] },
]

function TreatmentGroup({ group }) {
  return <div className={'dentures__group dentures__group--' + group.id}>
    <div className="dentures__category">
      <span className="dentures__category-image"><img src={group.image} alt={group.imageAlt} loading="lazy" /></span>
      <div className="dentures__category-copy">
        <span className="dentures__category-label">{group.label}</span>
        <h3>{group.titleLines.map((line) => <span key={line}>{line}</span>)}</h3>
      </div>
    </div>
    <div className="dentures__options" id={'dentures-options-' + group.id}>
      <div className="dentures__options-heading"><h4>{group.id === 'traditional' ? 'Traditional Denture Options' : 'Implant-Supported Options'}</h4></div>
      <div className="dentures__option-grid">{group.options.map((option) => <article className="dentures__option" key={option.title}>
        <span className={'dentures__option-image ' + (option.imageClass || '')}><img src={option.image} alt={option.imageAlt} loading="lazy" /></span>
        <div><h5>{option.title}</h5><p>{option.text}</p>
        </div>
      </article>)}</div>
    </div>
  </div>
}

function TreatmentOptions() {
  return <section className="dentures__section dentures__section--options" aria-labelledby="dentures-options-title"><div className="dentures__inner">
    <SectionHeading id="dentures-options-title" title="Two Ways to Restore Your Smile">Both options are supported by implants. The difference is Denture vs Fixed Bridge.</SectionHeading>
    <div className="dentures__two">{optionGroups.map((group) => <TreatmentGroup key={group.id} group={group} />)}</div>
  </div></section>
}

function FreeExam() {
  return <section className="dentures__exam" aria-labelledby="dentures-exam-title"><div className="dentures__inner">
    <div><h2 id="dentures-exam-title">Dr. Tarkesh Provides a Free X-Ray,<br /> Exam and Full Evaluation</h2><p>Two Ways to Restore Your Smile</p></div>
    <Consultation variant="dark">Book A Free Consultation</Consultation>
  </div></section>
}

const foodOptions = [
  { id: 'traditional', title: 'Traditional Denture', subtitle: 'Removable', image: traditional, imageAlt: 'Traditional removable denture', food: softFoods, alt: 'Mashed potatoes with soft foods', description: 'A reliable solution, best for softer foods. Food may feel less natural.', foods: ['Oatmeal', 'Scrambled eggs', 'Mashed potatoes', 'Yogurt'] },
  { id: 'snap', title: 'Snap-in Denture', subtitle: 'Implant-supported · removable', image: snapComparison, imageAlt: 'Snap-in implant-supported denture', food: sandwich, alt: 'Turkey sandwich on a plate', description: 'More stability and confidence. Enjoy a wider variety of foods.', foods: ['Fish', 'Cooked vegetables', 'Pasta', 'Soft meats'] },
  { id: 'fixed', title: 'All-on-4 Fixed Arch', subtitle: 'Implant-supported · fixed', image: fixedComparison, imageAlt: 'All-on-4 fixed implant-supported arch', food: steak, alt: 'Grilled steak with asparagus and a red apple', description: 'Designed to bring you closest to a natural eating experience.', foods: ['Steak', 'Apples', 'Salads', 'Nuts'] },
]

function FoodComparison() {
  return <section className="dentures__section dentures__food-section" aria-labelledby="dentures-food-title"><div className="dentures__inner">
    <SectionHeading id="dentures-food-title" title="What Do You Want to Eat Again?" eyebrow="Real Life Difference">Different tooth replacement options can provide very different levels of stability and chewing function.</SectionHeading>
    <div className="dentures__three">{foodOptions.map((option, row) => <article id={'dentures-' + option.id + '-foods'} className={'dentures__food-card dentures__food-card--' + option.id} key={option.id}>
      <img className="dentures__food-denture" src={option.image} alt={option.imageAlt} loading="lazy" />
      <h3>{option.title}</h3><p className="dentures__food-subtitle">{option.subtitle}</p><div className="dentures__gold-rule" aria-hidden="true" />
      <p className="dentures__food-description">{option.description}</p><img className="dentures__meal" src={option.food} alt={option.alt} loading="lazy" width="1536" height="1024" />
      <p className="dentures__food-label">{row === 2 ? 'Enjoy your favorite foods again' : 'Commonly enjoyed foods'}</p>
      <ul className="dentures__foods">{option.foods.map((food, col) => <li key={food}><span className="dentures__food-icon" aria-hidden="true" style={{ backgroundPosition: col * 100 / 3 + '% ' + row * 50 + '%' }} /><span>{food}</span></li>)}</ul>
    </article>)}</div>
    <div className="dentures__actions"><Consultation>Schedule a Consultation</Consultation><p className="dentures__eyebrow">Discover what may be possible for you.</p></div>
  </div></section>
}

function SmileTimeline() {
  const steps = [['Day One', 'Leave with a beautiful, comfortable smile from day one.'], ['Heal & Continue Treatment', 'Your mouth heals while we finalize your permanent smile.'], ['Final Smile', 'Enjoy a strong, natural-looking smile built for the long term.']]
  return <section className="dentures__section dentures__timeline-section" aria-labelledby="dentures-timeline-title"><div className="dentures__inner">
    <SectionHeading id="dentures-timeline-title" title="Your Smile Starts from Day One" />
    <ol className="dentures__timeline">{steps.map(([title, text], i) => <li key={title}><span className="dentures__step" aria-hidden="true">{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    <div className="dentures__actions"><Consultation /></div>
  </div></section>
}

const patientJourneys = [
  { id: 1, comparisonImage: beforeAfter1, beforeImage: before1, afterImage: after1 },
  { id: 2, comparisonImage: beforeAfter2, beforeImage: before2, afterImage: after2 },
  { id: 3, comparisonImage: beforeAfter3, beforeImage: before3, afterImage: after3 },
]

function PatientJourney() {
  return <section className="dentures-journey" aria-labelledby="dentures-journey-title"><div className="dentures-journey__inner">
    <header className="dentures-journey__header">
      <p className="dentures-journey__eyebrow">PATIENT RESULTS</p>
      <h2 id="dentures-journey-title" className="dentures-journey__title">Actual Patient Journey</h2>
    </header>
    <div className="dentures-journey__grid">{patientJourneys.map((result) => <article className="dentures-journey__case" key={result.id}><PatientComparison result={result} /></article>)}</div>
    <div className="dentures__actions"><Consultation /></div>
  </div></section>
}

export default function Dentures() {
  return <main className="dentures"><DenturesHero /><DayOne /><TreatmentOptions /><FreeExam /><FoodComparison /><SmileTimeline /><PatientJourney /></main>
}
