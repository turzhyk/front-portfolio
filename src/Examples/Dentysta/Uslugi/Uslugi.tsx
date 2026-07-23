import { Baby, Computer, MoveRight, Sparkles } from "lucide-react";
import styles from "./Uslugi.module.css";

import { ZoomSvg } from "../SVG/ZoomSvg";
import { ImplantSvg } from "../SVG/ImplantSvg";
import clsx from "clsx";
import { useInView } from "../useInView";

export const UslugiItem = ({
  title,
  desc,
  icon,
  image,
  delay
}: {
  title: string;
  desc: string;
  price: number;
  time: string;
  icon: React.ReactNode;
  image: string;
  delay?:string
}) => {
  return (
    <div className={styles.item} style={{transitionDelay:delay}}>
      <div className={styles.top}>
        <img src={image} alt="" loading="lazy" height={250} />
      </div>
      <div className={styles.iconwrapper}>{icon}</div>
      <div className={styles.bottom}>
        <h3>{title}</h3>
        <p>{desc}</p>

        <a href="/demo/dentysta/prices" className={styles.cta}>
          Więcej
          <MoveRight color="currentColor" size={20} />
        </a>
      </div>
    </div>
  );
};

export default function Uslugi() {
   const { ref, isVisible } = useInView(0.2);
   const { ref:ref2, isVisible:isVisible2 } = useInView(0.1);

   
  return (
    <section ref={ref} id="uslugi" className={clsx(styles.uslugi,  isVisible && styles.visible)}>
      <h3>Kompleksowa opieka</h3>
      <h2>Nasze usługi</h2>
      <p>Oferujemy szeroki zakres usług stomatolocznych</p>
      <div ref={ref2} className={clsx(styles.wrapper,  isVisible2 && styles.visible)}>
        <UslugiItem
          icon={<ZoomSvg size={40} thickness={1.5} strokeColor="var(--accent)" cls={styles.accent_icon} />}
          time="1 godzina"
          price={200}
          title="Stomatologia zachowawcza"
          desc="Pozwala rozluźnić mięśnie i zmniejszyć poziom stresu."
          image="/images/demo/dentysta_uslugi_1.webp"
          
        />
        <UslugiItem
          icon={
            <ImplantSvg size={40} thickness={1.5} cls={styles.accent_icon} />
          }
          time="1 godzina"
          price={200}
          title="Implantologia"
          desc="Pomaga zmniejszyć ból mięśni i stawów oraz wspiera proces regeneracji organizmu."
          image="/images/demo/dentysta_uslugi_2.webp"
          delay="70ms"
        />
        <UslugiItem
          icon={<Sparkles size={40} strokeWidth={1.5} color="var(--accent)" />}
          time="1 godzina"
          price={250}
          title="Stomatologia estetyczna"
          desc="Przyspiesza regenerację po wysiłku fizycznym, poprawia elastyczność mięśni i zmniejsza ryzyko kontuzji."
          image="/images/demo/dentysta_uslugi_3.webp"
             delay="140ms"
        />
        <UslugiItem
          icon={<Baby size={40} strokeWidth={1.5} color="var(--accent)" />}
          time="1 godzina"
          price={200}
          title="Stomatologia dziecięca"
          desc="Poprawia krążenie, redukuje napięcie mięśniowe i wspiera ogólne samopoczucie."
          image="/images/demo/dentysta_uslugi_4.webp"
             delay="210ms"
        />
        <UslugiItem
          icon={<Computer size={40} strokeWidth={1.5} color="var(--accent)" />}
          time="1 godzina"
          price={250}
          title="Diagnostyka"
          desc="Łączy ciepło kamieni z masażem, zapewniając głęboki relaks i rozluźnienie całego ciała."
          image="/images/demo/dentysta_uslugi_5.webp"
             delay="280ms"
        />
      </div>
      <a  href="/demo/dentysta/prices" className={styles.cta2}>
        Zobać wszytkie usługi <MoveRight size={30} color="currentColor" />
      </a>
    </section>
  );
}
