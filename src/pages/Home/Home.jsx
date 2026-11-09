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
import { useSanityQuery } from '../../lib/useSanityQuery'
import { HOME_PAGE_QUERY } from '../../lib/queries'
import { mapSanityCases } from '../../lib/mapCases'
import { urlFor } from '../../lib/sanity'

function Home() {
  const data = useSanityQuery(HOME_PAGE_QUERY)
  const heroImage = data?.heroImage ? urlFor(data.heroImage).width(2400).url() : undefined
  const cases = mapSanityCases(data?.selectedCases)

  return (
    <>
      <Hero heroImageOverride={heroImage} />
      <TreatmentPromiseBanner />
      <TreatmentSolutionsSection />
      <ComplexCasesBanner />
      <WhyItsPossibleSection />
      <TreatmentOptionsSection />
      <PatientResultsSection cases={cases} />
      <PracticeBenefitsSection />
      <TreatmentProcessSection />
      <FinancingOptionsSection />
    </>
  )
}

export default Home
