import './MeetDrTarkesh.css'
import videoOne from '../../assets/videos/video1.mp4'
import videoTwo from '../../assets/videos/video2.mp4'

function MeetDrTarkesh() {
  return (
    <section id="meet-dr-tarkesh" className="meet-dr-tarkesh">
      <section className="meet-dr-tarkesh__intro" aria-labelledby="meet-dr-tarkesh-title">
        <p className="meet-dr-tarkesh__eyebrow">Why Dr. Tarkesh</p>
        <h1 id="meet-dr-tarkesh-title" className="meet-dr-tarkesh__title">
          MEET DR. TARKESH
        </h1>
        <p className="meet-dr-tarkesh__description">
          A thoughtful approach to advanced dentistry, grounded in experience,
          precision, and patient care.
        </p>
      </section>

      <section className="meet-dr-tarkesh__videos" aria-label="Meet Dr. Tarkesh videos">
        <article className="meet-dr-tarkesh__video-card">
          <video
            className="meet-dr-tarkesh__video"
            controls
            playsInline
            preload="metadata"
            src={videoOne}
          >
            Your browser does not support the video tag.
          </video>
        </article>
        <article className="meet-dr-tarkesh__video-card">
          <video
            className="meet-dr-tarkesh__video"
            controls
            playsInline
            preload="metadata"
            src={videoTwo}
          >
            Your browser does not support the video tag.
          </video>
        </article>
      </section>
    </section>
  )
}

export default MeetDrTarkesh