import "./FinancingOptionsSection.css";

import flexibleMonthlyPaymentsIcon from "../../assets/financingOptions/flexibleMonthlyPaymentsIcon.svg";
import insuranceIcon from "../../assets/financingOptions/insuranceIcon.svg";

const financingOptions = [
  {
    title: "FLEXIBLE MONTHLY PAYMENTS",
    description: "Low monthly payments to fit your budget.",
    note: "*Based upon credit approval.",
    icon: flexibleMonthlyPaymentsIcon,
  },
  {
    title: "INSURANCE",
    description:
      "We work with your insurance to maximize your benefits and understand your coverage.",
    icon: insuranceIcon,
  },
];

function FinancingOptionsSection() {
  return (
    <section
      className="financing-options"
      aria-labelledby="financing-options-heading"
    >
      <div className="financing-options__inner">
        <header className="financing-options__header">
          <p className="financing-options__eyebrow">
            FINANCING &amp; PAYMENT OPTIONS
          </p>
          <h2
            id="financing-options-heading"
            className="financing-options__title"
          >
            FLEXIBLE WAYS TO MOVE FORWARD
          </h2>
          <p className="financing-options__intro">
            We&apos;ll help you understand your financial options before you decide.
          </p>
        </header>

        <div className="financing-options__cards">
          {financingOptions.map((option) => (
            <article className="financing-options__card" key={option.title}>
              <img
                className="financing-options__icon"
                src={option.icon}
                alt=""
                aria-hidden="true"
              />

              <div className="financing-options__card-content">
                <h3 className="financing-options__card-title">
                  {option.title}
                </h3>
                <p className="financing-options__card-description">
                  {option.description}
                </p>
                {option.note && (
                  <p className="financing-options__note">{option.note}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FinancingOptionsSection;