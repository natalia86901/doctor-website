import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../components/Navbar/navConfig'
import hero from '../../assets/dentures/hero-lab.png'
import traditional from '../../assets/dentures/traditionalDenture.png'
import treatmentTraditional from '../../assets/dentures/treatmentOptions/traditionalDenture.png'
import treatmentStandard from '../../assets/dentures/treatmentOptions/standard.png'
import treatmentCustomized from '../../assets/dentures/treatmentOptions/customized.png'
import treatmentImplants from '../../assets/dentures/treatmentOptions/implantSupported.png'
import treatmentFixed from '../../assets/dentures/treatmentOptions/allonfixed.png'
import treatmentSnap from '../../assets/dentures/treatmentOptions/snapInDenture.png'
import snapComparison from '../../assets/dentures/snapInDenture.png'
import fixedComparison from '../../assets/dentures/allOn4FixedArch.png'
import softFoods from '../../assets/dentures/soft-foods.png'
import sandwich from '../../assets/dentures/sandwich.png'
import steak from '../../assets/dentures/steak-apple.png'
import beforeAfter1 from '../../assets/patientResults/beforeAfter1.png'
import beforeAfter2 from '../../assets/patientResults/beforeAfter2.png'
import beforeAfter3 from '../../assets/patientResults/beforeAfter3.png'
import './Dentures.css'

const officeContact = navItems.find(({ path }) => path === '/contact').children.find(({ href }) => href?.startsWith('tel:')).href

function Consultation({ children = 'Book a Free Consultation', gold = false }) {
  return <a className={'dentures__cta' + (gold ? ' dentures__cta--gold' : '')} href={officeContact}>
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
    <div className="dentures__hero-copy"><h1 id="dentures-title">Same-Day<br />Dentures.</h1>
      <p>Made in our in-house lab.</p><Consultation>Free Consultation</Consultation>
    </div>
    <img src={hero} alt="Dentures held in gloved hands in a dental laboratory" fetchPriority="high" width="1536" height="1024" />
  </section>
}

function DayOne() {
  const steps = [['Day One', 'We take your dental impressions.'], ['During Treatment', 'Surgery will be done if needed.'], ['Final Restoration', 'Delivery of denture same day.']]
  return <section className="dentures__section" aria-labelledby="dentures-day-one">
    <div className="dentures__inner"><SectionHeading id="dentures-day-one" title="A Beautiful Smile from Day One.">Your new smile is ready when you need it — so you never have to go without teeth.</SectionHeading>
      <div className="dentures__three">{steps.map(([title, text], i) => <article className="dentures__day-card" key={title}>
        <span className="dentures__number">0{i + 1}</span><h3>{title}</h3><p>{text}</p>
      </article>)}</div>
    </div>
  </section>
}

const optionGroups = [
  { id: 'traditional', title: 'Traditional Denture', titleLines: ['Traditional', 'Denture'], label: 'Standard', image: treatmentTraditional, imageAlt: 'Traditional removable denture', closeLabel: 'Close traditional denture options', options: [
    { title: 'Standard', image: treatmentStandard, imageAlt: 'Standard traditional denture', text: 'A reliable, functional solution for your smile.', href: '#dentures-traditional-foods' },
    { title: 'Customized', image: treatmentCustomized, imageAlt: 'Customized traditional denture', text: 'An enhanced fit, comfort and natural appearance.', href: '#dentures-traditional-foods' },
  ] },
  { id: 'implants', title: 'Implant-Supported Teeth', titleLines: ['Implant-', 'Supported Teeth'], label: 'Customized', image: treatmentImplants, imageAlt: 'Implant-supported teeth', closeLabel: 'Close implant-supported options', options: [
    { title: 'All-on-4 Fixed Arch', image: treatmentFixed, imageAlt: 'All-on-4 fixed implant-supported arch', text: 'A permanent solution for a confident, natural smile.', to: '/services/implants' },
    { title: 'Snap-in Denture', image: treatmentSnap, imageAlt: 'Snap-in implant-supported denture', text: 'A secure, removable option with implant support.', to: '/services/implants' },
  ] },
]

