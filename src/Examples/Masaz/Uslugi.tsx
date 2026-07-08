import styles from "./styles.module.css";
import { EnigneSvg } from "./SVG/EnigneSvg";
import { WrenchSvg } from "./SVG/WrenchSvg";
import { BrakesSvg } from "./SVG/BrakesSvg";
import { OilIcon } from "./SVG/OilIcon";
import { SnowflakeSvg } from "./SVG/SnowflakeSvg";
import { Clock2Svg } from "./SVG/Clock2Svg";
import { LogoSvg } from "./SVG/LogoSvg";


export const UslugiItem = ({
  title,
  price,
  time,
  icon,
}: {
  title: string;
  price: number;
  time: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className={styles.item}>
     {icon}
      <h3>{title}</h3>
      <p>Pozwala rozluźnić mięśnie i zmniejszyć poziom stresu.</p>
      <div className={styles.footer1}> <div className={styles.price}>
        <strong>{price}zł</strong>
      </div>
      <div className={styles.time}><Clock2Svg size={20} cls={styles.accent_icon} thickness={2} />
        <strong>{time}</strong>
      </div></div>
     <a className={styles.cta}>Umów wizytę</a>
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
       
        <UslugiItem icon={<></>} time="1 godzina" price={200} title="Relaksacyjny"/>
        <UslugiItem icon={<></>} time="1 godzina" price={200} title="Relaksacyjny"/>
        <UslugiItem icon={<></>} time="1 godzina" price={200} title="Relaksacyjny"/>
        <UslugiItem icon={<></>} time="1 godzina" price={200} title="Relaksacyjny"/>
        <UslugiItem icon={<></>} time="1 godzina" price={200} title="Relaksacyjny"/>
      </div>
    </section>
  );
}
