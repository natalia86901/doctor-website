import "./ComplexCasesBanner.css";

function ComplexCasesBanner() {
  return (
    <section
      className="complex-cases-banner"
      aria-labelledby="complex-cases-banner-heading"
    >
      <div className="complex-cases-banner__inner">
        <h2
          id="complex-cases-banner-heading"
          className="complex-cases-banner__title"
        >
          <span>WE SOLVE THE CASES OTHERS</span>
          <span>CALL IMPOSSIBLE.</span>
        </h2>

        <p className="complex-cases-banner__description">
          Because the most difficult treatment requires complete control,
          advanced knowledge and the right team.
        </p>
      </div>

      <span className="complex-cases-banner__accent" aria-hidden="true" />
    </section>
  );
}

export default ComplexCasesBanner;