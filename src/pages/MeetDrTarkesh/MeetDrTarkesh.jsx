import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../components/Navbar/navConfig'
import heroImage from '../../assets/meetDrTarkesh/dr-tarkesh-hero.jpeg'
import treatmentImage from '../../assets/meetDrTarkesh/dr-tarkesh-treatment.png'
import videoSource from '../../assets/IV/iv-tarkesh.mp4'
import videoPoster from '../../assets/IV/iv-video-poster.jpg'
import './MeetDrTarkesh.css'

const consultationPhone = navItems.find(({ path }) => path === '/contact')
  .children.find(({ href }) => href?.startsWith('tel:')).href
const ivPath = navItems.find(({ path }) => path === '/services')
  .children.find(({ label }) => label === 'IV Sedation').path
const education = ['Engineering foundation', 'Biology & genetics', 'Biomedical sciences', 'Doctor of Dental Medicine', 'Advanced implant education', 'Ongoing global training']

function MeetDrTarkesh() {
  const videoRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [playError, setPlayError] = useState('')

  async function playVideo() {
    const video = videoRef.current
    video.controls = true
    try {
      await video.play()
      setHasStarted(true)
      setPlayError('')
      video.focus()
    } catch {
      video.controls = false
      setPlayError('The video could not start. Please try again.')
    }
  }

  return (
    <main className="tarkesh">
      <section className="tarkesh__section tarkesh__hero" aria-labelledby="tarkesh-title">
        <img className="tarkesh__hero-image" src={heroImage} alt="Dr. Nozar Tarkesh smiling in navy scrubs" fetchPriority="high" />
        <div className="tarkesh__inner tarkesh__hero-layout">
          <div className="tarkesh__hero-copy">
            <p className="tarkesh__eyebrow">Meet Dr. Nozar Tarkesh</p>
            <h1 id="tarkesh-title">Precision built on experience. Driven by continuous learning.</h1>
            <p>Dr. Nozar Tarkesh brings together an engineering mindset, advanced scientific education and years of focused training in implant dentistry. His path includes studies in Biology and Genetics, a Master’s degree in Biomedical Sciences and a Doctor of Dental Medicine degree from Midwestern University College of Dental Medicine in Arizona.</p>
            <p>But his education did not stop with dental school. Dr. Tarkesh has continued to pursue advanced implant training throughout the United States and internationally, dedicating thousands of hours to continuing education, complex implantology and full-mouth rehabilitation. Because in advanced dentistry, experience matters — but the willingness to keep learning matters just as much.</p>
            <p className="tarkesh__credentials">Engineering mindset · Advanced implant training · Global continuing education</p>
            <a className="tarkesh__cta" href={consultationPhone}>Meet with Dr. Tarkesh</a>
          </div>
          <ol className="tarkesh__education" aria-label="Dr. Tarkesh’s education and continuing training">
            {education.map((stage) => <li key={stage}>{stage}</li>)}
          </ol>
        </div>
      </section>

      <section className="tarkesh__section tarkesh__guidance" aria-labelledby="tarkesh-guidance-title">
        <div className="tarkesh__inner">
          <div className="tarkesh__ornament" aria-hidden="true"><span /><span /><span /></div>
          <h2 id="tarkesh-guidance-title">Expert guidance for every smile<br /> from simple to complex.</h2>
          <div className="tarkesh__rule" aria-hidden="true" />
        </div>
      </section>

      <section className="tarkesh__section tarkesh__introduction" aria-labelledby="tarkesh-introduction-title">
        <div className="tarkesh__inner tarkesh__split">
          <div>
            <div className="tarkesh__video">
              <video ref={videoRef} src={videoSource} poster={videoPoster} controls={hasStarted} playsInline preload="metadata" tabIndex={0} aria-label="Dr. Tarkesh discusses dentures and dental implants" onPlay={() => setHasStarted(true)} />
              {!hasStarted && <button className="tarkesh__play" type="button" onClick={playVideo} aria-label="Play Dr. Tarkesh’s dentures and dental implants video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3 21 12 7 21Z" /></svg></button>}
            </div>
            {playError && <p className="tarkesh__video-error" role="status">{playError}</p>}
          </div>
          <div className="tarkesh__intro-copy">
            <div className="tarkesh__short-rule" aria-hidden="true" />
            <h2 id="tarkesh-introduction-title">Dentures &amp; Dental Implants in Bakersfield, CA</h2>
            <p>Personalized care for dentures, dental implants and full-mouth restoration — from straightforward treatment to complex cases.</p>
          </div>
        </div>
      </section>

      <section className="tarkesh__section tarkesh__promise" aria-labelledby="tarkesh-promise-title">
        <div className="tarkesh__inner">
          <div className="tarkesh__ornament" aria-hidden="true"><span /><span /><span /></div>
          <h2 id="tarkesh-promise-title"><span>One Appointment</span><b aria-hidden="true">/</b><span>One Day</span><b aria-hidden="true">/</b><span>One Doctor</span></h2>
          <div className="tarkesh__rule" aria-hidden="true" />
          <p>It’s real. We guarantee it.</p>
          <span className="tarkesh__corner" aria-hidden="true" />
        </div>
      </section>

      <section className="tarkesh__section tarkesh__beyond" aria-labelledby="tarkesh-beyond-title">
        <div className="tarkesh__inner tarkesh__split">
          <img className="tarkesh__treatment-image" src={treatmentImage} alt="Dr. Tarkesh and a dental assistant treating a patient using magnification and digital imaging" loading="lazy" />
          <div className="tarkesh__beyond-copy">
            <p className="tarkesh__eyebrow">Beyond the technology</p>
            <h2 id="tarkesh-beyond-title">Expertise matters.<br /> So does how you feel.</h2>
            <p>Trust begins with listening. Dr. Tarkesh takes time to understand your concerns, explain your options and help you feel confident about your care.</p>
            <p>For patients who feel anxious about treatment, IV sedation may offer a calmer, more comfortable experience.</p>
            <Link className="tarkesh__cta" to={ivPath}>Learn more</Link>
            <h3>Your case is unique. Your treatment plan should be too.</h3>
            <a className="tarkesh__cta" href={consultationPhone}>Discuss a complex case</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MeetDrTarkesh
