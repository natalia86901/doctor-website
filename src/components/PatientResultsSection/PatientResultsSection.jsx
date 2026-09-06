import "./PatientResultsSection.css";

import after1Image from "../../assets/patientResults/After1.png";
import after2Image from "../../assets/patientResults/After2.png";
import after3Image from "../../assets/patientResults/After3.png";
import before1Image from "../../assets/patientResults/Before1.png";
import before2Image from "../../assets/patientResults/Before2.png";
import before3Image from "../../assets/patientResults/Before3.png";

const patientResults = [
  {
    id: 1,
    beforeImage: before1Image,
    afterImage: after1Image,
    quote: "I can eat comfortably again.",
  },
  {
    id: 2,
    beforeImage: before2Image,
    afterImage: after2Image,
    quote: "I feel like myself when I smile."
  },
  {
    id: 3,
    beforeImage: before3Image,
    afterImage: after3Image,
    quote: "Why didn't I do it sooner?",
  },
];

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
            REAL PATIENTS. MEANINGFUL CHANGE.
          </h2>
        </header>

        <div className="patient-results__grid">
          {patientResults.map((result) => (
            <article className="patient-results__case" key={result.id}>
              <div className="patient-results__comparison">
                <figure className="patient-results__figure">
                  <img
                    className="patient-results__image"
                    src={result.beforeImage}
                    alt={`Teeth before dental treatment, patient result ${result.id}`}
                  />
                  <figcaption className="patient-results__label">
                    BEFORE
                  </figcaption>
                </figure>

                <figure className="patient-results__figure">
                  <img
                    className="patient-results__image"
                    src={result.afterImage}
                    alt={`Teeth after dental treatment, patient result ${result.id}`}
                  />
                  <figcaption className="patient-results__label">
                    AFTER
                  </figcaption>
                </figure>
              </div>

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