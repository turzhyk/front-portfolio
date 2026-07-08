import styles from "./styles.module.css";
import { LogoSvg } from "./SVG/LogoSvg";
import { Divider } from "./SVG/Divider";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
import { LeafSvg } from "./SVG/LeafSvg";
import { useInView } from "./useInView";

export const PainItem = ({ text }: { text: string }) => {
  
  return (
    <div className={styles.item}>
      
      <CheckmarkThinSvg width="40" height="40" cls={styles.accent_icon}/>
      <p>{text}</p>
    </div>
  );
};

export default function Pain() {
   const { ref, isVisible } = useInView(0.6);
  return (
    <section ref={ref} className={styles.pain + " " + (isVisible? styles.visible:"")} id="pain">
      <h2>Czy to brzmi znajomo?</h2>
      <div className={styles.subtitle}>
        <div className={styles.line} />
        <LogoSvg size={50} thickness={3} cls={styles.accent_icon} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <PainItem  text="Ból karku" />
        <PainItem text="Ból pleców" />
        <PainItem text="Ciągły stres" />
        <PainItem text="Praca przy komputerze" />
        <PainItem text="Zmęczone mięśnie" />
      </div>
      <div className={styles.solution}>
        <h3>Masaż to nie luksus. To inwestycja w zdrowie.</h3>
        Jeśli rozpoznajesz u siebie <strong>choć jeden</strong> z tych
        problemów, masaż może <strong>realnie poprawić</strong> Twój komfort
        życia
        <LeafSvg size={120} thickness={6} cls={styles.white_icon}/>
      </div>
      
    </section>
  );
}
