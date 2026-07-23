import React from "react";
import styles from "./Steps.module.css";
import { Calendar1, NotepadText, Sparkle } from "lucide-react";
import { ToothSvg } from "../SVG/ToothSvg";
import { useInView } from "../useInView";
import clsx from "clsx";
export default function Steps() {
  const { ref, isVisible } = useInView(0.3);
  return (
    <section
      ref={ref}
      id="steps"
      className={clsx(styles.steps, isVisible && styles.visible)}
    >
      <h3>Jak wygląda pierwsza wizyta</h3>
      <h2>Prosto, komfortowo, bez stresu</h2>
      <div className={styles.content}>
        <div className={styles.progressbar}>
          <div className={styles.progresspoint}>01</div>
          <div className={styles.line} style={{ transitionDelay: "100ms" }} />
          <div
            className={styles.progresspoint}
            style={{ transitionDelay: "100ms" }}
          >
            02
          </div>
          <div className={styles.line} style={{ transitionDelay: "200ms" }} />
          <div
            className={styles.progresspoint}
            style={{ transitionDelay: "200ms" }}
          >
            03
          </div>
          <div className={styles.line} style={{ transitionDelay: "300ms" }} />
          <div
            className={styles.progresspoint}
            style={{ transitionDelay: "300ms" }}
          >
            04
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card} >
            <div className={styles.head}>
              <div className={styles.iconwrapper}>
                <Calendar1 size={40} strokeWidth={1.5} />
              </div>
              <p>Rejestracja</p>
            </div>
            <p className={styles.description}>
              Umów wizytę telefonicznie lub online w dogodnym dla Ciebie
              terminie.
            </p>
          </div>
          <div className={styles.card}    style={{ transitionDelay: "100ms" }}>
            <div className={styles.head}>
              <div className={styles.iconwrapper}>
                <ToothSvg size={40} thickness={1.5} />
              </div>
              <p>Badanie i diagnostyka</p>
            </div>
            <p className={styles.description}>
              Przeprowadzamy dokłade badanie i diagnostykę, aby poznać Twoje
              potrzeby
            </p>
          </div>
          <div className={styles.card}    style={{ transitionDelay: "200ms" }}>
            <div className={styles.head}>
              <div className={styles.iconwrapper}>
                <NotepadText size={40} strokeWidth={1.5} />
              </div>
              <p>Plan leczenia</p>
            </div>
            <p className={styles.description}>
              Przedstawiamy plan leczenia i odpowiadamy na wszystkie pytania.
            </p>
          </div>
          <div className={styles.card}    style={{ transitionDelay: "300ms" }}>
            <div className={styles.head}>
              <div className={styles.iconwrapper}>
                <Sparkle size={40} strokeWidth={1.5} />
              </div>
              <p>Leczenie</p>
            </div>
            <p className={styles.description}>
              Przystępujemy do leczenia w komfortowych warunkach, z dbałością o
              każdy detal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
