
import styles from "./warsztat.module.css";

import { PhoneSvg } from "./SVG/PhoneSvg";
export default function Header({ activeBlock }: { activeBlock: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}><img src="/images/demo/warsztat_logo.webp" alt="logo" height={60}/></div>
        <nav className={styles.mid}> <ul>
            <li className={activeBlock=="hero"?styles.active:""}><a href="#hero">Strona głowna</a></li>
            <li className={activeBlock=="uslugi"?styles.active:""}><a href="#uslugi">Usługi</a></li>
            <li className={activeBlock=="about"?styles.active:""}><a href="#about">O nas</a></li>
            <li className={activeBlock=="galery"?styles.active:""}><a href="#galery">Galeria</a></li>
            <li className={activeBlock=="team"?styles.active:""}><a href="#team">Zespół</a></li>
            <li className={activeBlock=="opinion"?styles.active:""}><a href="#opinion">Opinia</a></li>
            <li className={activeBlock=="faq"?styles.active:""}><a href="#faq">FAQ</a></li>
            <li className={activeBlock=="contact"?styles.active:""}><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
        <div className={styles.right}>
         <PhoneSvg width="35" height="35" thickness={2} cls={styles.accent_icon}/>
          <div>
            <p className={styles.phone}>123 456 789</p>
            <p className={styles.cta}>Zadzwoń teraz</p>
          </div>
        </div>
      </div>
    </header>
  );
}
