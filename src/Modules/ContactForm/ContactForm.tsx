import React, { useState } from "react";
import "./contactform.css";
import { useInView } from "../../Data/useInView";
import { useTranslation } from "react-i18next";
export default function ContactForm() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const { t } = useTranslation();
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, n: number) => {
    e.preventDefault();
    setActive(n);
  };
  return (
    <section ref={ref} id="contact" className="contactform">
      <div className={`container ` + (isVisible ? " fade-in" : "hidden")}>
        <h2>{t("contact.title")}</h2>
        <div className="content">
          <div className="left">
            <p>{t("contact.desc")}</p>
          </div>
          <div className="right">
            <form>
              <div className="select">
                <button
                  className={`${active == 0 ? "active" : ""}`}
                  onClick={(e) => onButtonClick(e, 0)}
                >
                  <span>{t("contact.landing")}</span>
                </button>
                <button
                  className={`${active == 1 ? "active" : ""}`}
                  onClick={(e) => onButtonClick(e, 1)}
                >
                  <span>{t("contact.page")}</span>
                </button>
                <button
                  className={`${active == 2 ? "active" : ""}`}
                  onClick={(e) => onButtonClick(e, 2)}
                >
                  <span>{t("contact.other")}</span>
                </button>
              </div>
              <div className="row">
                <input placeholder={t("contact.name")}></input>{" "}
                <input placeholder={t("contact.phone")}></input>
              </div>

              <input placeholder={t("contact.mail")}></input>

              <textarea placeholder={t("contact.message")}></textarea>
              <input
                className="btn"
                type="submit"
                value={t("contact.button")}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
