import React from "react";
import styles from "./styles.module.css";
import { WarrantySvg } from "./SVG/WarrantySvg";
import { ClockSvg } from "./SVG/ClockSvg";
import { LikeSvg } from "./SVG/LikeSvg";
import { PhoneFillSvg } from "./SVG/PhoneFillSvg";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Profesjonalny serwis twojego samochodu</h1>
        <p>
          Kompleksowa naprawa i obsługa pojazdów osobowych. Szybko, uczciwie i z
          gwarancją.
        </p>
        <div className={styles.cta_list}>
          <button className={styles.cta_call}> <PhoneFillSvg width="30px" height="30px" cls={styles.white_icon} /> Zadzwoń 123 456 789</button>
          <a className={styles.cta_reserve}>Umów wizytę</a>
        </div>
        <div className={styles.post_cta}><CheckmarkThinSvg width="30" height="30" cls={styles.accent_icon}/> ponad 10 lat doświadczenia</div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <WarrantySvg width="50px" height="50px" cls={styles.accent_icon} />
            <p>Gwarancja na usługi</p>
          </div>
          <div className={styles.feature}>
            <ClockSvg width="50px" height="50px" cls={styles.accent_icon} />
            <p>Szybka naprawa</p>
          </div>
          <div className={styles.feature}>
            <LikeSvg width="50px" height="50px" cls={styles.accent_icon} />
            <p>Doświadczeni specjaliści</p>
          </div>
        </div>
      </div>
      <div className={styles.trans}><svg width="100" height="50" viewBox="0 0 1900 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17_2)">
<path d="M37 10.5C31.4 10.1 9.66667 12 -0.5 13L0 5C30.6667 4.33333 92.2 3 93 3C94 3 104.5 9.49999 93 8.49999C81.5 7.49999 67 11.5 58.5 12C50 12.5 44 11 37 10.5Z" fill="currentColor" fill-opacity="0.46"/>
<path d="M35 13C24.2 13 7.16667 10 0 8.5V0H100V10C95.8333 8.66667 85.2 6 76 6C64.5 6 48.5 13 35 13Z" fill="currentColor"/>
</g>
</svg>
</div>
      
    </section>
  );
}
