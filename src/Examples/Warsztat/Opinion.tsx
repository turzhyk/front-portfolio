import React from "react";
import styles from "./warsztat.module.css";
import { StarSvg } from "./SVG/StarSvg";
import { QuoteSvg } from "./SVG/QuoteSvg";

export const OpinionItem = ({
  name,
  text,
  time,
  car,
}: {
  name: string;
  text: string;
  time: string;
  car: string;
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <div className={styles.pic}></div>
        <div className={styles.name}>
          {name}
          <div className={styles.stars}>
            {" "}
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
          </div>
        </div>
        <QuoteSvg size={60} cls={styles.quote} thickness={0} />
      </div>
    </div>
  );
};

export default function Opinion() {
  return (
    <section id="opinion" className={styles.opinion}>
      <h2>Co o nas mówią klienci</h2>
      <p>
        Zaufanie naszych klientów to dla nas największa motywacja do naszego
        działania
      </p>
      <div className={styles.top}>
        <div className={styles.left}>
          <h3>
            <strong>4.9</strong>/5
          </h3>
          <div className={styles.stars}>
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
          </div>
          <p>
            Na podstawie <strong>59</strong> opinii
          </p>
        </div>
        <div className={styles.vert} />
        <div className={styles.mid}>
          <p>Srednia ocena w Google</p>
          <div className={styles.google}>
            <img src="/svg/socials/google.svg" alt="" height={40} />{" "}
            <strong>4.9</strong>{" "}
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
          </div>
          <a>Zobacz wszystkie opinie</a>
        </div>
      </div>
      <div className={styles.content}>
        <OpinionItem name="Michał" text="ads" car="BMW" time="2 tygonia temu" />
        <OpinionItem name="Michał" text="ads" car="BMW" time="2 tygonia temu" />
        <OpinionItem name="Michał" text="ads" car="BMW" time="2 tygonia temu" />
      </div>
    </section>
  );
}
