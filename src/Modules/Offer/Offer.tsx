import React from "react";
import "./offer.css";
import { OfferOption1 } from "./OfferOption1";
import { OfferOption2 } from "./OfferOption2";

export default function Offer() {
  return (
    <section id="offer" className="offer">
      <h2>Wybierz swoją realizację</h2>
      <div className="options">
        <OfferOption1 />
      <OfferOption2/>
      </div>
    </section>
  );
}
