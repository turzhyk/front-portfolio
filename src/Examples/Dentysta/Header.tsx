import { Calendar } from "lucide-react";
import styles from "./styles.module.css";
export default function Header({ activeBlock }: { activeBlock: string }) {
  return (
    <div className={styles.header_holder}>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/images/demo/dentysta_logo.webp" alt="logo" width={200} />
          </div>
          <nav className={styles.mid}>
            <ul>
              <li className={activeBlock == "hero" ? styles.active : ""}>
                <a href="/demo/dentysta#hero">Głowna</a>
              </li>
            
              <li  className={activeBlock == "uslugi" ? styles.active : ""}>
                <a href="/demo/dentysta#uslugi">Usługi</a>
              </li>
          
              <li className={activeBlock == "offer" ? styles.active : ""}>
                <a href="/demo/dentysta#offer">Ceny</a>
              </li>
              <li className={activeBlock == "team" ? styles.active : ""}>
                <a href="/demo/dentysta#team">Poznaj nas</a>
              </li>
              <li className={activeBlock == "opinion" ? styles.active : ""}>
                <a href="/demo/dentysta#opinion">Opinia</a>
              </li>
            
              <li className={activeBlock == "faq" ? styles.active : ""}>
                <a href="/demo/dentysta#faq">Pytania </a>
              </li>
              <li className={activeBlock == "contact" ? styles.active : ""}>
                <a href="/demo/dentysta#contact">Kontakt</a>
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
