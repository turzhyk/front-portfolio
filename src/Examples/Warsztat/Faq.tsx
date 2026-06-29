import React from "react";
import styles from "./warsztat.module.css";
import { FaqElement } from "./FaqElement";
export default function Faq() {
  return (
    <section id="faq" className={styles.faq}>
      <h2>Odpowiadamy na pytania</h2>
      <div>
        <FaqElement
          title="Jasdkaskdk asdk asld la s?"
          text="adawd ad wwa frsgp[ rg okerpg kope kr"
        />
        <FaqElement
          title="Jasdkaskdk asdk asld la s?"
          text="adawd ad wwa frsgp[ rg okerpg kope kr"
        />
      </div>{" "}
    </section>
  );
}
