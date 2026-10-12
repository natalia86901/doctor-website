import { useRef, useState } from "react";
import "./PatientResultsSection.css";

import after1Image from "../../assets/patientResults/home-patient-1-after.webp";
import after2Image from "../../assets/patientResults/home-patient-2-after.webp";
import after3Image from "../../assets/patientResults/home-patient-3-after.webp";
import before1Image from "../../assets/patientResults/home-patient-1-before.webp";
import before2Image from "../../assets/patientResults/home-patient-2-before.webp";
import before3Image from "../../assets/patientResults/home-patient-3-before.webp";
import comparison1Image from "../../assets/patientResults/home-patient-1-comparison.webp";
import comparison2Image from "../../assets/patientResults/home-patient-2-comparison.webp";
import comparison3Image from "../../assets/patientResults/home-patient-3-comparison.webp";

const patientResults = [
  {
    id: 1,
    comparisonImage: comparison1Image,
    beforeImage: before1Image,
    afterImage: after1Image,
    quote: "I can eat comfortably again.",
  },
  {
    id: 2,
    comparisonImage: comparison2Image,
    beforeImage: before2Image,
    afterImage: after2Image,
    quote: "I feel like myself when I smile."
  },
  {
    id: 3,
    comparisonImage: comparison3Image,
    beforeImage: before3Image,
    afterImage: after3Image,
    quote: "Why didn't I do it sooner?",
  },
];

function PatientComparison({ result }) {
  const [position, setPosition] = useState(50);
  const surfaceRef = useRef(null);
  const pointerRef = useRef(null);

  function updatePosition(clientX) {
    const bounds = surfaceRef.current.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100, (clientX - bounds.left) / bounds.width * 100)));
  }

  function startDrag(event) {
    if (!event.isPrimary || event.button !== 0 || pointerRef.current !== null) return;
    pointerRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.focus({ preventScroll: true });
    updatePosition(event.clientX);
  }

  function endDrag(event) {
    if (pointerRef.current !== event.pointerId) return;
    pointerRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event) {
    const changes = { ArrowLeft: -1, ArrowRight: 1 };
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setPosition(event.key === "Home" ? 0 : 100);
    } else if (event.key in changes) {
      event.preventDefault();
      setPosition((value) => Math.max(0, Math.min(100, value + changes[event.key])));
    }
  }

  const images = [
    { mode: "comparison", src: result.comparisonImage, width: 1200, height: 896,
      alt: `Before and after dental treatment comparison, patient result ${result.id}` },
    { mode: "after", src: result.afterImage, width: 1600, height: 1068,
      alt: `Teeth after dental treatment, patient result ${result.id}` },
    { mode: "before", src: result.beforeImage, width: 1600, height: 1068,
      alt: `Teeth before dental treatment, patient result ${result.id}` },
  ];

  return (
    <div className="patient-results__comparison" data-endpoint={position === 0 ? "after" : position === 100 ? "before" : undefined} style={{ "--comparison-position": `${position}%` }}
      role="group" aria-label={`Before and after treatment, patient ${result.id}`}>
      <div className="patient-results__surface" ref={surfaceRef}>
        {images.map((image) => (
          <div key={image.mode} className="patient-results__layer" data-image={image.mode}
            aria-hidden={image.mode === "comparison"}>
            <img className="patient-results__image"
              src={image.src} alt={image.alt} width={image.width} height={image.height}
              draggable="false" />
          </div>
        ))}
        <div className="patient-results__divider" aria-hidden="true" />
        <div className="patient-results__handle" role="slider" tabIndex={0}
          aria-label={`Before and after comparison, patient ${result.id}`}
          aria-orientation="horizontal" aria-valuemin={0} aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% Before, ${100 - Math.round(position)}% After`}
          onKeyDown={handleKeyDown} onPointerDown={startDrag}
          onPointerMove={(event) => {
            if (pointerRef.current === event.pointerId) updatePosition(event.clientX);
          }}
          onPointerUp={endDrag} onPointerCancel={endDrag}
          onLostPointerCapture={() => { pointerRef.current = null; }}>
          <span className="patient-results__handle-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
      <div className="patient-results__labels">
        <span className="patient-results__label" aria-hidden="true">BEFORE</span>
        <span className="patient-results__label" aria-hidden="true">AFTER</span>
      </div>
    </div>
  );
}

function PatientResultsSection() {
  return (
    <section
      className="patient-results"
      aria-labelledby="patient-results-heading"
    >
      <div className="patient-results__inner">
        <header className="patient-results__header">
          <p className="patient-results__eyebrow">PATIENT RESULTS</p>
          <h2 id="patient-results-heading" className="patient-results__title">
            Real Patients. Meaningful Change
          </h2>
        </header>

        <div className="patient-results__grid">
          {patientResults.map((result) => (
            <article className="patient-results__case" key={result.id}>
              <PatientComparison result={result} />

              <blockquote className="patient-results__quote">
                <span className="patient-results__quote-mark" aria-hidden="true">
                  “
                </span>
                <p className="patient-results__quote-text">{result.quote}</p>
                {result.attribution && (
                  <footer className="patient-results__attribution">
                    — {result.attribution}
                  </footer>
                )}
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PatientResultsSection;
