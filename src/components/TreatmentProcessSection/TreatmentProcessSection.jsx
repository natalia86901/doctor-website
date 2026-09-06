import "./TreatmentProcessSection.css";

import consultationIcon from "../../assets/treatmentProcess/consultationIcon.svg";
import digitalPlanningIcon from "../../assets/treatmentProcess/digitalPlanningIcon.svg";
import treatmentDayIcon from "../../assets/treatmentProcess/treatmentDayIcon.svg";
import finalRestorationIcon from "../../assets/treatmentProcess/finalRestorationIcon.svg";

const treatmentSteps = [
  {
    number: "01",
    title: "CONSULTATION",
    description:
      "We listen, evaluate, and take the time to understand your needs and goals.",
    icon: consultationIcon,
  },
  {
    number: "02",
    title: "DIGITAL PLANNING",
    description:
      "3D and 4D imaging support precise, personalized treatment planning.",
    icon: digitalPlanningIcon,
  },
  {
    number: "03",
    title: "TREATMENT DAY",
    description:
      "From the moment you arrive, we focus on your comfort and safety. You will understand what is happening, why it is happening, and feel supported throughout your treatment.",
    icon: treatmentDayIcon,
  },
  {
    number: "04",
    title: "FINAL RESTORATION",
    description: "For full-arch healing and long-term care.",
    icon: finalRestorationIcon,
  },
];

function TreatmentProcessSection() {
  return (
    <section
      className="treatment-process"
      aria-labelledby="treatment-process-heading"
    >
      <div className="treatment-process__inner">
        <header className="treatment-process__header">
          <p className="treatment-process__eyebrow">
            WHAT TO EXPECT
          </p>

          <h2
            id="treatment-process-heading"
            className="treatment-process__title"
          >
            A CLEAR PATH FORWARD
          </h2>
        </header>

        <div className="treatment-process__steps">
          {treatmentSteps.map((step) => (
            <article
              className="treatment-process__step"
              key={step.number}
            >
              <div className="treatment-process__step-top">
                <span className="treatment-process__number">
                  {step.number}
                </span>

                <img
                  className="treatment-process__icon"
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <h3 className="treatment-process__step-title">
                {step.title}
              </h3>

              <p className="treatment-process__description">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentProcessSection;