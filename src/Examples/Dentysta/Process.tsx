import React from "react";
import styles from "./styles.module.css";
import { LogoSvg } from "./SVG/LogoSvg";
import { useInView } from "./useInView";
export default function Process() {
   const { ref, isVisible } = useInView(0.4);
   
  return (
    <section ref={ref} id="process" className={styles.process + " " + (isVisible? styles.visible:"")}>
      <h2>Jak wygląda pierwsza wizyta?</h2>{" "}
     
      <div className={styles.content}>
        <div className={styles.item}>
          <h3>#1</h3>
          <p>Rejestracja</p>
        </div>
        <div className={styles.vert}/>
        <div className={styles.item}>
          <h3>#2</h3>
          <p>Badanie</p>
        </div> <div className={styles.vert}/>
        <div className={styles.item}>
          <h3>#3</h3>
          <p>Plan leczenia</p>
        </div> <div className={styles.vert}/>
        <div className={styles.item}>
          <h3>#4</h3>
          <p>Leczenie</p>
        </div>
      </div>
    </section>
  );
}
