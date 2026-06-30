import React from "react";
import styles from "./warsztat.module.css";
import { PhoneSvg } from "./SVG/PhoneSvg";
import { Clock2Svg } from "./SVG/Clock2Svg";
import { LocationSvg } from "./SVG/LocationSvg";
import { MailSvg } from "./SVG/MailSvg";
import { FacebookThinSvg } from "./SVG/FacebookThinSvg";
import { InstagramSvg } from "./SVG/InstagramSvg";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.desc}>
          <img src="/images/demo/warsztat_logo.webp" width={200} alt="logo" />
          <p>Profesjonalny serwis twojego samochodu</p>
          <p>
            {" "}
            Kompleksowa naprawa i obsługa pojazdów osobowych. Szybko, uczciwie i
            z gwarancją.
          </p>
          <div className={styles.media}>
            <a><FacebookThinSvg size={22} thickness={0} cls={styles.media}/></a>
            <a><InstagramSvg size={22} thickness={0} cls={styles.media}/></a>
          </div>
        </div>
        <nav className={styles.nav}>
          <h3>Navigacja</h3>
          <ul>
            <li>
              <a>Strona głowna</a>
            </li>
            <li>
              <a>Usługi</a>
            </li>
            <li>
              <a>O nas</a>
            </li>
            <li>
              <a>Galeria</a>
            </li>
          </ul>
        </nav>
        <div className={styles.vert} />
        <nav className={styles.nav}>
          <h3>Usługi</h3>
          <ul>
            <li>
              <a>Strona głowna</a>
            </li>
            <li>
              <a>Usługi</a>
            </li>
            <li>
              <a>O nas</a>
            </li>
            <li>
              <a>Galeria</a>
            </li>
          </ul>
        </nav>
        <div className={styles.vert} />
        <div className={styles.contact}>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <PhoneSvg
                thickness={2}
                width="25"
                height="25"
                cls={styles.accent_icon}
              />
              123 456 789
            </li>
            <li>
              <Clock2Svg
                thickness={2}
                width="24"
                height="24"
                cls={styles.accent_icon}
              />
              Pn-Pt: 8:00-16:00
            </li>
            <li>
              <LocationSvg
                thickness={2}
                width="24"
                height="24"
                cls={styles.accent_icon}
              />
              ul. Przemysłowa 12 60-123 Poznan
            </li>
            <li>
              <MailSvg thickness={2} size={24} cls={styles.accent_icon} />
              kontakt@automax.pl
            </li>
          </ul>
        </div>
          <div className={styles.vert} />
          <div>
             <h3>Gdzie nas znajdziesz?</h3>
                <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.2038793069987!2d16.920884412588805!3d52.44234397192433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470443520619846b%3A0xc0b47065da8e1dd3!2zV2lub2dyYWR5LCA2MC0xMDEg0J_QvtC30L3QsNC90Yw!5e1!3m2!1sru!2spl!4v1782673424560!5m2!1sru!2spl"
              width="300"
              height="200"
              
  
              loading="lazy"
             
            ></iframe>
          </div>
      </div>
    </footer>
  );
}
