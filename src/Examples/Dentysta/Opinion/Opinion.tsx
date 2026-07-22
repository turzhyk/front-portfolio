import styles from "./Opinion.module.css";
import { StarSvg } from "../SVG/StarSvg";
import { QuoteSvg } from "../SVG/QuoteSvg";
import { useInView } from "../useInView";
import clsx from "clsx";

export const OpinionItem = ({
  name,
  text,
  time,
  pic,
  animationDelay,
}: {
  name: string;
  text: string;
  time: string;
  pic: string;
  animationDelay?: string;
}) => {
  return (
    <div className={styles.item} style={{ transitionDelay: animationDelay }}>
      
      <div className={styles.foot}>
       <div className={styles.quoteIcon}><QuoteSvg size={40} cls={styles.quote} thickness={0} /></div> 
        <div className={styles.stars}>
          <StarSvg size={20} cls={styles.star} thickness={0} />
          <StarSvg size={20} cls={styles.star} thickness={0} />
          <StarSvg size={20} cls={styles.star} thickness={0} />
          <StarSvg size={20} cls={styles.star} thickness={0} />
          <StarSvg size={20} cls={styles.star} thickness={0} />

        </div>
           <img src="/svg/socials/google.svg" alt="" height={30} />{" "}
      </div>
      <p>{text}</p>
      <div className={styles.head}>
        <div className={styles.pic}>{pic}</div>
        <div className={styles.name}>
          {name}
          <p className={styles.time}>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default function Opinion() {
  const { ref, isVisible } = useInView(0.4);
  return (
    <section
      ref={ref}
      id="opinion"
      className={clsx(styles.opinion, isVisible && styles.visible)}
    >
      <div className={styles.wrapper}>
        <h3>Opinie pacjentów</h3>
        <h2>Zadowolenie naszych pacjentów</h2>
        <p>
          Największą nagrodą dla nas jest zaufanie i uśmiech naszych pacjentów.
          Oto kilka opinii, które pokazują, jak dbamy o komfort i zdrowie
          naszych klientów.
        </p>

        <div className={styles.content}>
          <OpinionItem
            animationDelay="0"
            pic="AK"
            name="Anna K."
            text="Bardzo przyjemna atmosfera i pełen profesjonalizm. Po masażu plecy przestały mnie boleć, a napięcie praktycznie zniknęło. Na pewno jeszcze wrócę."
            time="3 tygodnie temu"
          />
          <OpinionItem
            animationDelay="100ms"
            pic="MW"
            name="Michał W."
            text="Skorzystałem z masażu po treningu i to był świetny wybór. Mięśnie szybciej doszły do siebie, a następnego dnia czułem się znacznie lepiej. Polecam."
            time="2 tygodnie temu"
          />
          <OpinionItem
            animationDelay="200ms"
            pic="KS"
            name="Katarzyna S."
            text="To była moja pierwsza wizyta i jestem bardzo zadowolona. Masaż był dokładnie taki, jakiego potrzebowałam – relaksujący, ale jednocześnie skuteczny. Miła obsługa i komfortowe miejsce."
            time="1 miesiąc temu"
          />
        </div>
      </div>
    </section>
  );
}
