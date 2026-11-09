import DentalImplantsExpertiseSection from '../../components/DentalImplantsExpertiseSection/DentalImplantsExpertiseSection'
import DentalImplantsHeroSection from '../../components/DentalImplantsHeroSection/DentalImplantsHeroSection'
import DentureDesignComparisonSection from '../../components/DentureDesignComparisonSection/DentureDesignComparisonSection'
import DentalImplantsPromiseSection from '../../components/DentalImplantsPromiseSection/DentalImplantsPromiseSection'
import DentalImplantsPatientStorySection from '../../components/DentalImplantsPatientStorySection/DentalImplantsPatientStorySection'
import TeethOptionsComparisonSection from '../../components/TeethOptionsComparisonSection/TeethOptionsComparisonSection'
import DentalImplantsTransitionSection from '../../components/DentalImplantsTransitionSection/DentalImplantsTransitionSection'
import PatientResultsSection from '../../components/PatientResultsSection/PatientResultsSection'
import { useSanityQuery } from '../../lib/useSanityQuery'
import { DENTAL_IMPLANTS_PAGE_QUERY } from '../../lib/queries'
import { mapSanityCases } from '../../lib/mapCases'
import { urlFor } from '../../lib/sanity'
import './DentalImplantsPage.css'

function DentalImplantsPage() {
  const data = useSanityQuery(DENTAL_IMPLANTS_PAGE_QUERY)
  const heroImage = data?.heroImage ? urlFor(data.heroImage).width(1600).url() : undefined
  const cases = mapSanityCases(data?.selectedCases)

  return (
    <main className="dental-implants-page">
      <DentalImplantsHeroSection heroImageOverride={heroImage} />
      <section className="implants-expertise-steps" aria-label="Our approach to implant treatment">
        <ol className="implants-expertise-steps__list">
          {[
            ['01', 'Digital Planning', 'Every detail considered before treatment begins'],
            ['02', 'Clinical Expertise', 'Advanced decisions guided by experience'],
            ['03', 'Custom Craftsmanship', 'Designed specifically for your anatomy and smile'],
          ].map(([number, title, description]) => (
            <li className="implants-expertise-steps__item" key={number}>
              <h2 className="implants-expertise-steps__title"><span>{number} —</span> {title}</h2>
              <p className="implants-expertise-steps__description">{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <DentalImplantsExpertiseSection />
      <DentureDesignComparisonSection />
      <DentalImplantsTransitionSection />
      <DentalImplantsPromiseSection />
      <TeethOptionsComparisonSection />
      {cases && <PatientResultsSection cases={cases} />}
      <DentalImplantsPatientStorySection />
    </main>
  )
}

export default DentalImplantsPage
