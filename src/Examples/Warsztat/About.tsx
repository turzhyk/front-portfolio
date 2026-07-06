import React from "react";
import styles from "./warsztat.module.css";
import { CheckmarkThinSvg } from "./SVG/CheckmarkThinSvg";
import { useInView } from "./useInView";
export default function About() {
    const { ref, isVisible } = useInView();
  return (
    <section ref={ref} className={styles.about+" "+(isVisible?styles.visible:"")} id="about">
      <div className={styles.content}>
        <div className={styles.left}>
          <h2> Dlaczego warto nam zaufać?</h2>
          <ul>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Ponad 10 lat doświadczenia
            </li>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Nowoczesny sprzęt diagnostyczny
            </li>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Uczciwe ceny bez uktrytych kosztów
            </li>
            <li>
              <CheckmarkThinSvg
                width="30px"
                height="30px"
                cls={styles.accent_icon}
              />
              Gwarancja na wykonane usługi
            </li>
          </ul>
        </div>
        <div className={styles.divider} />
        <div className={styles.right}>
          <div>
           
            <h2>Gdzie nas znajdiesz?</h2>
            <ul>
              <li>
                <CheckmarkThinSvg
                  width="30px"
                  height="30px"
                  cls={styles.accent_icon}
                />
                ul. Przemysłowa 12
                <br />
                60-123 Poznań
              </li>
              <li>
                <a className={styles.maps_btn}>
                <CheckmarkThinSvg
                  width="30px"
                  height="30px"
                  cls={styles.accent_icon}
                />
                Zobacz trasę na mapie</a>
              </li>
            </ul>
          </div>
          <div>
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.2038793069987!2d16.920884412588805!3d52.44234397192433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470443520619846b%3A0xc0b47065da8e1dd3!2zV2lub2dyYWR5LCA2MC0xMDEg0J_QvtC30L3QsNC90Yw!5e1!3m2!1sru!2spl!4v1782673424560!5m2!1sru!2spl"
              width="300"
              height="200"
              
  
              loading="lazy"
             
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
