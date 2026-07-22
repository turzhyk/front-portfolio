
import styles from "./styles.module.css";
import { HeartSvg } from "./SVG/HeartSvg";
import { Leaf2Svg } from "./SVG/Leaf2Svg";
import { Flower } from "lucide-react";
export default function AboutMe() {
  return (
    <section id="aboutme" className={styles.aboutme}>
      <h2>Poznaj mnie</h2>
      <p className={styles.aboutme_subtitle}>
        Kilka słów o mnie i moim podejściu do masażu
      </p>
      <div className={styles.content}>
        <div className={styles.right}>
          <img
          className={styles.img}
            src="/images/demo/masaz_aboutme_2.webp"
            alt="moje zdjęcie"
            height={500}
            loading="lazy"
          />
          <img className={styles.blob}   src="/images/demo/masaz_aboutme_3.svg"
            alt=""
            height={700}
            ></img>
        </div>
        <div className={styles.left}>
          <h2>Nazywam się Anna Kowalska</h2>
          <p>
            Masaż to moja pasja i sposób na pomaganie innym w odzyskaniu
            lekkości, swobody i dobrego samopoczucia
          </p>
          <p>
            Od ponad 5 lat pracuję z osobami, które zmagają się z polem pleców,
            napięciem męśni oraz stresem.
          </p>
          <p>
            Stale poszerzam swoją wiedzę i łączę różne techniki, aby każdy masaż
            był dopasowany do Twoich potrzeb.
          </p>
          <div className={styles.features}>
            <div>
              <div className={styles.icon}>
                <HeartSvg size={70} thickness={1} cls={styles.accent_icon} />
              </div>
              <h3>Indywidualne podejście</h3>
              <p>Każdy organizm jest inny, dlatego dobieram technikę do Ciebeie.</p>
            </div>
            <div>
              <div className={styles.icon}>
                <Leaf2Svg size={70} thickness={1} cls={styles.accent_icon} />
              </div>
              <h3>Naturalne olejki</h3>
              <p>Pracuję na wysokiej jakości olejkach roślinnych.</p>
            </div>
            <div>
              <div className={styles.icon}>
                <Flower size={70} strokeWidth={1} color="currentColor"/>
              </div>
              <h3>Atmosfera relaksu</h3>
              <p>Tworzę przestrzeń, w której możesz naprawdę odpocząć.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
