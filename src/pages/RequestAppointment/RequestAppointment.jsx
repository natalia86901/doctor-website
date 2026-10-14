import { useState } from 'react'
import './RequestAppointment.css'

const ENDPOINT = '/contact.php'

function BenefitIcon({ kind }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    {kind === 'clock' ? <><circle cx="16" cy="16" r="12" /><path d="M16 8v9l6 4" /></> : kind === 'shield' ? <><path d="m16 3 11 4v9c0 7-11 13-11 13S5 23 5 16V7Z" /><path d="m10 15 4 4 8-9" /></> : <path d="M6 5h20a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H14l-8 5v-5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />}
  </svg>
}

const benefits = [
  ['clock', 'Fast & Easy', 'Takes less than a minute.'],
  ['shield', 'Your Information Is Safe', 'We respect your privacy.'],
  ['chat', 'We’ll Be in Touch', 'Our team will contact you shortly to confirm your visit.'],
]

export default function RequestAppointment() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    setStatus('sending')
    setErrorMessage('')
    try {
      const response = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.ok) throw new Error(result.error || 'Something went wrong. Please try again or call us.')
      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(error instanceof TypeError ? 'Network error. Please check your connection and try again.' : error.message)
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return <main className="appointment">
    <div className="appointment__layout">
      <section className="appointment__intro" aria-labelledby="appointment-title">
        <p className="appointment__eyebrow">New Patients</p>
        <h1 id="appointment-title">Request an Appointment</h1>
        <div className="appointment__rule" aria-hidden="true" />
        <p className="appointment__description">Fill out the form below and we’ll get back to you soon. It’s quick, easy, and no phone call needed.</p>
        <ul className="appointment__benefits">{benefits.map(([kind, title, copy]) => <li key={kind}>
          <span className="appointment__icon"><BenefitIcon kind={kind} /></span>
          <div><h3>{title}</h3><p>{copy}</p></div>
        </li>)}</ul>
      </section>
      <form className="appointment__form" onSubmit={handleSubmit} aria-label="Request an Appointment" aria-busy={sending}>
        <div className="appointment__field"><label htmlFor="appointment-name">Full Name <span>(Required) *</span></label><input id="appointment-name" name="name" autoComplete="name" placeholder="Your full name" required maxLength={150} /></div>
        <div className="appointment__field"><label htmlFor="appointment-phone">Phone Number <span>(Required) *</span></label><input id="appointment-phone" name="phone" type="tel" autoComplete="tel" placeholder="(661) 123-4567" required maxLength={30} /></div>
        <div className="appointment__field"><label htmlFor="appointment-email">Email Address <span>(Required) *</span></label><input id="appointment-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
        <div className="appointment__field"><label htmlFor="appointment-notes">Additional Notes <span>(Optional)</span></label><textarea id="appointment-notes" name="message" placeholder="Tell us more about your needs…" rows={4} maxLength={3000} /></div>
        <input type="checkbox" name="botcheck" className="appointment__honeypot" tabIndex={-1} aria-hidden="true" />
        <button className="appointment__submit" type="submit" disabled={sending}>
          {sending && <span className="appointment__spinner" aria-hidden="true" />}
          {sending ? 'Sending…' : 'Send Appointment Request'}
        </button>
        <p className={`appointment__status appointment__status--${status}`} role="status" aria-live="polite">
          {status === 'success' && 'Thank you! Your request has been sent. Our team will contact you shortly to confirm your visit.'}
          {status === 'error' && errorMessage}
        </p>
        <p className="appointment__privacy"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3M5 10h14v12H5Z" fill="none" stroke="currentColor" strokeWidth="2" /></svg><span>Your information is safe and will only be used to contact you about your appointment.</span></p>

      </form>
    </div>
  </main>
}
