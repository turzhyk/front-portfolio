import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import Calendar from "./Calendar";
import clsx from "clsx";

const timeSlots = [
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
] as const;

export default function Contact() {
  const [massageType, setMassageType] = useState<number>(-1);
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)  =>{
    e.preventDefault();
setModalOpened(true);
  }
  useEffect(() => {
    if (!modalOpened) return;

    const timer = setTimeout(() => {
      setModalOpened(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [modalOpened]);
  return (
    <section id="contact" className={styles.contact}>
      <div className={clsx(styles.modal,{[styles.visible]:modalOpened})}>
        <div>
          <h2>Dziękuję!</h2>
          <p>
            Skontaktuję sięz Tobą w ciągu kilku godzin w celu potwierdzenia
            terminu
          </p>
        </div>
      </div>
      <h2>Umów wizytę</h2>
      <div className={styles.line}></div>
      <form onSubmit={onSubmit}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h3>Twoje dane</h3>
            <div className={styles.field}>
              <label htmlFor="name">Twoje imię</label>
              <input id="name" type="text" placeholder="np. Maciej" />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Twój numer telefonu</label>
              <input id="phone" type="tel" placeholder="np. 066 123 456" />
            </div>

            <div className={styles.massage_type}>
              <p>Typ masażu</p>
              <div className={styles.items}>
                <button
                  type="button"
                  onClick={() => setMassageType(0)}
                  className={clsx({ [styles.selected]: massageType == 0 })}
                >
                  Relaksacyjny
                </button>
                <button
                  type="button"
                  onClick={() => setMassageType(1)}
                  className={clsx({ [styles.selected]: massageType == 1 })}
                >
                  Leczniczy
                </button>
                <button
                  type="button"
                  onClick={() => setMassageType(2)}
                  className={clsx({ [styles.selected]: massageType == 2 })}
                >
                  Sportowy
                </button>
                <button
                  type="button"
                  onClick={() => setMassageType(3)}
                  className={clsx({ [styles.selected]: massageType == 3 })}
                >
                  Sportowy
                </button>
                <button
                  type="button"
                  onClick={() => setMassageType(4)}
                  className={clsx({ [styles.selected]: massageType == 4 })}
                >
                  Gorącymi kamieniami{" "}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Calendar onSelect={setDate} />
            <div
              className={clsx(styles.time_select, {
                [styles.visible]: date != undefined,
              })}
            >
              <h3>Godzina</h3>
              <div className={styles.time_list}>
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    className={clsx({ [styles.selected]: slot == time })}
                    onClick={() => setTime(slot)}
                    key={slot}
                    value={slot}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value={"Umów wizytę"} />
      </form>

      <div className={styles.line2}></div>
    </section>
  );
}


