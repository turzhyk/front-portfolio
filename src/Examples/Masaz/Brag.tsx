import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { StarSvg } from "./SVG/StarSvg";
const target = 120;
export default function Brag() {

   const [count, setCount] = useState(0);
   useEffect(() => {
    const step = Math.ceil(target / 20);

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;

        if (next >= target) {
          clearInterval(interval);
          return target;
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [target]);
  return (
    <div className={styles.brag}>
      <div className={styles.stars}>
        <StarSvg size={25} cls={styles.accent_icon} thickness={2} />
        <StarSvg size={25} cls={styles.accent_icon} thickness={2} />
        <StarSvg size={25} cls={styles.accent_icon} thickness={2} />
        <StarSvg size={25} cls={styles.accent_icon} thickness={2} />
        <StarSvg size={25} cls={styles.accent_icon} thickness={2} />
        4.8
      </div>
      <div>
        <strong>{count}+</strong> zadowolonych klientów
      </div>
      <div>
        <strong>&gt;5</strong> lat doświadczenia
      </div>
    </div>
  );
}
