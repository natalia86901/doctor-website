import standard from '../../assets/pricingFinancing/standard-dentures-soft.png'
import custom from '../../assets/pricingFinancing/custom-dentures-soft.png'
import snapIn from '../../assets/pricingFinancing/snap-in.png'
import allOn4 from '../../assets/pricingFinancing/all-on-4.png'
import PricingHero from './PricingHero'
import NewPatientOffer from './NewPatientOffer'
import PricingTable from './PricingTable'
import ConsultationSection from './ConsultationSection'
import './PricingFinancing.css'

export default function PricingFinancing() {
  return <main className="pricing-financing">
    <PricingHero />
    <NewPatientOffer />
    <PricingTable id="pricing-dentures-title" title="New Denture Patients" treatments={[
      { name: 'Standard Dentures', image: standard, alt: 'Standard upper and lower dentures', price: '$650–$1,100' },
      { name: 'Customized Dentures', image: custom, alt: 'Customized upper and lower dentures', price: '$1,500–$2,000' },
    ]} />
    <PricingTable id="pricing-implants-title" title="Implants" treatments={[
      { name: 'Snap-In', image: snapIn, alt: 'Removable snap-in denture with implant attachments', price: '$7,000–$15,000' },
      { name: 'All-on-4', image: allOn4, alt: 'All-on-4 fixed teeth with four implant openings', price: '$15,000–$25,000' },
    ]} />
    <ConsultationSection />
  </main>
}
