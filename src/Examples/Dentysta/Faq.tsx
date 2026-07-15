import styles from "./styles.module.css";
import { FaqElement } from "./FaqElement";
import { LogoSvg } from "./SVG/LogoSvg";
import { useInView } from "./useInView";
import clsx from "clsx";
export default function Faq() {
   const { ref, isVisible } = useInView(0.2);
  return (
    <section ref={ref} id="faq" className={clsx(styles.faq, isVisible && styles.visible)}>
      <h2>Odpowiadam na pytania</h2>
      <div className={styles.subtitle}>
        <div className={styles.line} />
        <LogoSvg size={50} thickness={3} cls={styles.accent_icon} />
        <div className={styles.line} />
      </div>
      <div className={styles.wrapper}>
        <FaqElement
          title="Czy muszę się wcześniej umówić?"
          text="Tak, wszystkie wizyty odbywają się po wcześniejszej rezerwacji. Dzięki temu możemy zapewnić dogodny termin i odpowiednią ilość czasu dla każdego klienta."
        />
        <FaqElement
          title="Jak długo trwa masaż?"
          text="Standardowa sesja trwa od 60 do 90 minut, w zależności od wybranego rodzaju masażu i indywidualnych potrzeb."
        />
        <FaqElement
          title="Jak przygotować się do masażu?"
          text="Wystarczy założyć wygodne ubranie i przyjść kilka minut przed wizytą. Przed rozpoczęciem masażu omówimy Twoje oczekiwania oraz ewentualne dolegliwości."
        />
        <FaqElement
          title="Czy masaż jest bolesny?"
          text="Większość masaży jest przyjemna i relaksująca. W przypadku masażu leczniczego lub sportowego możesz odczuwać większy nacisk, jednak intensywność zawsze dostosowujemy do Twojego komfortu."
        />
        <FaqElement
          title="Czy są przeciwwskazania do masażu?"
          text="Tak. W przypadku gorączki, stanów zapalnych, chorób zakaźnych lub świeżych urazów masaż może nie być wskazany. Jeśli masz wątpliwości, skonsultuj się z terapeutą przed wizytą."
        />
        <FaqElement
          title="Jak często warto korzystać z masażu?"
          text="To zależy od celu. Dla relaksu wiele osób wybiera masaż raz w miesiącu, natomiast przy napięciach mięśniowych lub aktywności sportowej częstotliwość może być większa."
        />
   
      </div>
    </section>
  );
}
