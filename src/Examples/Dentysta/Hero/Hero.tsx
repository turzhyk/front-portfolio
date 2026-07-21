import styles from "./Hero.module.css";
import { Calendar, ShieldCheck, Users } from "lucide-react";
import { ToothSvg } from "../SVG/ToothSvg";
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h3>Stomatologia na najwyższym poziomie</h3>
        <h1>Zdrowy uśmiech, lepsze życie</h1>
        <p>
          Kompleksowa naprawa i obsługa pojazdów osobowych. Szybko, uczciwie i z
          gwarancją.
        </p>
        <div className={styles.cta_list}>
          <button className={styles.cta_call}>
            {" "}
            <Calendar />
            Umów wizyte
          </button>
          <a className={styles.cta_reserve}>Nasze usługi</a>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <ShieldCheck size={40} stroke="currentColor" />
            </div>
            <span>
              <strong>Doświadczenie</strong>
              <p>Ponad 10 lat praktyki</p>
            </span>
          </div>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <Users size={35} stroke="currentColor" style={{margin:"7px"}}/>
              
            </div>
            <span>
              <strong>Indywidualne podejście</strong>
              <p>Każdy pacjent jest ważny</p>
            </span>
          </div>{" "}
          <div className={styles.feature}>
            <div className={styles.icon}>
              <ToothSvg size={40} thickness={2} />
            </div>
            <span>
              <strong>Nowoczesne technologie</strong>
              <p>Leczenie na najwyższym poziomie</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
