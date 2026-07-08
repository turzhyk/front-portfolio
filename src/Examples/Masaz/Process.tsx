import React from "react";
import styles from "./styles.module.css";
import { LogoSvg } from "./SVG/LogoSvg";
export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <h2>Jak wygląda pierwsza wizyta?</h2>{" "}
      <div className={styles.subtitle}>
        <div className={styles.line} />
        <LogoSvg size={50} thickness={3} cls={styles.accent_icon} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <div className={styles.item}>
          <h3>1.</h3>
          <p>Krótka rozmowa</p>
        </div>
        <div className={styles.vert}/>
        <div className={styles.item}>
          <h3>2.</h3>
          <p>Ocena problemu</p>
        </div> <div className={styles.vert}/>
        <div className={styles.item}>
          <h3>3.</h3>
          <p>Masaż dopasowany do Ciebie</p>
        </div> <div className={styles.vert}/>
        <div className={styles.item}>
          <h3>4.</h3>
          <p>Zalecenia po wizycie</p>
        </div>
      </div>
    </section>
  );
}
