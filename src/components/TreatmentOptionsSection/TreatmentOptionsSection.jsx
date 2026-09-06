import { Link } from "react-router-dom";
import "./TreatmentOptionsSection.css";

import treatmentOptionsImage1 from "../../assets/treatmentOptionsSection/treatmentOptionsImage1.png";
import treatmentOptionsImage2 from "../../assets/treatmentOptionsSection/treatmentoptionImage2.png";
import treatmentOptionsImage3 from "../../assets/treatmentOptionsSection/treatmentoptionImage3.png";

const treatmentOptions = [
  {
    title: "DENTURES",
    image: treatmentOptionsImage1,
    imageAlt: "Full denture restoration",
    path: "/dentures-and-implants/full-partial-dentures",
  },
  {
    title: "IMPLANTS",
    image: treatmentOptionsImage2,
    imageAlt: "Full-arch implant-supported restoration",
    path: "/dentures-and-implants/dental-implants",
  },
  {
    title: "COMPLEX CASES",
    image: treatmentOptionsImage3,
    imageAlt: "Complex dental implant reconstruction",
    path: "/patient-results/complex-cases",
  },
];

function TreatmentOptionsSection() {
  return (
    <section
      className="treatment-options"
      aria-labelledby="treatment-options-heading"
    >
      <div className="treatment-options__inner">
        <header className="treatment-options__header">
          <h2
            id="treatment-options-heading"
            className="treatment-options__title"
          >
            OPTIONS DESIGNED AROUND YOUR NEEDS
          </h2>

          <p className="treatment-options__eyebrow">EXPLORE YOUR OPTIONS</p>
        </header>

        <div className="treatment-options__cards">
          {treatmentOptions.map((option) => (
            <article key={option.title} className="treatment-options__card">
              <div className="treatment-options__image-wrapper">
                <img
                  className="treatment-options__image"
                  src={option.image}
                  alt={option.imageAlt}
                />
              </div>

              <Link className="treatment-options__card-link" to={option.path}>
                <span>{option.title}</span>
                <span className="treatment-options__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentOptionsSection;
