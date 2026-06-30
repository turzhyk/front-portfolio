import React from "react";
import styles from "./warsztat.module.css";
import { FaqElement } from "./FaqElement";
export default function Faq() {
  return (
    <section id="faq" className={styles.faq}>
      <h2>Odpowiadamy na pytania</h2>
      <div>
        <FaqElement
          title="Czy muszę umawiać się na wizytę?"
          text="Tak, zachęcamy do wcześniejszego umówienia terminu telefonicznie lub przez formularz kontaktowy. W nagłych przypadkach postaramy się pomóc jak najszybciej."
        />
        <FaqElement
          title="Jak długo trwa naprawa samochodu?"
          text="Czas naprawy zależy od rodzaju usterki i dostępności części. Po diagnozie poinformujemy Cię o przewidywanym terminie realizacji."
        />
        <FaqElement
          title="Czy przed naprawą otrzymam wycenę?"
          text="Oczywiście. Zawsze przedstawiamy orientacyjny koszt naprawy przed rozpoczęciem prac. Nie wykonujemy dodatkowych usług bez zgody klienta."
        />
        <FaqElement
          title="Jakie marki samochodów obsługujecie?"
          text="Serwisujemy większość marek samochodów osobowych i dostawczych – zarówno europejskich, jak i azjatyckich."
        />
        <FaqElement
          title="Czy używacie oryginalnych części?"
          text="Korzystamy zarówno z oryginalnych części, jak i wysokiej jakości zamienników. Wybór zawsze konsultujemy z klientem."
        />
        <FaqElement
          title="Czy mogę zapłacić kartą?"
          text="Tak, akceptujemy płatności kartą, gotówką oraz przelewem."
        />
        <FaqElement
          title="Czy udzielacie gwarancji na wykonane usługi?"
          text="Tak, wszystkie wykonane naprawy objęte są gwarancją zgodnie z obowiązującymi warunkami serwisu."
        />
        <FaqElement
          title="Co zrobić, jeśli nie wiem, co dokładnie jest nie tak z samochodem?"
          text="To żaden problem. Przeprowadzimy diagnostykę, znajdziemy przyczynę usterki i przedstawimy najlepsze rozwiązanie wraz z wyceną."
        />
        {/* <FaqElement
          title=""
          text=""
        /> */}
      </div>{" "}
    </section>
  );
}
