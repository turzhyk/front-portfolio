import React, { useState } from "react";
import "./contactform.css";
export default function ContactForm() {
  const [active, setActive] = useState(0);
  return (
    <section id="contact" className="contactform">
      <div className="container">
        <h2>Skontaktuj</h2>
        <div className="content">
          <div className="left">
            <p>
              Chcesz zacząć? Zostaw wiadomość, skontaktuję się z Tobą в ciągu 2
              godzin.
            </p>
          </div>
          <div className="right">
            <form>
              <div className="select">
                <div
                  className={`${active == 0 ? "active" : ""}`}
                  onClick={() => setActive(0)}
                >
                  Landing Page
                </div>
                <div
                  className={`${active == 1 ? "active" : ""}`}
                  onClick={() => setActive(1)}
                >
                  Strona firmowa
                </div>
                <div
                  className={`${active == 2 ? "active" : ""}`}
                  onClick={() => setActive(2)}
                >
                  Inne
                </div>
              </div>

              <input placeholder="Twoje imię"></input>
              <input placeholder="Twój e-mail"></input>
              <input placeholder="Twój telefon"></input>
              <textarea placeholder="Treść"></textarea>
              <input
                className="btn"
                type="submit"
                value={"Zamów bezpłatną wycenę"}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
