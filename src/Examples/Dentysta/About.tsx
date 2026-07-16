import {
  CheckCheckIcon,
  LaptopMinimalCheck,
  Leaf,
  LucideHeater,
  Star,
} from "lucide-react";
import styles from "./styles.module.css";
import { CalendarSvg } from "./SVG/CalendarSvg";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
import { useInView } from "./useInView";

import React from "react";

export const AboutItem = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={styles.item}>
     <p>{title}</p> 
      <div className={styles.icon}>
        <CheckCheckIcon size={70} color="currentColor" />
      </div>
    </div>
  );
};

export default function About() {
  const { ref, isVisible } = useInView(0.5);
  return (
    <section
      ref={ref}
      className={styles.about + " " + (isVisible ? styles.visible : "")}
      id="about"
    >
      <h2>Komfort i bezpieczeństwo podczas każdej wizyty</h2>
      <p>Nowoczesna stomatologia, komfort leczenia i indywidualne podejście do każdego pacjenta.</p>
      <div className={styles.content}>
        <AboutItem title="Leczenie bez bólu" icon={<LucideHeater />} />
        <AboutItem title="Krótkie terminy" icon={<LucideHeater />} />
        <AboutItem title="Zdjęcia RTG na miejscu" icon={<LucideHeater />} />
        <AboutItem title="Nowoczesny sprzęt" icon={<LucideHeater />} />
      </div>
    </section>
  );
}
