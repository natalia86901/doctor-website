import DentalImplantsExpertiseSection from '../../components/DentalImplantsExpertiseSection/DentalImplantsExpertiseSection'
import DentalImplantsHeroSection from '../../components/DentalImplantsHeroSection/DentalImplantsHeroSection'
import DentureDesignComparisonSection from '../../components/DentureDesignComparisonSection/DentureDesignComparisonSection'
import DentalImplantsPromiseSection from '../../components/DentalImplantsPromiseSection/DentalImplantsPromiseSection'
import DentalImplantsPatientStorySection from '../../components/DentalImplantsPatientStorySection/DentalImplantsPatientStorySection'
import TeethOptionsComparisonSection from '../../components/TeethOptionsComparisonSection/TeethOptionsComparisonSection'
import './DentalImplantsPage.css'

function DentalImplantsPage() {
  return (
    <main>
      <DentalImplantsHeroSection />
      <DentalImplantsExpertiseSection/>
      <DentureDesignComparisonSection />
      <DentalImplantsPromiseSection />
      <TeethOptionsComparisonSection />
      <DentalImplantsPatientStorySection />
    </main>
  )
}

export default DentalImplantsPage