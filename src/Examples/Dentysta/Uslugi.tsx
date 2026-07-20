import { Baby, Computer, MoveRight, Sparkle, Sparkles } from "lucide-react";
import styles from "./styles.module.css";
import { Clock2Svg } from "./SVG/Clock2Svg";
import { LogoSvg } from "./SVG/LogoSvg";
import { ZoomSvg } from "./SVG/ZoomSvg";
import { ImplantSvg } from "./SVG/ImplantSvg";

export const UslugiItem = ({
  title,
  desc,
  price,
  time,
  icon,
  image,
}: {
  title: string;
  desc: string;
  price: number;
  time: string;
  icon: React.ReactNode;
  image: string;
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <img src={image} alt="" loading="lazy" height={250} />
      </div>
      <div className={styles.iconwrapper}>{icon}</div>
      
      <h3>{title}</h3>
      <p>{desc}</p>
     
      <a href="#contact" className={styles.cta}>
        Więcej
        <MoveRight color="currentColor" size={20}/>
      </a>
    </div>
  );
};

export default function Uslugi() {
  return (
    <section id="uslugi" className={styles.uslugi}>
      <h3>Kompleksowa opieka</h3>
      <h2>Nasze usługi</h2>
      <p>Oferujemy szeroki zakres usług stomatolocznych</p>
      <div className={styles.wrapper}>
        <UslugiItem
          icon={
           <ZoomSvg size={45} thickness={1.5} cls={styles.accent_icon}/>
          }
          time="1 godzina"
          price={200}
          title="Stomatologia zachowawcza"
          desc="Pozwala rozluźnić mięśnie i zmniejszyć poziom stresu."
          image="/images/demo/dentysta_uslugi_1.webp"
        />
        <UslugiItem
          icon={
            <ImplantSvg size={45} thickness={1.5} cls={styles.accent_icon}/>
          }
          time="1 godzina"
          price={200}
          title="Implantologia"
          desc="Pomaga zmniejszyć ból mięśni i stawów oraz wspiera proces regeneracji organizmu."
           image="/images/demo/dentysta_uslugi_2.webp"
        />
        <UslugiItem
          icon={
               <Sparkles size={45} strokeWidth={1.5} color="var(--accent)"/>
          }
          time="1 godzina"
          price={250}
          title="Stomatologia estetyczna"
          desc="Przyspiesza regenerację po wysiłku fizycznym, poprawia elastyczność mięśni i zmniejsza ryzyko kontuzji."
           image="/images/demo/dentysta_uslugi_3.webp"
        />
        <UslugiItem
          icon={
           <Baby size={45} strokeWidth={1.5} color="var(--accent)"/>
          }
          time="1 godzina"
          price={200}
          title="Stomatologia dziecięca"
          desc="Poprawia krążenie, redukuje napięcie mięśniowe i wspiera ogólne samopoczucie."
           image="/images/demo/dentysta_uslugi_4.webp"
        />
        <UslugiItem
          icon={
             <Computer size={45} strokeWidth={1.5} color="var(--accent)"/>
          }
          time="1 godzina"
          price={250}
          title="Diagnostyka"
          desc="Łączy ciepło kamieni z masażem, zapewniając głęboki relaks i rozluźnienie całego ciała."
           image="/images/demo/dentysta_uslugi_5.webp"
        />
      </div>
      <a href="" className={styles.cta2}>Zobać wszytkie usługi <MoveRight  size={30} color="currentColor"/></a>
    </section>
  );
}
