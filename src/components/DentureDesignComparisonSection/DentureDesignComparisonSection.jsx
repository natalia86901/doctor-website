import { useState } from 'react'
import palateFreeCoverage from '../../assets/dentalImplants/dentureComparison/palateFreeCoverage.PNG'
import traditionalFullCoverage from '../../assets/dentalImplants/dentureComparison/traditionalFullCoverage.PNG'
import './DentureDesignComparisonSection.css'

const traditionalFeatures = [
  { icon: 'taste', label: 'TASTE & FOOD', description: 'Food may feel less natural.' },
  { icon: 'temperature', label: 'TEMPERATURE', description: 'Less direct sensation of hot and cold.' },
  { icon: 'texture', label: 'TEXTURE', description: 'Acrylic separates food from the palate.' },
  { icon: 'feel', label: 'FEEL IN MOUTH', description: 'More material inside the mouth.' },
  { icon: 'speech', label: 'SPEECH', description: 'May require more time to adapt.' },
  { icon: 'gag', label: 'GAG REFLEX', description: 'Palate coverage may trigger sensitivity in some patients.' },
]

const palateFreeFeatures = [
  { icon: 'taste', label: 'TASTE & FOOD', description: 'More natural eating experience.' },
  { icon: 'temperature', label: 'TEMPERATURE', description: 'Palate can feel temperature directly.' },
  { icon: 'texture', label: 'TEXTURE', description: 'More direct sensation of food texture.' },
  { icon: 'feel', label: 'FEEL IN MOUTH', description: 'Less bulk. More open and natural feeling.' },
  { icon: 'speech', label: 'SPEECH', description: 'Often feels more natural for the tongue.' },
  { icon: 'gag', label: 'GAG REFLEX', description: 'No material covering the palate.' },
  { icon: 'design', label: 'DESIGN', description: 'Horseshoe-shaped. Palate remains open.' },
]

function FeatureIcon({ type }) {
  const paths = {
    taste: <><path d="M8 3v7M5.5 3v4.5a2.5 2.5 0 0 0 5 0V3M8 10v11" /><path d="M17 3v18M14.5 3v5a2.5 2.5 0 0 0 5 0V3" /></>,
    temperature: <><path d="M12 3a3 3 0 0 0-3 3v7.2a5 5 0 1 0 6 0V6a3 3 0 0 0-3-3Z" /><path d="M12 8v8" /></>,
    texture: <><path d="M3 8c3-4 6 4 9 0s6 4 9 0M3 12c3-4 6 4 9 0s6 4 9 0M3 16c3-4 6 4 9 0s6 4 9 0" /></>,
    feel: <><path d="M5 12c0-2 1.5-3 3-2l3 1V5a1.5 1.5 0 0 1 3 0v5l1-2a1.5 1.5 0 0 1 2.8.8l-.4 3.4c-.4 3.4-2.4 6.8-6.2 6.8H9c-2.2 0-4-1.8-4-4v-3Z" /></>,
    speech: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v6a3.5 3.5 0 0 1-3.5 3.5H11l-4.5 4v-4.1A3.5 3.5 0 0 1 4 11.5v-6Z" /></>,
    gag: <><path d="M12 3a8 8 0 1 0 8 8" /><path d="M12 7v5l3 2" /><path d="M17 3h4v4" /></>,
    design: <><path d="M4 7c2.5-3 5-4 8-4s5.5 1 8 4" /><path d="M4 7c0 7 3 12 8 12s8-5 8-12" /><path d="M8 8v3M16 8v3" /></>,
  }

  return (
    <svg className="denture-comparison__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function FeatureGroup({ features, tone, title, isVisible }) {
  return (
    <section
      className={`denture-comparison__feature-group denture-comparison__feature-group--${tone} ${isVisible ? '' : 'denture-comparison__feature-group--hidden'}`}
      aria-hidden={!isVisible}
    >
      <h3 className="denture-comparison__feature-title">{title}</h3>
      <ul className="denture-comparison__feature-list">
        {features.map((feature) => (
          <li className="denture-comparison__feature" key={feature.label}>
            <span className="denture-comparison__icon-badge">
              <FeatureIcon type={feature.icon} />
            </span>
            <p className="denture-comparison__feature-copy">
              <strong>{feature.label}:</strong> {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function DentureDesignComparisonSection() {
  const [activeDesign, setActiveDesign] = useState('compare')

  return (
    <section className={`denture-comparison denture-comparison--${activeDesign}`} aria-labelledby="denture-design-comparison-heading">
      <div className="denture-comparison__inner">
        <header className="denture-comparison__header">
          <h2 id="denture-design-comparison-heading" className="denture-comparison__title">
            ONE DENTURE. TWO DESIGNS.
          </h2>
          <p className="denture-comparison__subtitle">
            <span>DIFFERENT FEEL.</span> <strong>SAME GOAL.</strong>
          </p>
        </header>

        <div className="denture-comparison__labels" aria-live="polite">
          <div className={`denture-comparison__label denture-comparison__label--traditional ${activeDesign === 'palateFree' ? 'denture-comparison__label--hidden' : ''}`} aria-hidden={activeDesign === 'palateFree'}>
            <h3>TRADITIONAL FULL COVERAGE</h3>
            <p>Traditional Full Coverage</p>
          </div>
          <div className={`denture-comparison__label denture-comparison__label--palate-free ${activeDesign === 'traditional' ? 'denture-comparison__label--hidden' : ''}`} aria-hidden={activeDesign === 'traditional'}>
            <h3>WITHOUT PALATE COVERAGE</h3>
            <p>Palate-Free (Horseshoe Design)</p>
          </div>
        </div>

        <div className="denture-comparison__stage">
          <img
            className="denture-comparison__image denture-comparison__image--traditional"
            src={traditionalFullCoverage}
            alt="Traditional full coverage implant-supported upper denture with palate coverage"
            aria-hidden={activeDesign === 'palateFree'}
          />
          <img
            className="denture-comparison__image denture-comparison__image--palate-free"
            src={palateFreeCoverage}
            alt="Palate-free horseshoe-shaped implant-supported upper denture"
            aria-hidden={activeDesign === 'traditional'}
          />
          <span className="denture-comparison__divider" aria-hidden="true" />
          <div className="denture-comparison__controls" aria-label="Choose denture design">
            <button type="button" aria-label="Show palate-free denture design" onClick={() => setActiveDesign('palateFree')}>
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" aria-label="Show traditional full coverage denture design" onClick={() => setActiveDesign('traditional')}>
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="denture-comparison__features">
          <FeatureGroup features={traditionalFeatures} tone="traditional" title="Traditional Full Coverage" isVisible={activeDesign !== 'palateFree'} />
          <FeatureGroup features={palateFreeFeatures} tone="palate-free" title="Palate-Free (Horseshoe Design)" isVisible={activeDesign !== 'traditional'} />
        </div>

        <footer className="denture-comparison__conclusion">
          <h3>BOTH OPTIONS ARE SECURELY SUPPORTED BY IMPLANTS<br />AND CUSTOMIZED FOR YOUR NEEDS.</h3>
          <p>Our goal is the same: to help you eat, speak, and smile with confidence and comfort.</p>
        </footer>
      </div>
    </section>
  )
}

export default DentureDesignComparisonSection