import React from "react";
import styles from "./styles.module.css";
import { LogoSvg } from "./SVG/LogoSvg";
export default function Pain() {
  return (
    <section className={styles.pain} id="pain">
      <h2>Czy to brzmi znajomo?</h2>
      <div className={styles.subtitle}>
        <div className={styles.line} />
        <LogoSvg size={50} thickness={3} cls={styles.accent_icon} />
        <div className={styles.line} />
      </div>
    </section>
  );
}
