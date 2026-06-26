import React from "react";
import styles from "./warsztat.module.css";
export default function Header({ activeBlock }: { activeBlock: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>LOGO</div>
        <nav className={styles.mid}>
          <ul>
            <li className={activeBlock=="hero"?styles.active:""}><a href="#hero">Strona głowna</a></li>
            <li className={activeBlock=="uslugi"?styles.active:""}><a href="#uslugi">Usługi</a></li>
            <li className={activeBlock=="about"?styles.active:""}>O nas</li>
            <li>Cennik</li>
            <li>Opinia</li>
            <li>Kontakt</li>
          </ul>
        </nav>
        <div className={styles.right}>
          <div>
            <p className={styles.phone}>123 456 789</p>
            <p className={styles.cta}>Zadzwoń teraz</p>
          </div>
        </div>
      </div>
    </header>
  );
}
