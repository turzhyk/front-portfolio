import React, { useRef, useState } from "react";
import "./contactform.css";
import { useInView } from "../../Data/useInView";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
export default function ContactForm() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, n: number) => {
    e.preventDefault();
    setActive(n);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_xw161gi",
      "template_g799m8f",
      formRef.current,
      "-8ZmyWm7MTg61TyiD"
    )
    .then(
      () => {
        alert("Wiadomość wysłana!");
      },
      (error) => {
        console.log(error);
        alert("Błąd wysyłki");
      }
    );
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
            <form ref={formRef} onSubmit={(e)=>handleSubmit(e)}>
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
                <input name="name" placeholder={t("contact.name")}></input>{" "}
                <input type="tel" name="phone" placeholder={t("contact.phone")}></input>
              </div>

              <input type="email" name="email" placeholder={t("contact.mail")}></input>

              <textarea name="message" placeholder={t("contact.message")}></textarea>
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
