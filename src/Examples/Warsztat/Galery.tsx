import React from "react";
import styles from "./warsztat.module.css";
export default function Galery() {
  return (
    <section className={styles.galery}>
      <h2>Zobacz nasze realizacje</h2>
      <div className={styles.content}>
        <div className={styles.item}>
            <div className={styles.pic}></div>
          <h3>Wymiana rozrządu</h3>
        </div>
      </div>
    </section>
  );
}
