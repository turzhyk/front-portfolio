import React from "react";
import styles from "./warsztat.module.css";
import { CalendarSvg } from "./SVG/CalendarSvg";
import { useInView } from "./useInView";
export default function Galery() {
  const { ref, isVisible } = useInView();
  return (
    <section ref={ref} id="galery" className={styles.galery+" "+(isVisible?styles.visible:"")}>
      <h2>Ostatnie naprawy</h2>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.pic}>
            <img
              src="/images/demo/warsztat_galery_1.webp"
              width={400}
              alt="proces naprawy"
              loading="lazy"
            />
          </div>
          <h3>Wymiana rozrządu</h3>
          <p>
            Kompleksowa wymiana rozrządu wraz z pompą wody w samochodzie VW
            Passat 2.0 TDI.
          </p>
          <div className={styles.delivery_time}>
            <CalendarSvg
              width="25"
              height="25"
              cls={styles.accent_icon}
              thickness={2}
            ></CalendarSvg>
            Czas realizcji: 1 dzień
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.pic}>
            <img
              src="/images/demo/warsztat_galery_2.webp"
              width={400}
              alt="proces naprawy"
              loading="lazy"
            />
          </div>
          <h3>Wymiana tarcz i klocków</h3>
          <p>
            Wymiana tarcz i klocków hamulcowych w BMW 3. Poprawa skutecznosci
            hamowania.
          </p>
          <div className={styles.delivery_time}>
            <CalendarSvg
              width="25"
              height="25"
              cls={styles.accent_icon}
              thickness={2}
            ></CalendarSvg>
            Czas realizcji: 3 godziny
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.pic}>
            <img
              src="/images/demo/warsztat_galery_3.webp"
              width={400}
              alt="proces naprawy"
              loading="lazy"
            />
          </div>
          <h3>Diagnostyka komputerowa</h3>
          <p>
           Diagnostyka i usunięcie problemu z pracą silnika w Audi A4.
          </p>
          <div className={styles.delivery_time}>
            <CalendarSvg
              width="25"
              height="25"
              cls={styles.accent_icon}
              thickness={2}
            ></CalendarSvg>
            Czas realizcji: 2 godziny
          </div>
        </div>
      </div>
      <a className={styles.cta}>Umów wizytę</a>
    </section>
  );
}
