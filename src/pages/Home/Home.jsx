import Hero from '../../components/Hero/Hero'
import ComplexCasesBanner from '../../components/ComplexCasesBanner/ComplexCasesBanner'
import TreatmentPromiseBanner from '../../components/TreatmentPromiseBanner/TreatmentPromiseBanner'
import TreatmentSolutionsSection from '../../components/TreatmentSolutionsSection/TreatmentSolutionsSection'
import WhyItsPossibleSection from '../../components/WhyItsPossibleSection/WhyItsPossibleSection'
import TreatmentOptionsSection from '../../components/TreatmentOptionsSection/TreatmentOptionsSection'
import PatientResultsSection from '../../components/PatientResultsSection/PatientResultsSection'
import PracticeBenefitsSection from '../../components/PracticeBenefitsSection/PracticeBenefitsSection'
import TreatmentProcessSection from '../../components/TreatmentProcessSection/TreatmentProcessSection'
import FinancingOptionsSection from '../../components/FinancingOptionsSection/FinancingOptionsSection'

function Home() {
  return (
    <>
      <Hero />
      <TreatmentPromiseBanner />
      <TreatmentSolutionsSection />
      <ComplexCasesBanner />
      <WhyItsPossibleSection />
      <TreatmentOptionsSection />
      <PatientResultsSection />
      <PracticeBenefitsSection />
      <TreatmentProcessSection />
      <FinancingOptionsSection />
    </>
  )
}

export default Home
