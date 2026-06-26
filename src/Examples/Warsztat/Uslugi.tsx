import React from "react";
import styles from "./warsztat.module.css";
import { EnigneSvg } from "./SVG/EnigneSvg";
import { WrenchSvg } from "./SVG/WrenchSvg";
import { BrakesSvg } from "./SVG/BrakesSvg";
export default function Uslugi() {
  return (
    <section id="uslugi" className={styles.uslugi}>
      <h2>Zakres naszych usług</h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <EnigneSvg width="100px" height="100px" cls={styles.accent_icon} />
          <h3>Diagnostyka komputerowa</h3>
          <p>Szybka i dokładna diagnostyka usterek</p>
        </div>
        <div className={styles.item}>
          <WrenchSvg width="80px" height="80px" cls={styles.accent_icon} />
          <h3>Naprawy mechaniczne</h3>
          <p>Kompletsowe naprawy silnika i usterek</p>
        </div>
        <div className={styles.item}>
          <BrakesSvg width="80px" height="80px" cls={styles.accent_icon} />
          <h3>Hamulce</h3>
          <p>Wymiana klocków, tarcz i płynu hamulcowego</p>
        </div>
        <div className={styles.item}>
          <BrakesSvg width="80px" height="80px" cls={styles.accent_icon} />
          <h3>Wymiana oleju</h3>
          <p>Profesjonalna wymiana oleju i filtrów</p>
        </div>
        <div className={styles.item}>
          <BrakesSvg width="80px" height="80px" cls={styles.accent_icon} />
          <h3>Klimatyzacja</h3>
          <p>Serwis, odgrzybianie i napełnianie klimatyzacji
          </p>
        </div>
      </div>
    </section>
  );
}
