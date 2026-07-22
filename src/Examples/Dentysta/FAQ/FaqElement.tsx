import React, { useState } from "react";
import styles from "./Faq.module.css";
import { ArrowSvg } from "../SVG/ArrowSvg";
export const FaqElement = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div onClick={() => setIsOpened(!isOpened)} className={styles.faq_item + " " + (isOpened ? styles.opened : "")}>
      <div className={styles.title}>
        <p>{title}</p>
        <ArrowSvg size={20} thickness={3} cls={styles.accent_icon} />
      </div>
      <div className={styles.content }>
        <strong>Odpowiedź</strong>
        <p>{text}</p>
      </div>
    </div>
  );
};
