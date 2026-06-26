import React from "react";
import styles from "./warsztat.module.css";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <div className={styles.left}>
          <h2> Dlaczego warto nam zaufać?</h2>
          <ul>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Ponad 10 lat doświadczenia
            </li>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Nowoczesny sprzęt diagnostyczny
            </li>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Uczciwe ceny bez uktrytych kosztów
            </li>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Gwarancja na wykonane usługi
            </li>
          </ul>
        </div>
        <div className={styles.divider} />
        <div className={styles.right}>
          <div>
            {" "}
            <h2>Gdzie nas znajdiesz?</h2>
            <ul>
              <li>
                <CheckmarkThinSvg
                  width="30px"
                  height="30px"
                  cls={styles.accent_icon}
                />
                ul. Przemysłowa 12<br/>
                60-123 Poznań
              </li>
              <li>
                <CheckmarkThinSvg
                  width="30px"
                  height="30px"
                  cls={styles.accent_icon}
                />
                Zobacz trasę na mapie
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
