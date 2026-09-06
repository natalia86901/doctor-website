import "./WhyItsPossibleSection.css";

import whyItsPossibleImage1 from "../../assets/whyItsPossibleSection/whyItsPossibleImage1.png";
import whyItsPossibleImage2 from "../../assets/whyItsPossibleSection/whyItsPossibleImage2.png";
import whyItsPossibleImage3 from "../../assets/whyItsPossibleSection/whyItsPossibleImage3.png";
import inhouseLabIcon from "../../assets/whyItsPossibleSection/inhouseLab.png";
import sedationIcon from "../../assets/whyItsPossibleSection/sedation.png";
import advancedTrainingIcon from "../../assets/whyItsPossibleSection/advancedTraining.png";

const whyItsPossibleCards = [
  {
    badge: "CONTROL",
    image: whyItsPossibleImage1,
    imageAlt: "Dental professionals reviewing a full-arch restoration in an in-house lab",
    icon: inhouseLabIcon,
    title: "IN-HOUSE LAB",
    description:
      "Designed, refined and controlled under one roof. Close collaboration means greater precision and fewer compromises.",
  },
  {
    badge: "COMFORT",
    image: whyItsPossibleImage2,
    imageAlt: "Modern dental treatment chair in a comfortable operatory",
    icon: sedationIcon,
    title: "ORAL & IV SEDATION",
    description:
      "A difficult case deserves a careful second look—even if you’ve been told there isn’t enough bone or that implants aren’t possible.",
  },
  {
    badge: "KNOWLEDGE",
    image: whyItsPossibleImage3,
    imageAlt: "Dentist presenting advanced implant imaging to colleagues",
    icon: advancedTrainingIcon,
    title: "ADVANCED TRAINING",
    description:
      "Trained in the United States and internationally, with a focus on full-arch implants and complex cases, Dr. Tarkesh also helps educate and mentor fellow dentists.",
  },
];

function WhyItsPossibleSection() {
  return (
    <section
      className="why-its-possible"
      aria-labelledby="why-its-possible-heading"
    >
      <div className="why-its-possible__inner">
        <header className="why-its-possible__header">
          <p className="why-its-possible__eyebrow">WHY IT&apos;S POSSIBLE</p>
          <h2
            id="why-its-possible-heading"
            className="why-its-possible__title"
          >
            WHAT MAKES THE DIFFERENCE
          </h2>
        </header>

        <div className="why-its-possible__cards">
          {whyItsPossibleCards.map((card) => (
            <article key={card.title} className="why-its-possible__card">
              <div className="why-its-possible__badge">{card.badge}</div>

              <div className="why-its-possible__image-wrapper">
                <img
                  className="why-its-possible__image"
                  src={card.image}
                  alt={card.imageAlt}
                />
              </div>

              <div className="why-its-possible__icon-wrapper">
                <img
                  className="why-its-possible__icon"
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <div className="why-its-possible__card-body">
                <h3 className="why-its-possible__card-title">{card.title}</h3>
                <p className="why-its-possible__card-description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyItsPossibleSection;
