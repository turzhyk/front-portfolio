import React from "react";
import styles from "./styles.module.css";
import { WarrantySvg } from "./SVG/WarrantySvg";
import { ClockSvg } from "./SVG/ClockSvg";
import { LikeSvg } from "./SVG/LikeSvg";
import { PhoneFillSvg } from "./SVG/PhoneFillSvg";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
import { CloverSvg } from "./SVG/CloverSvg";
import { PhoneSvg } from "./SVG/PhoneSvg";
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Pozbądź się bólu pleców i napięcia mięśni</h1>
        <ul>
          <li>
            <CloverSvg size={35} thickness={0} cls={styles.icon} />
            Masaż leczniczy
          </li>
          <li>
            <CloverSvg size={35} thickness={0} cls={styles.icon} />
           relaksacyjny
          </li>
          <li>
            <CloverSvg size={35} thickness={0} cls={styles.icon} />
            sportowy
          </li>
        </ul>
        <div className={styles.cta_list}>
          
          <a className={styles.cta_reserve}>Umów wizytę</a><button className={styles.cta_call}>
            {" "}
            <PhoneSvg
              size={30}
              thickness={2}
              cls={styles.accent_icon}
            />{" "}
            Zadzwoń
          </button>
        </div>

        {/* <div className={styles.features}>
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
        </div> */}
      </div>
      <div className={styles.trans}>
        <svg
          width="100"
          height="9"
          viewBox="0 0 100 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.8104 5.75C31.2014 5.55 0 7 0 7V3C0 3 92.0994 2 92.9007 2C93.9023 2 104.419 5.25 92.9007 4.75C81.3822 4.25 66.8588 6.25 58.3451 6.5C49.8314 6.75 43.8217 6 36.8104 5.75Z"
            fill="currentColor"
            fill-opacity="0.6"
          />
          <path
            d="M35.25 7C24.45 7 7.62939e-06 5 7.62939e-06 4.57692V0H100.25V5.38462C96.0833 4.66667 85.45 3.23077 76.25 3.23077C64.75 3.23077 48.75 7 35.25 7Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
