import implantBackground from "../../assets/implants.png";
import "./MethodResultsSection.css";

function MethodResultsSection() {
  return (
    <section
      className="method-results"
      aria-labelledby="method-results-heading"
    >

      <img
        className="method-results__background"
        src={implantBackground}
        alt=""
        aria-hidden="true"
        decoding="async"
      />

      <div className="method-results__inner">
        <p className="method-results__eyebrow">
          THE RESULTS BEHIND THE METHOD
        </p>

        <h2
          id="method-results-heading"
          className="sr-only"
        >
          Results behind Dr. Tarkesh&apos;s method
        </h2>

        <div className="method-results__stats">
          <article className="method-results__stat">
            <p
              className="method-results__value"
              aria-label="1,300 plus patients"
            >
              <span className="method-results__number">
                1,300
              </span>

              <span
                className="method-results__accent"
                aria-hidden="true"
              >
                +
              </span>
            </p>

            <p className="method-results__description">
              PATIENTS WITH HEALTHY,
              <br />
              CONFIDENT SMILES
            </p>
          </article>

          <article className="method-results__stat">
            <p
              className="method-results__value"
              aria-label="Five years of successful practice"
            >
              <span className="method-results__number">
                5 YEARS
              </span>
            </p>

            <p className="method-results__description">
              OF SUCCESSFUL PRACTICE
              <br />
              USING DR. TARKESH&apos;S
              <br />
              SIGNATURE METHODOLOGY
            </p>
          </article>

          <article className="method-results__stat">
            <p
              className="method-results__value method-results__value--stacked"
              aria-label="Tens of thousands of smiles and happy moments"
            >
              <span className="method-results__number">
                TENS OF
              </span>

              <span className="method-results__number">
                THOUSANDS
              </span>
            </p>

            <p className="method-results__description">
              OF SMILES AND HAPPY
              <br />
              MOMENTS
            </p>
          </article>
        </div>

        <a
          className="method-results__cta"
          href="/why-dr-tarkesh/meet-dr-tarkesh#meet-dr-tarkesh"
          aria-label="Meet Dr. Tarkesh"
        >
          <span>MEET DR. TARKESH</span>

          <span
            className="method-results__cta-arrow"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}

export default MethodResultsSection;