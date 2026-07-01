import React from "react";
import styles from "./warsztat.module.css";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Skontaktuj się</h2>
      <div className={styles.line}></div>
      <form>
        <div className={styles.top}>
          <div className={styles.left}>
            <fieldset className={styles.field}>
              <legend>Twoje imię</legend>
              <input type="text" placeholder="np. Maciej"/>
            </fieldset>
            <fieldset className={styles.field}>
              <legend>Twój numer telefonu</legend>
              <input type="tel" placeholder="np. 066 123 456"/>
            </fieldset>
            {/* 
          <fieldset className={styles.field}>
            <legend>Twój e-mail</legend>
            <input type="email" />
          </fieldset> */}
            <fieldset className={styles.field}>
              <legend>Model twojego samochodu</legend>
              <input type="text" placeholder="np. Toyota Yaris 2011"/>
            </fieldset>
          </div>
          <div className={styles.right}>
            <p className={styles.textarea_label}>Opisz swój probem</p>

            <textarea id="message" className={styles.textarea} rows={6} placeholder="np. Samochód gaśnie / stuki przy hamowaniu / świeci kontrolka silnika" />
            <p className={styles.example}></p>
          </div>
        </div>
        <input type="submit" value={"Umów wizytę"}/>
      </form>

      <div className={styles.line2}></div>
    </section>
  );
}
