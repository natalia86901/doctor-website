import { Link } from "react-router-dom";
import "./TreatmentSolutionsSection.css";

import implantsBackground from "../../assets/treatmentSolutions/implantsBackground.png";
import complexCasesIcon from "../../assets/treatmentSolutions/complexCases.png";
import longTermSolutionsIcon from "../../assets/treatmentSolutions/longTermSolutions.png";
import oneDayTeethIcon from "../../assets/treatmentSolutions/oneDayTeeth.png";
import treatmentSolutionImage1 from "../../assets/treatmentSolutions/treatmentSolutions.image 1.png";
import treatmentSolutionImage2 from "../../assets/treatmentSolutions/treatmentSolution.image 2.png";
import treatmentSolutionImage3 from "../../assets/treatmentSolutions/treatmentSolution.image 3.png";

const treatments = [
  {
    title: "ONE-DAY TEETH",
    description:
      "Rediscover confidence immediately with our full-arch, immediate restoration dental solution.",
    image: treatmentSolutionImage1,
    imageAlt: "Full-arch dental implant treatment",
    icon: oneDayTeethIcon,
    path: "/dentures-and-implants/full-partial-dentures",
  },
  {
    title: "LONG-TERM SOLUTIONS",
    description: "Durable implants tailored for you.",
    image: treatmentSolutionImage2,
    imageAlt: "Long-term dental implant solution",
    icon: longTermSolutionsIcon,
    path: "/dentures-and-implants/dental-implants",
  },
  {
    title: "COMPLEX CASES & SECOND OPINIONS",
    description:
      "Expert diagnosis and treatment solutions designed for challenging and advanced cases.",
    image: treatmentSolutionImage3,
    imageAlt: "Advanced dental implant consultation",
    icon: complexCasesIcon,
    path: "/patient-results/complex-cases",
  },
];

function TreatmentSolutionsSection() {
  return (
    <section
      className="treatment-solutions"
      aria-labelledby="treatment-solutions-heading"
    >
      <img
        className="treatment-solutions__background"
        src={implantsBackground}
        alt="background of dental implants"
        aria-hidden="true"
      />

      <div className="treatment-solutions__inner">
        <header className="treatment-solutions__header">
          <h2
            id="treatment-solutions-heading"
            className="treatment-solutions__heading"
          >
            THE RESULTS BEHIND THE METHOD
          </h2>

          <dl className="treatment-solutions__stats">
            <div className="treatment-solutions__stat">
              <dt className="treatment-solutions__stat-label">
                FIXED ARCHES
              </dt>

              <dd
                className="treatment-solutions__stat-value"
                aria-label="1,300 plus"
              >
                <span>1,300</span>
                <span
                  className="treatment-solutions__stat-accent"
                  aria-hidden="true"
                >
                  +
                </span>
              </dd>
            </div>

            <div className="treatment-solutions__stat">
              <dt className="treatment-solutions__stat-label">
                IMPLANTS PLACED
              </dt>

              <dd
                className="treatment-solutions__stat-value"
                aria-label="10,000 plus"
              >
                <span>10,000</span>
                <span
                  className="treatment-solutions__stat-accent"
                  aria-hidden="true"
                >
                  +
                </span>
              </dd>
            </div>
          </dl>
        </header>

        <div className="treatment-solutions__cards">
          {treatments.map((treatment) => (
            <article
              className="treatment-solutions__card"
              key={treatment.title}
            >
              <div className="treatment-solutions__image-wrapper">
                <img
                  className="treatment-solutions__image"
                  src={treatment.image}
                  alt={treatment.imageAlt}
                />
              </div>

              <div className="treatment-solutions__icon-wrapper">
                <img
                  className="treatment-solutions__icon"
                  src={treatment.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div className="treatment-solutions__card-body">
                <h3 className="treatment-solutions__card-title">
                  {treatment.title}
                </h3>

                <p className="treatment-solutions__card-description">
                  {treatment.description}
                </p>

                <Link
                  className="treatment-solutions__card-link"
                  to={treatment.path}
                >
                  LEARN MORE
                  <span
                    className="treatment-solutions__card-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentSolutionsSection;