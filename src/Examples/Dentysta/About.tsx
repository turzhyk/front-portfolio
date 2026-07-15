import { LaptopMinimalCheck, Leaf, Star } from "lucide-react";
import styles from "./styles.module.css";
import { CalendarSvg } from "./SVG/CalendarSvg";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
import { useInView } from "./useInView";
export default function About() {
  const { ref, isVisible } = useInView(0.5);
  return (
    <section
      ref={ref}
      className={styles.about + " " + (isVisible ? styles.visible : "")}
      id="about"
    > <h2> Dlaczego pacjenci wybierają nas</h2>
      <div className={styles.content}></div>
    </section>
  );
}