function TreatmentGroup({ group }) {
  const [expanded, setExpanded] = useState(true)
  const trigger = useRef(null)
  function close() { setExpanded(false); trigger.current?.focus() }
  return <div className={'dentures__group dentures__group--' + group.id}>
    <div className="dentures__category">
      <img src={group.image} alt={group.imageAlt} loading="lazy" />
      <div className="dentures__category-copy">
        <span className="dentures__category-label">{group.label}</span>
        <h3>{group.titleLines.map((line) => <span key={line}>{line}</span>)}</h3>
        <button ref={trigger} className="dentures__explore" type="button" aria-expanded={expanded} aria-controls={'dentures-options-' + group.id} onClick={() => setExpanded(!expanded)}>
        <span className="dentures__explore-icon" aria-hidden="true">→</span><span>Explore options</span><span className="dentures__sr-only">: {group.title}</span>
      </button></div>
    </div>
    <div className="dentures__options" id={'dentures-options-' + group.id} hidden={!expanded} onKeyDown={(event) => { if (event.key === 'Escape') close() }}>
      <div className="dentures__options-heading"><h4>{group.id === 'traditional' ? 'Traditional Denture Options' : 'Implant-Supported Options'}</h4>
        <button type="button" className="dentures__close" aria-label={group.closeLabel} onClick={close}>×</button></div>
      <div className="dentures__option-grid">{group.options.map((option) => <article className="dentures__option" key={option.title}>
        <img src={option.image} alt={option.imageAlt} loading="lazy" />
        <div><h5>{option.title}</h5><p>{option.text}</p>
          {option.to ? <Link to={option.to} aria-label={'Learn more about ' + option.title}>Learn More <span aria-hidden="true">→</span></Link> : <a href={option.href} aria-label={'Learn more about ' + option.title}>Learn More <span aria-hidden="true">→</span></a>}
        </div>
      </article>)}</div>
    </div>
  </div>
}

function TreatmentOptions() {
  return <section className="dentures__section dentures__section--options" aria-labelledby="dentures-options-title"><div className="dentures__inner">
    <SectionHeading id="dentures-options-title" title="Two Ways to Restore Your Smile.">Both options are supported by implants. The difference is removable vs. permanent.</SectionHeading>
    <div className="dentures__two">{optionGroups.map((group) => <TreatmentGroup key={group.id} group={group} />)}</div>
  </div></section>
}

function FreeExam() {
  return <section className="dentures__exam" aria-labelledby="dentures-exam-title"><div className="dentures__inner">
    <div><h2 id="dentures-exam-title">Dr. Tarkesh Provides a Free Exam and Full Evaluation</h2><p>to determine which treatment options best for your individual needs.</p></div>
    <Consultation gold>Book A Free Consultation</Consultation>
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
    <div className="dentures__actions"><Consultation gold>Schedule a Consultation</Consultation><p className="dentures__eyebrow">Discover what may be possible for you.</p></div>
  </div></section>
}

function SmileTimeline() {
  const steps = [['Day One', 'Leave with a beautiful, comfortable smile from day one.'], ['Heal & Continue Treatment', 'Your mouth heals while we finalize your permanent smile.'], ['Final Smile', 'Enjoy a strong, natural-looking smile built for the long term.']]
  return <section className="dentures__section dentures__timeline-section" aria-labelledby="dentures-timeline-title"><div className="dentures__inner">
    <SectionHeading id="dentures-timeline-title" title="Your Smile Starts from Day One." />
    <ol className="dentures__timeline">{steps.map(([title, text], i) => <li key={title}><span className="dentures__step" aria-hidden="true">{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    <div className="dentures__actions"><Consultation /></div>
  </div></section>
}

function PatientComparison({ image, number }) {
  return <figure className="dentures__patient">
    <img src={image} alt={'Patient ' + number + ' before and after treatment'} loading="lazy" width="1448" height="1086" />
  </figure>
}

function PatientJourney() {
  return <section className="dentures__section dentures__journey" aria-labelledby="dentures-journey-title"><div className="dentures__inner">
    <SectionHeading id="dentures-journey-title" title="Actual Patient Journey." />
    <div className="dentures__three">{[beforeAfter1, beforeAfter2, beforeAfter3].map((image, i) => <PatientComparison key={image} image={image} number={i + 1} />)}</div>
    <div className="dentures__actions"><Consultation /></div>
  </div></section>
}

export default function Dentures() {
  return <main className="dentures"><DenturesHero /><DayOne /><TreatmentOptions /><FreeExam /><FoodComparison /><SmileTimeline /><PatientJourney /></main>
}
