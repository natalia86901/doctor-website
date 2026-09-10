import "./FinancingOptionsSection.css";

import flexibleMonthlyPaymentsIcon from "../../assets/financingOptions/flexibleMonthlyPaymentsIcon.svg";
import insuranceIconDarkBackground from "../../assets/financingOptions/insuranceIconDarkBackground.svg";

function FinancingOptionsSection() {
  return (
    <section
      className="financing-options"
      aria-labelledby="financing-options-heading"
    >
      <div className="financing-options__inner">
        <header className="financing-options__header">
          <div className="financing-options__eyebrow-row">
            <p className="financing-options__eyebrow">
              FINANCING &amp; PAYMENT OPTIONS
            </p>
          </div>

          <h2 id="financing-options-heading" className="financing-options__title">
            Flexible ways for you
          </h2>
        </header>

        <article className="financing-options__primary-card">
          <div className="financing-options__primary-icon-area">
            <img
              className="financing-options__primary-icon"
              src={flexibleMonthlyPaymentsIcon}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="financing-options__primary-content">
            <h3 className="financing-options__primary-title">
              FLEXIBLE MONTHLY PAYMENTS
            </h3>
            <p className="financing-options__primary-description">
              Reasonable payments to fit your budget.
            </p>
            <p className="financing-options__note">*Based upon credit approval.</p>
          </div>
        </article>

        <div className="financing-options__divider" aria-hidden="true" />

        <article className="financing-options__insurance">
          <div className="financing-options__insurance-icon-area">
            <img
              className="financing-options__insurance-icon"
              src={insuranceIconDarkBackground}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="financing-options__insurance-content">
            <h3 className="financing-options__insurance-title">
              Using dental insurance?
            </h3>
            <p className="financing-options__insurance-description">
              Our team can help you understand your available benefits.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FinancingOptionsSection;
