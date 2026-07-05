import React from "react";
import styles from "./warsztat.module.css";
import { StarSvg } from "./SVG/StarSvg";
import { QuoteSvg } from "./SVG/QuoteSvg";
import { CarSvg } from "./SVG/CarSvg";

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
      <p>{text}</p>
      <div className={styles.foot}><span><CarSvg size={25} thickness={2} cls=""/>{car}</span><strong>{time}</strong></div>
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
        <OpinionItem name="Michał" text="Świetny serwis! Szybka diagnoza usterki i profesjonalna naprawa. Auto działa jak nowe. Na pewno wrócę!" car="BMW 320d" time="2 tygonie temu" />
        <OpinionItem name="Anna K." text="Bardzo profesjonalna obsługa i świetny kontakt. Samochód został naprawiony jeszcze tego samego dnia, a przed rozpoczęciem prac dostałam dokładną wycenę. Wszystko przebiegło sprawnie i bez żadnych niespodzianek. Zdecydowanie polecam!" car="BMW 320d" time="2 tygonia temu" />
        <OpinionItem name="piotr" text="Trafiłem z problemem, którego dwa inne warsztaty nie potrafiły zdiagnozować. Tutaj znaleziono usterkę w ciągu godziny i wszystko zostało naprawione w rozsądnej cenie. Miła obsługa, fachowa wiedza i pełen profesjonalizm." car="VW Passat 2.0 TDI" time="1 miesiąć temu" />
      </div>
    </section>
  );
}
