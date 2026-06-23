import React from "react";
import "./coworking.css";
export default function Coworking() {
  return (
    <section className="cowork" id="cowork">
      <h2>Jak wygląda współpraca?</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">01</div>
          <h3>Bezpłatna rozmowa</h3>
        </div>
        <svg
          width="100"
          height="100"
          viewBox="0 0 152 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 79.2855H150.453M98.3414 0.277283L151 79.2855L98.3414 153.277"
            stroke="black"
          />
        </svg>
         <div className="step">
          <div className="icon">02</div>
          <h3>Projekt strony</h3>
        </div>
        <svg
          width="100"
          height="100"
          viewBox="0 0 152 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 79.2855H150.453M98.3414 0.277283L151 79.2855L98.3414 153.277"
            stroke="black"
          />
        </svg>
         <div className="step">
          <div className="icon">03</div>
          <h3>Poprawki</h3>
        </div>
        <svg
          width="100"
          height="100"
          viewBox="0 0 152 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 79.2855H150.453M98.3414 0.277283L151 79.2855L98.3414 153.277"
            stroke="black"
          />
        </svg>
         <div className="step">
          <div className="icon">04</div>
          <h3>Publikacja online</h3>
        </div>
      </div>
    </section>
  );
}
