import React, { useState } from "react";
import styles from "./warsztat.module.css";
import { ArrowSvg } from "./SVG/ArrowSvg";
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
        <p>{text}</p>
      </div>
    </div>
  );
};
