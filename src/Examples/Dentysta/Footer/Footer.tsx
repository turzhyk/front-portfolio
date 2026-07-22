import React from "react";
import styles from "./Footer.module.css";
import { PhoneSvg } from "../SVG/PhoneSvg";
import { Clock2Svg } from "../SVG/Clock2Svg";
import { LocationSvg } from "../SVG/LocationSvg";
import { MailSvg } from "../SVG/MailSvg";
import { FacebookThinSvg } from "../SVG/FacebookThinSvg";
import { InstagramSvg } from "../SVG/InstagramSvg";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.desc}>
          <img src="/images/demo/dentysta_logo.webp" width={200} alt="logo" />
          <p>Profesjonalna opieka nad Twoim uśmiechem</p>
          <p>
            Kompleksowe leczenie i profilaktyka stomatologiczna. Nowoczesne
            metody, doświadczeni specjaliści i komfort na każdym etapie.А
          </p>
        </div>
        <nav className={styles.nav}>
          <h3>Navigacja</h3>
          <ul>
            <li>
              <a href="/demo/dentysta#hero">Strona głowna</a>
            </li>
            <li>
              <a href="/demo/dentysta#uslugi">Usługi</a>
            </li>
            <li>
              <a href="/demo/dentysta#about">O nas</a>
            </li>
            <li>
              <a href="/demo/dentysta#offer">Cennik</a>
            </li>
            <li>
              <a href="/demo/dentysta#team">Poznaj nas</a>
            </li>
            <li>
              <a href="/demo/dentysta#faq">Pytania i opdowiedzi</a>
            </li>
            <li>
              <a href="/demo/dentysta#contact">Kontakt</a>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <h3>Usługi</h3>
          <ul>
            <li>
              <a href="/demo/dentysta/prices">Stomatologia zachowawcza</a>
            </li>
            <li>
              <a href="/demo/dentysta/prices">Implantologia</a>
            </li>
            <li>
              <a href="/demo/dentysta/prices">Stomatologia estetyczna</a>
            </li>
          </ul>
        </nav>

        <div className={styles.contactCol}>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <a href="tel:123 456 789">
                <PhoneSvg thickness={2} size={25} cls={styles.accent_icon} />
                066 456 789
              </a>
            </li>
            <li>
              <Clock2Svg thickness={2} size={25} cls={styles.accent_icon} />
              Pon. – Pt.: 8:00 – 20:00
              <br />
              Sobota: 9:00 – 14:00
            </li>
            <li>
              <LocationSvg
                thickness={2}
                width="24"
                height="24"
                cls={styles.accent_icon}
              />
              ul. Uśmiechnięta 15, 60-001 Poznań
            </li>
            <li>
              <a href="mailto:kontakt@automax.pl">
                <MailSvg thickness={2} size={24} cls={styles.accent_icon} />
                kontakt@usmiechstomatologia.pl
              </a>
            </li>
          </ul>
          <h3>Gdzie nas znajdziesz?</h3>
          <img
            className={styles.locationImage}
            src="/images/demo/dentysta_contact_1.webp"
            alt="location"
          />
        </div>
      </div>
      <div className={styles.media}>
        <a>
          <FacebookThinSvg size={22} thickness={0} />
        </a>
        <a>
          <InstagramSvg size={22} thickness={0} />
        </a>
      </div>
    </footer>
  );
}
