import { Link } from 'react-router-dom'
import PatientComparison from './SmileComparison'
import './SmileGallery.css'
import before1 from '../../assets/smileGallery/1 1.PNG'
import after1 from '../../assets/smileGallery/1 3F.PNG'
import before2 from '../../assets/smileGallery/4 2.PNG'
import after2 from '../../assets/smileGallery/3.PNG'
import before3 from '../../assets/smileGallery/4 5.PNG'
import after3 from '../../assets/smileGallery/3 2.PNG'
import before5 from '../../assets/smileGallery/4 4.PNG'
import after5 from '../../assets/smileGallery/3 5.PNG'
import heroPortrait from '../../assets/smileGallery/hero-portrait-approved.png'
import toothIcon from '../../assets/smileGallery/icons/tooth.svg'
import implantIcon from '../../assets/smileGallery/icons/implant.svg'
import heartIcon from '../../assets/smileGallery/icons/heart.svg'
import storyPortrait from '../../assets/smileGallery/story-portrait-approved.png'
import before4 from '../../assets/smileGallery/4 6.PNG'
import after4 from '../../assets/smileGallery/3 4.PNG'

const results = [
  { id: 1, initialPosition: 50.5, beforeImage: before1, afterImage: after1, quote: 'I can eat comfortably again.' },
  { id: 2, beforeImage: before2, afterImage: after2, quote: 'I feel like myself when I smile.' },
  { id: 3, beforeImage: before3, afterImage: after3, quote: 'Why didn’t I do it sooner?' },
  { id: 4, initialPosition: 52, beforeImage: before4, afterImage: after4, quote: 'I can smile in photos again.' },
  { id: 5, beforeImage: before5, afterImage: after5, quote: 'It has changed my life.' },
]

function GalleryIcon({ kind }) {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'eat' && <path d="M13 8v13m5-13v13M8 8v13c0 7 10 7 10 0M13 27v14M33 8c-8 9-8 20 0 20V8Zm0 20v13" />}
    {kind === 'speak' && <path d="M39 22c0 10-12 16-22 10l-9 5 3-10C-2 7 36 0 39 22Z" />}
    {kind === 'smile' && <><circle cx="24" cy="24" r="17" /><path d="M16 27q8 12 16 0M17 18h1M30 18h1" /></>}
  </svg>
}

export default function SmileGallery() {
  return <main className="smile-gallery">
    <section className="smile-gallery__hero" style={{ "--gallery-portrait": `url("${heroPortrait}")` }}>
      <div className="smile-gallery__inner">
        <div className="smile-gallery__copy">
          <p className="smile-gallery__eyebrow">Patient Results</p>
          <h1>Real Smiles.<br />Real Transformations.</h1>
          <p>Every smile has a story. Explore real patient results and see what’s possible with personalized care at Bakersfield Dentures &amp; Implants.</p>
          <div className="smile-gallery__actions">
            <a className="smile-gallery__cta" href="#patient-results">Explore Patient Results <span aria-hidden="true">→</span></a>
            <span className="smile-gallery__or">or</span>
            <Link className="smile-gallery__text-link" to="/contact/schedule-consultation">Schedule a Consultation</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="smile-gallery__values" aria-label="Our approach">
      <div className="smile-gallery__inner smile-gallery__three">
        {[[toothIcon, 'Real Patients', 'Real Results'], [implantIcon, 'Advanced Solutions', 'Lasting Change'], [heartIcon, 'Renewed Confidence', 'Brighter Tomorrows']].map(([icon, title, text]) => <div key={icon}><img className="smile-gallery__value-icon" src={icon} alt="" width="72" height="72" /><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </section>
    <section className="smile-gallery__results" id="patient-results" aria-labelledby="gallery-heading">
      <div className="smile-gallery__inner">
        <header><p className="smile-gallery__eyebrow">Real Patient Results</p><h2 id="gallery-heading">Real Patients. Meaningful Change.</h2><p>Explore real before and after results from patients who have regained their smiles and their confidence.</p></header>
        <div className="smile-gallery__grid">
          {results.map(result => <article key={result.id}><PatientComparison result={result} /><blockquote><span aria-hidden="true">“</span><p>{result.quote}</p></blockquote></article>)}
        </div>
      </div>
    </section>
    <section className="smile-gallery__story" style={{ "--gallery-portrait": `url("${storyPortrait}")` }}>
      <div className="smile-gallery__inner"><div className="smile-gallery__copy">
        <p className="smile-gallery__eyebrow">Every Smile Has a Story</p>
        <h2>More Than<br />a New Smile.</h2>
        <p>Behind every transformation is someone ready to eat, speak, and smile with confidence again.</p>
        <div className="smile-gallery__three smile-gallery__benefits">
          {[['eat', 'Eat Freely'], ['speak', 'Speak Comfortably'], ['smile', 'Smile Confidently']].map(([icon, text]) => <div key={icon}><span><GalleryIcon kind={icon} /></span><h4>{text}</h4></div>)}
        </div>
      </div></div>
    </section>
  </main>
}
