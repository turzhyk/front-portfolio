import React from "react";
import styles from "./warsztat.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>LOGO</div>
        <nav className={styles.mid}>
          <ul>
            <li>O nas</li>
            <li>O nas</li>
            <li>O nas</li>
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
