import "./aboutme.css";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { useInView } from "../Data/useInView";
const Features = [
  { key: "location", img: "svg/location.svg" },
  { key: "way", img: "svg/bulb.svg" },
  { key: "tech", img: "svg/code.svg" },
  { key: "garanty", img: "svg/handshake.svg" },
];
const AboutMe = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <section ref={ref} id="aboutme" className="aboutme">
      <h2 className={isVisible ? "fade-in" : "hidden"}>Kim jestem</h2>
      <div className={`container ` + (isVisible ? " fade-in" : "hidden")}>
        <div className="top">
          <div className="img-wrapper">
            <img
              loading="lazy"
              alt="Zdjęcie dewelopera"
              src="images/aboutme.webp"
            />
          </div>
          <div className="content">
            <h2 className="title">Andrzej Turzański</h2>
            <div className="hr" />
            <p>{t("about.desc")}</p>
            <span className="factura">
              <img alt="checkmark" src="svg/checkmark.svg" />
              <p>Wystawiam faktury VAT</p>
            </span>
          </div>
        </div>
        <div className="bottom">
          {Features.map((i) => {
            return (
              <div className="about-card" key={i.key}>
                <h3 className="title">{t("about." + i.key + ".title")}</h3>
                <img alt="feature-icon" src={i.img} />
                <p> {t("about." + i.key + ".desc")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
