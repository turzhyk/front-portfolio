import { Calendar } from "lucide-react";
import styles from "./styles.module.css";

import { PhoneSvg } from "./SVG/PhoneSvg";
export default function Header({ activeBlock }: { activeBlock: string }) {
  return (
    <div className={styles.header_holder}>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/images/demo/masaz_logo1.webp" alt="logo" width={200} />
          </div>
          <nav className={styles.mid}>
            <ul>
              <li className={activeBlock == "hero" ? styles.active : ""}>
                <a href="#hero">Głowna</a>
              </li>
            
              <li  className={activeBlock == "uslugi" ? styles.active : ""}>
                <a href="#galery">Usługi</a>
              </li>
              <li className={activeBlock == "aboutme" ? styles.active : ""}>
                <a href="#opinion">O mnie</a>
              </li>
              <li className={activeBlock == "opinion" ? styles.active : ""}>
                <a href="#opinion">Opinia</a>
              </li>
              <li className={activeBlock == "opinion" ? styles.active : ""}>
                <a href="#opinion">Pytania</a>
              </li>
              <li className={activeBlock == "contact" ? styles.active : ""}>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </nav>
          <a href="#contact" className={styles.right}>
           <Calendar size={30} strokeWidth={1.5} color="currentColor"/>
            <div>
              <p className={styles.phone}></p>
              <p className={styles.cta}>Umów wizytę</p>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}
