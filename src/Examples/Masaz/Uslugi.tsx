import styles from "./styles.module.css";
import { Clock2Svg } from "./SVG/Clock2Svg";
import { LogoSvg } from "./SVG/LogoSvg";


export const UslugiItem = ({
  title,
  desc,
  price,
  time,
  icon,
}: {
  title: string;
  desc:string;
  price: number;
  time: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={styles.item}>
     {icon}
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={styles.footer1}> <div className={styles.price}>
        <strong>{price}zł</strong>
      </div>
      <div className={styles.time}><Clock2Svg size={20} cls={styles.accent_icon} thickness={2} />
        <strong>{time}</strong>
      </div></div>
     <a href="#contact" className={styles.cta}>Umów wizytę</a>
    </div>
  );
};

export default function Uslugi() {
  return (
    <section id="uslugi" className={styles.uslugi}>
      <h2>Zakres naszych usług</h2>
       <div className={styles.subtitle}>
        <div className={styles.line} />
        <LogoSvg size={50} thickness={3} cls={styles.accent_icon} />
        <div className={styles.line} />
      </div>
      <div className={styles.wrapper}>
       
        <UslugiItem icon={<img width={100} alt="" loading="lazy" src="/images/demo/masaz_relax.png"/>} time="1 godzina" price={200} title="Relaksacyjny" desc="Pozwala rozluźnić mięśnie i zmniejszyć poziom stresu."/>
        <UslugiItem icon={<img width={100} alt="" loading="lazy" src="/images/demo/masaz_doc.png"/>} time="1 godzina" price={200} title="Leczniczy" desc="Pomaga zmniejszyć ból mięśni i stawów oraz wspiera proces regeneracji organizmu."/>
        <UslugiItem icon={<img width={100} alt="" loading="lazy" src="/images/demo/masaz_sport.png"/>} time="1 godzina" price={250} title="Sportowy" desc="Przyspiesza regenerację po wysiłku fizycznym, poprawia elastyczność mięśni i zmniejsza ryzyko kontuzji."/>
        <UslugiItem icon={<img width={100} alt="" loading="lazy" src="/images/demo/masaz_classic.png"/>} time="1 godzina" price={200} title="Klasyczny" desc="Poprawia krążenie, redukuje napięcie mięśniowe i wspiera ogólne samopoczucie."/>
        <UslugiItem icon={<img width={100} alt="" loading="lazy" src="/images/demo/masaz_hot.png"/>} time="1 godzina" price={250} title="Gorącymi kamieniami" desc="Łączy ciepło kamieni z masażem, zapewniając głęboki relaks i rozluźnienie całego ciała."/>
    
      </div>
    </section>
  );
}
