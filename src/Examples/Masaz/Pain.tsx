import React from "react";
import styles from "./styles.module.css";
import { LogoSvg } from "./SVG/LogoSvg";
import { Divider } from "./SVG/Divider";

export const PainItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.item}>
      <img src="/svg/sad_face.svg" alt="" width={70} />
      <p>{text}</p>
    </div>
  );
};

export default function Pain() {
  return (
    <section className={styles.pain} id="pain">
      <h2>Czy to brzmi znajomo?</h2>
      <div className={styles.subtitle}>
        <div className={styles.line} />
        <LogoSvg size={50} thickness={3} cls={styles.accent_icon} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <PainItem text="Ból karku" />
        <Divider size={120} thickness={4} cls={styles.icon_accent}/>
        <PainItem text="Siedzisz cały dzień przy komputerze" />
        <Divider size={120} thickness={4} cls={styles.icon_accent}/>
        <PainItem text="Ból pleców" />
        <Divider size={120} thickness={4} cls={styles.icon_accent}/>
        <PainItem text="Ciągły stres" />
        <Divider size={120} thickness={4} cls={styles.icon_accent}/>
        <PainItem text="Zmęczone mięśnie" />
      </div>
    </section>
  );
}
