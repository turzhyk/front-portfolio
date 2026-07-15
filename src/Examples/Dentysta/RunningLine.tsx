import React from "react";
import styles from "./styles.module.css";
import { Gift, Heart } from "lucide-react";
import { ToothSvg } from "./SVG/ToothSvg";
import { ToothFillSvg } from "./SVG/ToothFillSvg";
export default function RunningLine() {
  return (
    <div className={styles.runline}>
      <div className={styles.content}>
        <div className={styles.item}>
          <Gift size={25} fill="currentColor"  stroke="var(--accent)"  /> Pierwsza wizyta -15%
        </div>
        <div className={styles.separator}/>
        <div className={styles.item}>
          <Heart fill="currentColor" size={25} stroke="none" style={{animationDelay:"300ms"}}/> Higienizacja zębów -20%
        </div>
        <div className={styles.separator}/>
        <div className={styles.item}>
          <ToothFillSvg size={25} thickness={0} style={{animationDelay:"600ms"}}/> Wybielanie zębów -10%
        </div>
        
      </div>
    </div>
  );
}
