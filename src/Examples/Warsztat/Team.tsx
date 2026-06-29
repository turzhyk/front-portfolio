import React from "react";
import styles from "./warsztat.module.css";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
export const Team = () => {
  return (
    <section id={"team"} className={styles.team}>
      <h2>Poznaj nasz zespół</h2>
      <p>Doświdczenie, pasja i uczciwość - to nasza recepta na solidny serwis.<br/>Każde auto traktujemy tak, jakby było nazse.</p>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.pic}>
            <img
              src="/images/demo/warsztat_team_1.webp"
              width={450}
              alt="team_photo"
              loading="lazy"
              style={{ marginLeft: "-50px" }}
            />
          </div>
          <h3>Tomasz</h3>
          <p className={styles.position}>Właściciel, diagnosta</p>
          <ul>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Ponad 20 lat doświadczenia
            </li>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Specjalista od diagnostyki komputerowej
            </li>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Zawsze znajdzie żródło problemu
            </li>
          </ul>
        </div>{" "}
        <div className={styles.item}>
          <div className={styles.pic}>
            <img
              src="/images/demo/warsztat_team_3.webp"
              width={350}
              alt="team_photo"
              loading="lazy"
              style={{marginTop:"-20px"}}
            />
          </div>
          <h3>Andrzej</h3>
          <p className={styles.position}>Mechanik</p>
          <ul>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              30+ lat w brąży
            </li>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Specjalista od napraw silników
            </li>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Ceni dokładność i porządek w pracy
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.pic}>
            <img
              src="/images/demo/warsztat_team_2.webp"
              width={350}
              alt="team_photo"
              loading="lazy"
              style={{ marginTop: "-20px" }}
            />
          </div>
          <h3>Kamil</h3>
          <p className={styles.position}>Mechanik</p>
          <ul>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
             Specjalizuje ssię w układach hamulcowych
            </li>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Na bieżąco z nowymi technologiami
            </li>
            <li>
              <CheckmarkThinSvg
                width="22"
                height="22"
                cls={styles.accent_icon}
              />
              Szybki, dokładny i zaangażowany
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
