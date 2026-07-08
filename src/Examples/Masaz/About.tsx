import { LaptopMinimalCheck, Leaf, Star } from "lucide-react";
import styles from "./styles.module.css";
import { CalendarSvg } from "./SVG/CalendarSvg";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
import { useInView } from "./useInView";
export default function About() {
  const { ref, isVisible } = useInView();
  return (
    <section
      ref={ref}
      className={styles.about + " " + (isVisible ? styles.visible : "")}
      id="about"
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <h2> Dlaczego klienci wybierają właśnie mnie?</h2>{" "}
          <ul>
            <li><Star size={30} strokeWidth={2} color="currentColor"/> Indywidualne podejście</li>
            <li><CheckmarkThinSvg width="30" height="30" cls={styles.accent_icon}/>Kameralny gabinet</li>
            <li><Leaf size={30} strokeWidth={2} color="currentColor"/> Naturalne olejki</li>
            <li><LaptopMinimalCheck size={30} strokeWidth={2} color="currentColor"/> Możliwość rezerwacji online</li>
          </ul>
          <a><CalendarSvg thickness={1.2} width="40" height="40" cls={styles.x}/>Umów wizytę</a>
          <p className={styles.after_cta}>Zrób pierwszy krok do liepszego samopoczucia</p>
        </div>

        <div className={styles.right}>
          <img src="/images/demo/masaz_about_2.webp" alt="gabinet" height={600}/>
        </div>
      </div>
      <div className={styles.wrapper}></div>
    </section>
  );
}
