import styles from "./styles.module.css";
import { StarSvg } from "./SVG/StarSvg";
import { QuoteSvg } from "./SVG/QuoteSvg";
import { LeafSvg } from "./SVG/LeafSvg";
import { useInView } from "./useInView";
import clsx from "clsx";

export const OpinionItem = ({
  name,
  text,
  time,
  pic,
  animationDelay
}: {
  name: string;
  text: string;
  time: string;
  pic:string;
  animationDelay?:string;
}) => {
  
  return (
    <div className={styles.item} style={{transitionDelay:animationDelay}}>
      <div className={styles.head}>
        <div className={styles.pic}>{pic}</div>
        <div className={styles.name}>
          {name}
          <div className={styles.stars}>
         
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={20} cls={styles.accent_icon} thickness={0} />
          </div>
        </div>
        <QuoteSvg size={50} cls={styles.quote} thickness={0} />
      </div>
      <p>{text}</p>
      <div className={styles.foot}><span></span><strong>{time}</strong></div>
    </div>
  );
};

export default function Opinion() {
  const { ref, isVisible } = useInView(0.4);
  return (
    <section ref={ref} id="opinion" className={clsx(styles.opinion, isVisible && styles.visible)}>
      <h2>Co o mnie mówią klienci</h2>
      <p>
        Zaufanie naszych klientów to dla nas największa motywacja do naszego
        działania
      </p>
      <div className={styles.top}>
         <LeafSvg size={160} thickness={6} cls={styles.leaf}/>
        <div className={styles.left}>
          <h3>
            <strong>4.9</strong>/5
          </h3>
          <div className={styles.stars}>
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={30} cls={styles.accent_icon} thickness={0} />
          </div>
          <p>
            Na podstawie <strong>59</strong> opinii
          </p>
        </div>
        <div className={styles.vert} />
        <div className={styles.mid}>
          <p>Srednia ocena w Google</p>
          <div className={styles.google}>
            <img src="/svg/socials/google.svg" alt="" height={40} />{" "}
            <strong>4.9</strong>{" "}
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
            <StarSvg size={25} cls={styles.accent_icon} thickness={0} />
          </div>
          <a>Zobacz wszystkie opinie</a>
        </div>
      </div>
      <div className={styles.content}>
        <OpinionItem animationDelay="0" pic="AK" name="Anna K." text="Bardzo przyjemna atmosfera i pełen profesjonalizm. Po masażu plecy przestały mnie boleć, a napięcie praktycznie zniknęło. Na pewno jeszcze wrócę."  time="3 tygonia temu" />
        <OpinionItem  animationDelay="100ms" pic="MW" name="Michał W." text="Skorzystałem z masażu po treningu i to był świetny wybór. Mięśnie szybciej doszły do siebie, a następnego dnia czułem się znacznie lepiej. Polecam." time="2 tygonia temu" />
        <OpinionItem  animationDelay="200ms"  pic="KS" name="Katarzyna S." text="To była moja pierwsza wizyta i jestem bardzo zadowolona. Masaż był dokładnie taki, jakiego potrzebowałam – relaksujący, ale jednocześnie skuteczny. Miła obsługa i komfortowe miejsce."  time="1 miesiąć temu" />
      </div>
    </section>
  );
}
