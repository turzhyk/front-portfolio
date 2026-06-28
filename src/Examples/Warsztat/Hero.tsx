import React from "react";
import styles from "./warsztat.module.css";
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
            <p>Dodiki specjaliści</p>
          </div>
        </div>
      </div>

      
    </section>
  );
}
