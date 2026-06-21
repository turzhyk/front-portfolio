import React from "react";
import "./pain.css";
export default function Pain() {
  return (
    <section className="pain" id="pain">
      <div className="wide">
        <h1>Chcesz, żeby klienci w internecie stali klientami twojej firmy?</h1>
        <div className="action">
          <h2>Jak mogę Ci pomóc</h2>
            {/* <p>
            Bez technicznego żargonu. Skupiamy się na klientach, nie na stronie.
          </p> */}
          <div className="options">
            <div className="option">
              <h3>Opcja 1</h3>
              <div className="option-middle">
                <p className="option-title">
                  <strong>
                    Masz już stronę, ale nie działa tak jak powinna
                  </strong>
                </p>
                <p className="desc">
                  Poprawiamy istniejące strony, żeby były szybsze, czytelne na
                  telefonie i łatwiejsze w kontakcie.
                </p>
              </div>
              <div className="effect">
                Efekt: więcej zapytań od klientów bez zmiany Twojej oferty.
              </div>
              {/* <a className="cte1" href="#contact">Pokaż, co można poprawić</a> */}
            </div>
            <div className="option">
              <h3>Opcja 2</h3>
             
              <div className="option-middle"> <p className="option-title">
                <strong>Nie masz strony internetowej</strong>
              </p>
                <p className="desc">
                  Tworzę stronę od zera i konfiguruję ją tak, żeby klienci mogli
                  łatwo znaleźć Twoją firmę i się z Tobą skontaktować.
                </p>
              </div>
              <div className="effect">
                Gotowe rozwiązanie: strona + kontakt + publikacja online.
              </div>
                 {/* <a className="cte1" href="#contact">Chcę stronę dla mojej firmy</a> */}
            </div>
          </div>
        
          
        </div>
      </div>
    </section>
  );
}
