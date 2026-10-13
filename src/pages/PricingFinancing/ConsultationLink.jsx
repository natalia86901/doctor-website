const officeContact = '/contact/schedule-consultation'

export default function ConsultationLink({ children, variant = 'navy', arrow = false }) {
  return <a className={`pricing-financing__cta pricing-financing__cta--${variant}`} href={officeContact}>
    {children}{arrow && <span aria-hidden="true"> →</span>}
  </a>
}
