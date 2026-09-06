import { Link } from "react-router-dom";
import "./PracticeBenefitsSection.css";

import localDoctorsIcon from "../../assets/practiceBenefits/localDoctorsIcon.svg";
import oneLocationIcon from "../../assets/practiceBenefits/oneLocationIcon.svg";
import sameDayTeethIcon from "../../assets/practiceBenefits/sameDayTeethIcon.svg";

const practiceBenefits = [
  {
    title: "ONE LOCATION",
    description: "Everything under one roof.",
    icon: oneLocationIcon,
  },
  {
    title: "LOCAL DOCTORS",
    description: "Experience you can trust, right here at home.",
    icon: localDoctorsIcon,
  },
  {
    title: "SAME-DAY TEETH",
    description: "Leave with a confident smile the same day.",
    icon: sameDayTeethIcon,
  },
];

function PracticeBenefitsSection() {
  return (
    <section className="practice-benefits" aria-label="Practice benefits">
      <div className="practice-benefits__inner">
        <div className="practice-benefits__items">
          {practiceBenefits.map((benefit) => (
            <article className="practice-benefits__item" key={benefit.title}>
              <img
                className="practice-benefits__icon"
                src={benefit.icon}
                alt=""
                aria-hidden="true"
              />

              <div className="practice-benefits__content">
                <h3 className="practice-benefits__item-title">
                  {benefit.title}
                </h3>
                <p className="practice-benefits__item-description">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="practice-benefits__actions">
          <button className="practice-benefits__primary-cta" type="button">
            BOOK YOUR FREE CONSULTATION
          </button>

          <Link
            className="practice-benefits__secondary-link"
            to="/dentures-and-implants/dental-implants"
          >
            <span>HOW SAME-DAY TEETH WORK</span>
            <span className="practice-benefits__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PracticeBenefitsSection;