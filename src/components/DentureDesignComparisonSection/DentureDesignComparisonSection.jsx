import { useRef, useState } from 'react'
import palateFreeCoverage from '../../assets/dentalImplants/client-oct14/without-palate-transparent.png'
import traditionalFullCoverage from '../../assets/dentalImplants/client-oct14/traditional-coverage-transparent.png'
import './DentureDesignComparisonSection.css'

const traditionalFeatures = [
  { icon: 'taste', label: 'Taste & Food', description: 'Food may feel less natural.' },
  { icon: 'temperature', label: 'Temperature', description: 'Less direct sensation of hot and cold.' },
  { icon: 'texture', label: 'Texture', description: 'Acrylic separates food from the palate.' },
  { icon: 'feel', label: 'Feel in Mouth', description: 'More material inside the mouth.' },
  { icon: 'speech', label: 'Speech', description: 'May require more time to adapt.' },
  { icon: 'gag', label: 'Gag Reflex', description: 'Palate coverage may trigger sensitivity in some patients.' },
]

const palateFreeFeatures = [
  { icon: 'taste', label: 'Taste & Food', description: 'More natural eating experience.' },
  { icon: 'temperature', label: 'Temperature', description: 'Palate can feel temperature directly.' },
  { icon: 'texture', label: 'Texture', description: 'More direct sensation of food texture.' },
  { icon: 'feel', label: 'Feel in Mouth', description: 'Less bulk. More open and natural feeling.' },
  { icon: 'speech', label: 'Speech', description: 'Often feels more natural for the tongue.' },
  { icon: 'gag', label: 'Gag Reflex', description: 'No material covering the palate.' },
  { icon: 'design', label: 'Design', description: 'Horseshoe-shaped. Palate remains open.' },
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
    <svg className="denture-comparison__icon" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="1.6" 
    strokeLinecap="round" strokeLinejoin="round" 
    aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

function FeatureGroup({ features, tone, title, isVisible }) {
  return (
    <section
      className={`denture-comparison__feature-group denture-comparison__feature-group--${tone} ${isVisible ? '' 
      : 'denture-comparison__feature-group--hidden'}`}
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
  const [position, setPosition] = useState(50)
  const stageRef = useRef(null)
  const handleRef = useRef(null)
  const pointerRef = useRef(null)
  const activeDesign = position === 0 ? 'palateFree' : position === 100 ? 'traditional' : 'compare'

  function updatePosition(clientX) {
    const bounds = stageRef.current.getBoundingClientRect()
    setPosition(Math.max(0, Math.min(100, (clientX - bounds.left) / bounds.width * 100)))
  }

  function startDrag(event) {
    if (!event.isPrimary || event.button !== 0 || pointerRef.current !== null) return
    pointerRef.current = event.pointerId
    event.currentTarget.setPointerCapture(event.pointerId)
    handleRef.current.focus({ preventScroll: true })
    updatePosition(event.clientX)
  }

  function endDrag(event) {
    if (pointerRef.current !== event.pointerId) return
    pointerRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  function handleKeyDown(event) {
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      setPosition(event.key === 'Home' ? 0 : 100)
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      setPosition(value => Math.max(0, Math.min(100, value + (event.key === 'ArrowLeft' ? -2 : 2))))
    }
  }

  return (
    <section className={`denture-comparison denture-comparison--${activeDesign}`} style={{ '--comparison-position': `${position}%` }} aria-labelledby="denture-design-comparison-heading">
      <div className="denture-comparison__inner">
        <header className="denture-comparison__header">
          <h2 id="denture-design-comparison-heading" className="denture-comparison__title">
            One Denture. Two Designs
          </h2>
          <p className="denture-comparison__subtitle">
            <span>Different feel.</span> <strong>Same goal.</strong>
          </p>
        </header>

        <div className="denture-comparison__labels" aria-live="polite">
          <div className={`denture-comparison__label denture-comparison__label--traditional ${activeDesign === 'palateFree' ? 'denture-comparison__label--hidden' : ''}`} aria-hidden={activeDesign === 'palateFree'}>
            <h3>Traditional Full Coverage</h3>
          </div>
          <div className={`denture-comparison__label denture-comparison__label--palate-free ${activeDesign === 'traditional' ? 'denture-comparison__label--hidden' : ''}`} aria-hidden={activeDesign === 'traditional'}>
            <h3>Without Palate Coverage</h3>
          </div>
        </div>

        <div ref={stageRef} className="denture-comparison__stage" onPointerDown={startDrag}
          onPointerMove={event => { if (pointerRef.current === event.pointerId) updatePosition(event.clientX) }}
          onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={() => { pointerRef.current = null }}>
          <div className="denture-comparison__layer denture-comparison__layer--traditional" aria-hidden={activeDesign === 'palateFree'}>
          <img
            className="denture-comparison__image denture-comparison__image--traditional"
            src={traditionalFullCoverage}
            alt="Traditional full coverage implant-supported upper denture with palate coverage"
            aria-hidden={activeDesign === 'palateFree'}
            draggable="false"
          />
          </div>
          <div className="denture-comparison__layer denture-comparison__layer--palate-free" aria-hidden={activeDesign === 'traditional'}>
          <img
            className="denture-comparison__image denture-comparison__image--palate-free"
            src={palateFreeCoverage}
            alt="Palate-free horseshoe-shaped implant-supported upper denture"
            aria-hidden={activeDesign === 'traditional'}
            draggable="false"
          />
          </div>
          <span className="denture-comparison__divider" aria-hidden="true" />
          <div ref={handleRef} className="denture-comparison__controls" role="slider" tabIndex={0}
            aria-label="Compare denture designs" aria-orientation="horizontal" aria-valuemin={0} aria-valuemax={100}
            aria-valuenow={Math.round(position)} aria-valuetext={`${Math.round(position)}% Traditional Full Coverage, ${100 - Math.round(position)}% Without Palate Coverage`}
            onKeyDown={handleKeyDown}>
            <span className="denture-comparison__handle-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
            </span>
          </div>
        </div>

        <div className="denture-comparison__features">
          <FeatureGroup features={traditionalFeatures} tone="traditional" title="Traditional Full Coverage" isVisible={activeDesign !== 'palateFree'} />
          <FeatureGroup features={palateFreeFeatures} tone="palate-free" title="Without Palate Coverage" isVisible={activeDesign !== 'traditional'} />
        </div>

      </div>
    </section>
  )
}

export default DentureDesignComparisonSection
