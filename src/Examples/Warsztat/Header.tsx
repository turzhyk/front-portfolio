
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
            <li className={activeBlock=="about"?styles.active:""}>O nas</li>
            <li className={activeBlock=="galery"?styles.active:""}>Galeria</li>
            <li className={activeBlock=="team"?styles.active:""}>Zespół</li>
            <li className={activeBlock=="opinion"?styles.active:""}>Opinia</li>
            <li className={activeBlock=="faq"?styles.active:""}>FAQ</li>
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
