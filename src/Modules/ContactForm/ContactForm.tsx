import React, { useState } from "react";
import "./contactform.css";
import { useInView } from "../../Data/useInView";
export default function ContactForm() {
  const [active, setActive] = useState(0);
    const { ref, isVisible } = useInView<HTMLDivElement>();

 const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, n:number) => {
  e.preventDefault();
  setActive(n);
};
  return (
    <section ref={ref} id="contact" className="contactform">
      <div className={`container `+(isVisible? " fade-in":"hidden")}>
        <h2>Zamów bezpłatną wycenę</h2>
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
                <button
                  className={`${active == 0 ? "active" : ""}`}
                  onClick={(e) => onButtonClick(e, 0)}
                >
                  <span>Landing Page</span>
                  
                </button>
                <button
                  className={`${active == 1 ? "active" : ""}`}
                 onClick={(e) => onButtonClick(e, 1)}
                >
                  <span>Strona firmowa</span>
                  
                </button>
                <button
                  className={`${active == 2 ? "active" : ""}`}
                 onClick={(e) => onButtonClick(e, 2)}
                >
                  <span>Inne</span>
                  
                </button>
              </div>
              <div className="row"><input placeholder="Twoje imię"></input>  <input placeholder="Twój telefon"></input></div>
              
              <input placeholder="Twój e-mail"></input>
            
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
