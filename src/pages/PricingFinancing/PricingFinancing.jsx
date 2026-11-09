import standard from '../../assets/pricingFinancing/standard-dentures-soft.png'
import custom from '../../assets/pricingFinancing/custom-dentures-soft.png'
import snapIn from '../../assets/pricingFinancing/snap-in.png'
import allOn4 from '../../assets/pricingFinancing/all-on-4.png'
import PricingHero from './PricingHero'
import NewPatientOffer from './NewPatientOffer'
import PricingTable from './PricingTable'
import ConsultationSection from './ConsultationSection'
import { useSanityQuery } from '../../lib/useSanityQuery'
import { PRICING_PAGE_QUERY } from '../../lib/queries'
import { urlFor } from '../../lib/sanity'
import './PricingFinancing.css'

const defaultTables = [
  {
    id: 'pricing-dentures-title',
    title: 'New Denture Patients',
    treatments: [
      { name: 'Standard Dentures', image: standard, alt: 'Standard upper and lower dentures', price: '$650–$1,100' },
      { name: 'Customized Dentures', image: custom, alt: 'Customized upper and lower dentures', price: '$1,500–$2,000' },
    ],
  },
  {
    id: 'pricing-implants-title',
    title: 'Implants',
    treatments: [
      { name: 'Snap-In', image: snapIn, alt: 'Removable snap-in denture with implant attachments', price: '$7,000–$15,000' },
      { name: 'All-on-4', image: allOn4, alt: 'All-on-4 fixed teeth with four implant openings', price: '$15,000–$25,000' },
    ],
  },
]

function slugify(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function mapTables(cmsTables) {
  if (!cmsTables?.length) return defaultTables
  return cmsTables.map((table, index) => ({
    id: `pricing-${slugify(table.title) || index}-title`,
    title: table.title,
    treatments: (table.treatments ?? []).map((treatment) => ({
      name: treatment.name,
      image: treatment.image ? urlFor(treatment.image).width(600).url() : undefined,
      alt: treatment.imageAlt || treatment.name,
      price: treatment.price,
    })),
  }))
}

export default function PricingFinancing() {
  const data = useSanityQuery(PRICING_PAGE_QUERY)
  const tables = mapTables(data?.pricingTables)

  return <main className="pricing-financing">
    <PricingHero title={data?.heroTitle} paragraphs={data?.heroParagraphs} />
    <NewPatientOffer offer={data?.offer} />
    {tables.map((table) => (
      <PricingTable key={table.id} id={table.id} title={table.title} treatments={table.treatments} />
    ))}
    <ConsultationSection title={data?.consultationTitle} text={data?.consultationText} />
  </main>
}
