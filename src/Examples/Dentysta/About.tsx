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
import { ShieldCkeckSvg } from "./SVG/ShieldCheckSvg";
import { TimerCheckSvg } from "./SVG/TimerCheck";
import { ToothBigSvg } from "./SVG/ToothBigSvg";
import { LabSvg } from "./SVG/LabSvg";

export const AboutItem = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc:string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.top}> <h4>{title}</h4>
      <p>{desc}</p></div>
     
      <div className={styles.icon}>
      {icon}
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
    ><h3>Dlaczego klienci wybierają nas?</h3>
      <h2>Komfort i bezpieczeństwo podczas każdej wizyty</h2>
      <p>
        Nowoczesna stomatologia, komfort leczenia i indywidualne podejście do
        każdego pacjenta.
      </p>
      
      <div className={styles.content}>
        <AboutItem
          title="Leczenie bez bólu"
          desc="Komfort podczs każdej wizyty"
          icon={
            <ShieldCkeckSvg
              thickness={1.5}
              className={styles.accent_icon}
            size={55}
            />
          }
        />
        <AboutItem title="Krótkie terminy"  desc="Komfort podczs każdej wizyty" icon={ <TimerCheckSvg
              thickness={2}
              className={styles.accent_icon}
            size={50}
            />} />
        <AboutItem title="Zdjęcia RTG na miejscu"  desc="Komfort podczs każdej wizyty" icon={ <ToothBigSvg
              thickness={2}
              className={styles.accent_icon}
            size={55}
            />} />
        <AboutItem title="Nowoczesny sprzęt"  desc="Komfort podczs każdej wizyty" icon={<LabSvg
              thickness={2}
              className={styles.accent_icon}
            size={55}
            />} />
      </div>
    </section>
  );
}
