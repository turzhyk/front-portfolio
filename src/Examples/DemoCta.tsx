import React, { useEffect, useState } from "react";
import styles from "./democta.module.css";
export default function DemoCta() {
      const [hidden, setHidden] = useState(true);
       useEffect(() => {
    // После монтирования
     const timer1 = setTimeout(() => {
      setHidden(false);
    }, 3000);

    // Через 5 секунд
    const timer = setTimeout(() => {
      setHidden(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.democta+" "+(hidden?styles.hidden:"")}>
      <div>
        <p>Projekt demonstracyjny</p><p>Wyobraź sobie, że to strona Twojej firmy.</p>
        <p>Podoba Ci się taki styl?</p>
        {/* <strong>Chesz podobną stronę dla swojej firmy?</strong> */}
        <a className={styles.contact}>Chcę podobną stronę</a>
        <p>albo</p> <a href="/web">Wróć do głównej</a>
      </div>
      <button onClick={()=>setHidden(!hidden)}>{hidden?">":"<"}</button>
      
    </div>
  );
}
