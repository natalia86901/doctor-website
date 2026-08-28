import "./TreatmentPromiseBanner.css";

function TreatmentPromiseBanner() {
  return (
    <section
      className="treatment-promise"
      aria-labelledby="treatment-promise-heading"
    >
      <div className="treatment-promise__inner">
        {/* Decorative top line */}
        <div
          className="treatment-promise__line treatment-promise__line--top"
          aria-hidden="true"
        />

        {/* Decorative bottom line */}
        <div
          className="treatment-promise__line treatment-promise__line--bottom"
          aria-hidden="true"
        />

        {/* Three decorative dots */}
        <div
          className="treatment-promise__dots"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        {/* Top-right decorative corner */}
        <div
          className="treatment-promise__corner treatment-promise__corner--top-right"
          aria-hidden="true"
        >
          <span />
        </div>

        {/* Bottom-left decorative corner */}
        <div
          className="treatment-promise__corner treatment-promise__corner--bottom-left"
          aria-hidden="true"
        >
          <span />
        </div>

        <h2
          id="treatment-promise-heading"
          className="treatment-promise__title"
        >
          <span className="treatment-promise__title-group">
            <span>ONE APPOINTMENT</span>

            <span
              className="treatment-promise__separator"
              aria-hidden="true"
            >
              /
            </span>
          </span>

          <span className="treatment-promise__title-group">
            <span>ONE DAY</span>

            <span
              className="treatment-promise__separator"
              aria-hidden="true"
            >
              /
            </span>
          </span>

          <span className="treatment-promise__title-group">
            <span>ONE DOCTOR</span>
          </span>
        </h2>

        <div
          className="treatment-promise__divider"
          aria-hidden="true"
        />

        <p className="treatment-promise__subtitle">
          IT&apos;S REAL. WE GUARANTEE IT.
        </p>
      </div>
    </section>
  );
}

export default TreatmentPromiseBanner;