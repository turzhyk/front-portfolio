import React, { useState } from "react";
import "./offer.css";
export const OfferOption1 = () => {
  const [level, setLevel] = useState(0);
  return (
    <div className="option1 option">
      <h3>Pakiet Standart</h3>
      <div className="option-top">
        <ul>
          <li>Strona "pod klucz"</li>
          <li>1 strona + RODO</li>
          <li>Forma kontaktu</li>
          <li>2-3 zdjęć</li>
        </ul>
        <div className="slider">
          <input name="level" type="range" min={0} max={2} step={1} />
          <label htmlFor="level">Wybierz poziom</label>
        </div>

        <div className="priceline">
          <p className="pricetag">razem:</p>
          <p className="price">800zł</p>
        </div>
      </div>
      <a>
        <div className="cte">Mnie to interesuhje</div>
      </a>
      <div className="divider" />
      <div className="footer">
        <ul>
          <li>Dostęp do admin</li>
          <li>Dostęp do admin</li>
          <li>Dostęp do admin</li>
          <li>Dostęp do admin</li>
        </ul>
      </div>
    </div>
  );
};
