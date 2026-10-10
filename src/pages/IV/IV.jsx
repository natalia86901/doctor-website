import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../components/Navbar/navConfig'
import heroImage from '../../assets/IV/iv-hero.png'
import patientImage from '../../assets/IV/iv-patient-consultation.png'
import videoSource from '../../assets/IV/iv-tarkesh.mp4'
import videoPoster from '../../assets/IV/iv-video-poster.jpg'
import anxietyIcon from '../../assets/IV/iv.svg'
import toothIcon from '../../assets/IV/iv-tooth.svg'
import './IV.css'

// Replace this source when the hosted video is available.
const sedationVideo = { src: videoSource, poster: videoPoster }
const consultationPhone = navItems.find(({ path }) => path === '/contact')
  .children.find(({ href }) => href?.startsWith('tel:')).href

function CareIcon({ kind = 'tooth' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'listen' ? <>
        <path d="M44 19h10v45H18V19h10M29 16v-4h14v4h5v10H24V16zM25 34h21M25 42h17M25 50h12M25 58h10" />
        <path className="iv__icon-gold" d="M52 48c-9-12-24 0 0 17 24-17 9-29 0-17z" />
      </> : kind === 'sedation' ? <>
        <path d="M35 18v-9h10v9M30 18h20a5 5 0 0 1 5 5v31a5 5 0 0 1-5 5H30a5 5 0 0 1-5-5V23a5 5 0 0 1 5-5zM40 59v10c0 9 17 9 17 0M44 26h6M44 33h6M44 40h6" />
        <path className="iv__icon-gold" d="M29 42h22v11H29zM40 35v14M33 42h14" />
      </> : kind === 'doctor' ? <>
        <path d="M30 26c-5-18 25-22 25-5l-1 7M29 25l8-5 9 3 8-3M29 27c0 25 25 25 25 0M34 44v8l8 7 8-7v-8M34 50l-14 8-4 15M50 50l14 8 3 15M29 54l13 18 13-18M42 59l-4 7 4 6 4-6z" />
        <path className="iv__icon-gold" d="M56 62c-8-5-7 6-4 10 2 4 2-5 4-5s2 9 4 5c3-4 4-15-4-10z" />
      </> : <>
        <path d="M39 19C10 5 14 34 22 43c4 6 2 29 10 29 5 0 3-24 10-24s4 24 10 24c8 0 7-23 11-30C76 15 56 7 39 19zM29 17l16 6" />
        {kind === 'anxiety' && <>
          <path className="iv__icon-gold" d="M23 18c-7 0-10 7-10 15M12 39h15v22H12zM19 61c0 14 11 14 11 5M19 45v7M66 39c-9-13-25-1 0 18 25-19 9-31 0-18z" />
        </>}
      </>}
    </svg>
  )
}

const steps = [
  { icon: 'listen', title: 'We listen first', text: 'We review your health history and decide together what type of sedation is appropriate for you.' },
  { icon: 'sedation', title: 'Sedation during care', text: 'Medication is given orally or intravenously to help you relax during treatment.' },
  { icon: 'doctor', title: 'Care led by Dr. Tarkesh', text: 'Dr. Tarkesh or an anesthesiologist will administer your IV sedation.' },
]

function IV() {
  const videoRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  async function playVideo() {
    const video = videoRef.current
    video.controls = true
    try {
      await video.play()
      setHasStarted(true)
      video.focus()
    } catch {
      // Retain the keyboard-accessible Play button if playback is interrupted.
      video.controls = false
    }
  }

  return (
    <main className="iv">
      <section className="iv__section iv__hero" aria-labelledby="iv-title">
        <img className="iv__hero-image" src={heroImage} alt="Dr. Tarkesh discussing dental care with a patient" fetchPriority="high" />
        <div className="iv__inner">
          <div className="iv__hero-copy">
            <p className="iv__eyebrow iv__eyebrow--line">IV Sedation</p>
            <h1 id="iv-title">A stress free way to<br className="iv__desktop-break" /> get the care you need.</h1>
            <p>Intravenous sedation delivers anti-anxiety and relaxing medications directly into a vein to create a conscious, dream-like “twilight” state during dental work. Dr. Tarkesh or an anesthesiologist will administer your sedation and guide your care.</p>
            <div className="iv__actions">
              <a className="iv__cta" href={consultationPhone}>Ask about IV sedation</a>
              <Link className="iv__doctor-link" to="/why-dr-tarkesh/meet-dr-tarkesh">Meet Dr. Tarkesh</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="iv__section iv__dark iv__anxiety" aria-labelledby="iv-anxiety-title">
        <div className="iv__inner iv__anxiety-content">
          <img className="iv__anxiety-icon" src={anxietyIcon} alt="" />
          <h2 id="iv-anxiety-title">Dental anxiety <em>shouldn’t</em><br className="iv__desktop-break" /> stop you from the care you deserve.</h2>
        </div>
      </section>

      <section className="iv__section iv__steps-section" aria-labelledby="iv-steps-title">
        <div className="iv__inner">
          <header className="iv__heading">
            <p className="iv__eyebrow iv__eyebrow--center">How sedation works</p>
            <h2 id="iv-steps-title">A more comfortable path to treatment.</h2>
            <p className="iv__intro">IV sedation is delivered through a vein to help you feel deeply relaxed<br className="iv__desktop-break" /> during dental care.</p>
          </header>
          <ol className="iv__steps">
            {steps.map((step, index) => <li className="iv__step" key={step.title}>
              <div className="iv__step-icon"><CareIcon kind={step.icon} /></div>
              <span className="iv__step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="iv__section iv__dark iv__treatment" aria-labelledby="iv-treatment-title">
        <div className="iv__inner">
          <img className="iv__treatment-icon" src={toothIcon} alt="" />
          <h2 id="iv-treatment-title">Get the treatment you’ve been putting off.</h2>
        </div>
      </section>

      <section className="iv__section iv__expect" aria-labelledby="iv-expect-title">
        <div className="iv__inner">
          <header className="iv__heading">
            <p className="iv__eyebrow">What to expect</p>
            <h2 id="iv-expect-title">You don’t need to push through the fear</h2>
            <p className="iv__video-subtitle">We are here to help you.</p>
          </header>
          <div className="iv__video">
            <video ref={videoRef} src={sedationVideo.src} poster={sedationVideo.poster} controls={hasStarted} playsInline preload="metadata" tabIndex={0} aria-label="Dr. Tarkesh explains what to expect with IV sedation" onPlay={() => setHasStarted(true)} />
            {!hasStarted && <button className="iv__play" type="button" onClick={playVideo} aria-label="Play Dr. Tarkesh’s IV sedation video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3 21 12 7 21Z" /></svg></button>}
          </div>
        </div>
      </section>

      <section className="iv__section iv__dark iv__patients" aria-labelledby="iv-patients-title">
        <div className="iv__inner iv__patient-card">
          <img src={patientImage} alt="Dr. Tarkesh in green scrubs explaining treatment to a patient in a dental chair" loading="lazy" />
          <div className="iv__patient-copy">
            <p className="iv__eyebrow">For patients who feel anxious</p>
            <h2 id="iv-patients-title">Your comfort is part<br className="iv__desktop-break" /> of the treatment plan.</h2>
            <p>Dr. Tarkesh will listen to your concerns, review your health history, and discuss whether IV sedation is right for you. He personally administers the sedation, so the same doctor planning your treatment is caring for you throughout the procedure.</p>
            <a className="iv__cta" href={consultationPhone}>Talk to us about IV sedation</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IV
