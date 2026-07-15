import React from "react";
import styles from "./styles.module.css";
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
          <img src="/images/demo/masaz_logo1.webp" width={200} alt="logo" />
          <p>Twój masaż, moja pasja</p>
          <p>
           Kameralne miejsce, indywidualne podejście i profesjonalne techniki masażu dopasowane do Twoich potrzeb.
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
              <a href="#hero">Strona głowna</a>
            </li>
            <li>
              <a href="#uslugi">Usługi</a>
            </li>
            <li>
              <a href="#aboutme">O mnie</a>
            </li>
            <li>
              <a href="#opinion">Opinia</a>
            </li>
            <li>
              <a href="#faq">Pytania</a>
            </li>
          </ul>
        </nav>
     
        {/* <div className={styles.vert} /> */}
        <div className={styles.contact_}>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <PhoneSvg
                thickness={2}
                size={25}
                
                cls={styles.accent_icon}
              />
              066 123 456
            </li>
            <li>
              <Clock2Svg
                thickness={2}
                 size={25}
                cls={styles.accent_icon}
              />
              Pn-Pt: 13:00-21:00
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
              kontakt@harmonia.pl
            </li>
          </ul>
        </div>
         
      </div>
    </footer>
  );
}
