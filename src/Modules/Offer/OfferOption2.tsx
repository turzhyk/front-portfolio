import React, { useState } from "react";
import "./offer.css";
export const OfferOption2 = () => {
  const [level, setLevel] = useState(0);
  return (
    <div className="option2 option">
      <h3>Pakiet Firma</h3>
       <p className="populartag">Popularne!</p>
      <div className="option-top">
        <ul>
          <li>Strona internetowa dla Twojej firmy</li>
          <li>Formularz kontaktowy i szybki kontakt telefoniczny</li>
          <li>Wersja mobilna (telefon i tablet)</li>
          <li>Publikacja strony online</li>
          <li>Podstawowa optymalizacja SEO</li>
          <li>Polityka prywatności (RODO)</li>
          <li>3 miesięcy wsparcia po uruchomieniu GRATIS, zatym 50zł/miesiąc</li>
        </ul>
        {/* <div className="slider">
          <input name="level" type="range" min={0} max={2} step={1} />
          <label htmlFor="level">Wybierz poziom</label>
        </div> */}

        <div className="priceline">
          <p className="price">od 1800zł</p>
          <p className="pricetag">Jednorazowa płatność</p>
        </div>
     
      </div>
      <a>
        <div className="cte">Chcę taką stronę</div>
      </a>
      <div className="divider" />
      <div className="footer">
        <ul>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 33L15.54 15.3871L22.8 24.6129L36 7"
                className="icon1"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            Dostęp do statystyk odwiedzin
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28"
                cy="14"
                r="10"
                fill="currentColor"
                className="icon2"
              />
              <path
                d="M5 28L11 33.5L15.5 28.64L23.5 20M15.5 28.64L11 24.5"
                className="icon2"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            Pełny dostęp do strony
          </li>
          <li>
           <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="4" className="icon4"/>
<line x1="20" y1="4" x2="20" y2="36" stroke="currentColor"  stroke-width="4" className="icon4"/>
<path d="M34 11.77C23.6334 18.5893 17.7103 18.2823 7 11.77" stroke="currentColor" className="icon4"  stroke-width="3"/>
<path d="M7 27.77C17.3666 20.9507 23.2897 21.2578 34 27.77" stroke="currentColor" className="icon4"  stroke-width="3"/>
</svg>

            Pomoc w konfiguracji własnej domeny
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 38V6H4V38"
                stroke="currentColor"
                className="icon3"
                stroke-width="4"
              />
              <path
                d="M12 23.4L18 29L28 19"
                stroke="currentColor"
                className="icon3"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            Faktura VAT
          </li>
          <li className="owner">
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 16.5V34H34V16.5L20 5L6 16.5Z"
                stroke="currentColor"
                className="icon5"
                stroke-width="4"
                stroke-linecap="round"
              />
              <rect
                x="17"
                y="24"
                width="6"
                height="8"
                fill="currentColor"
                className="icon5"
              />
            </svg>
            Strona należy do Ciebie
          </li>
        </ul>
           <p className="disclaim">Cena strony nie obejmuje kosztów domeny i hostingu.</p>
      </div>
    </div>
  );
};
