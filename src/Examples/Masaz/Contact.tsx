import React from "react";
import styles from "./styles.module.css";
import Calendar from "./Calendar";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Skontaktuj się</h2>
      <div className={styles.line}></div>
      <form>
        <div className={styles.top}>
          <div className={styles.left}>
           <div className={styles.field}>
  <label htmlFor="name">Twoje imię</label>
  <input
    id="name"
    type="text"
    placeholder="np. Maciej"
  />
</div>

<div className={styles.field}>
  <label htmlFor="phone">Twój numer telefonu</label>
  <input
    id="phone"
    type="tel"
    placeholder="np. 066 123 456"
  />
</div>

<div className={styles.field}>
  <label htmlFor="carModel">Model twojego samochodu</label>
  <input
    id="carModel"
    type="text"
    placeholder="np. Toyota Yaris 2011"
  />
</div>
          </div>
          <div className={styles.right}>
            <Calendar/>
          </div>
        </div>
        <input type="submit" value={"Umów wizytę"}/>
      </form>

      <div className={styles.line2}></div>
    </section>
  );
}
