import React from "react";
import "./offer.css";
import { OfferOption1 } from "./OfferOption1";

export default function Offer() {
  return (
    <section id="offer" className="offer">
      <h2>Wybierz swoją realizację</h2>
      <div className="options">
        <OfferOption1 />
        <div className="option2 option">
          <h3>Pakiet Premium</h3>
          
          <p className="populartag">Popularne!</p>
        </div>
      </div>
    </section>
  );
}
