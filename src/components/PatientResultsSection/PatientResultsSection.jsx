import { useLayoutEffect, useRef, useState } from "react";
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
  const [mode, setMode] = useState("comparison");
  const afterButtonRef = useRef(null);
  const beforeButtonRef = useRef(null);
  const compareButtonRef = useRef(null);

  const pendingFocusRef = useRef(null);

  function showMode(nextMode) {
    const hiddenButton = nextMode === "after" ? afterButtonRef.current
      : nextMode === "before" ? beforeButtonRef.current : compareButtonRef.current;
    // Capture focus before CSS hides the previously focused button.
    if (hiddenButton === document.activeElement) {
      pendingFocusRef.current = nextMode === "after" ? beforeButtonRef : afterButtonRef;
    }
    setMode(nextMode);
  }

  useLayoutEffect(() => {
    pendingFocusRef.current?.current.focus({ preventScroll: true });
    pendingFocusRef.current = null;
  }, [mode]);

  const images = [
    { mode: "comparison", src: result.comparisonImage, width: 1200, height: 896,
      alt: `Before and after dental treatment comparison, patient result ${result.id}` },
    { mode: "after", src: result.afterImage, width: 1600, height: 1068,
      alt: `Teeth after dental treatment, patient result ${result.id}` },
    { mode: "before", src: result.beforeImage, width: 1600, height: 1068,
      alt: `Teeth before dental treatment, patient result ${result.id}` },
  ];

  return (
    <div className="patient-results__comparison" data-mode={mode}
      role="group" aria-label={`Before and after treatment, patient ${result.id}`}>
      <div className="patient-results__surface">
        {images.map((image) => (
          <img key={image.mode} className="patient-results__image"
            data-active={mode === image.mode} aria-hidden={mode !== image.mode}
            src={image.src} alt={image.alt} width={image.width} height={image.height}
            draggable="false" />
        ))}
        <div className="patient-results__handle">
          <button type="button" className="patient-results__arrow"
            ref={afterButtonRef} tabIndex={mode === "after" ? -1 : 0}
            aria-hidden={mode === "after"} aria-label="Show full After image" onClick={() => showMode("after")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          </button>
          <button type="button" className="patient-results__arrow"
            ref={beforeButtonRef} tabIndex={mode === "before" ? -1 : 0}
            aria-hidden={mode === "before"} aria-label="Show full Before image" onClick={() => showMode("before")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="patient-results__labels">
        <span className="patient-results__label" aria-hidden="true">BEFORE</span>
        <span className="patient-results__label" aria-hidden="true">AFTER</span>
        <button type="button" className="patient-results__compare" ref={compareButtonRef}
          aria-label="Compare Before and After images" aria-hidden={mode === "comparison"}
          tabIndex={mode === "comparison" ? -1 : 0} onClick={() => showMode("comparison")}>
          Compare
        </button>
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
