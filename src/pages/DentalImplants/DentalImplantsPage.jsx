import DentalImplantsExpertiseSection from '../../components/DentalImplantsExpertiseSection/DentalImplantsExpertiseSection'
import DentalImplantsHeroSection from '../../components/DentalImplantsHeroSection/DentalImplantsHeroSection'
import DentureDesignComparisonSection from '../../components/DentureDesignComparisonSection/DentureDesignComparisonSection'
import DentalImplantsPromiseSection from '../../components/DentalImplantsPromiseSection/DentalImplantsPromiseSection'
import DentalImplantsPatientStorySection from '../../components/DentalImplantsPatientStorySection/DentalImplantsPatientStorySection'
import TeethOptionsComparisonSection from '../../components/TeethOptionsComparisonSection/TeethOptionsComparisonSection'
import DentalImplantsTransitionSection from '../../components/DentalImplantsTransitionSection/DentalImplantsTransitionSection'
import './DentalImplantsPage.css'

function DentalImplantsPage() {
  return (
    <main className="dental-implants-page">
      <DentalImplantsHeroSection />
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
      <DentalImplantsPatientStorySection />
    </main>
  )
}

export default DentalImplantsPage
