
import styles from "./styles.module.css";
import { Calendar,  Info, MoveRight, Sparkles } from "lucide-react";
import { ImplantSvg } from "./SVG/ImplantSvg";
import { ZoomSvg } from "./SVG/ZoomSvg";

export default function Offer() {
  return (
    <section id="offer" className={styles.offer}>
      <h3>Cennik</h3>
      <h2>Przejrzyste ceny, wysoka jakość</h2>
      <p>
        Nowoczesna stomatologia, komfort leczenia i indywidualne podejście do
        każdego pacjenta.
      </p>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.iconwrapper}>
            {<ZoomSvg size={60} cls={styles.accent_icon} thickness={1.5}/>}
          </div>

          <h3>Stomatologia zachowawcza</h3>
          <ul>
            <li>
              Wizyta kontrolna<strong>od 100 zł</strong>
            </li>
            <li>
              Leczenie próchnicy<strong>od 200 zł</strong>
            </li>
            <li>
              Wypełnienie kompozytowe<strong>od 250 zł</strong>
            </li>
            <li>
              Leczenie kanałowe<strong>od 600 zł</strong>
            </li>
          </ul>

          <a href="/demo/dentysta/prices" className={styles.cta}>
            Więcej
            <MoveRight color="currentColor" size={20} />
          </a>
        </div>
        <div className={styles.item}>
          <div className={styles.iconwrapper}>{<ImplantSvg size={60} cls={styles.accent_icon} thickness={1.5}/>}</div>

          <h3>Implantologia</h3>
          <ul>
            <li>
              Konsultacja implantologiczna<strong>od 150 zł</strong>
            </li>
            <li>
              Implant (szt.)<strong>od 2500 zł</strong>
            </li>
            <li>
              Korona na implancie<strong>od 1800 zł</strong>
            </li>
            <li>
              Podniesienie dna zatoki<strong>od 1500 zł</strong>
            </li>
          </ul>

          <a href="/demo/dentysta/prices" className={styles.cta}>
            Więcej
            <MoveRight color="currentColor" size={20} />
          </a>
        </div>
        <div className={styles.item}>
          <div className={styles.iconwrapper}>{  <Sparkles size={60} strokeWidth={1.5} color="var(--accent)"/>}</div>

          <h3>Stomatologia estetyczna</h3>
          <ul>
            <li>
              Wybielanie zębów<strong>od 800 zł</strong>
            </li>
            <li>
              Licówki porcelanowe<strong>od 1500 zł</strong>
            </li>
            <li>
              Bonding<strong>od 500 zł</strong>
            </li>
            <li>
              Korona pełnoceramiczna<strong>od 1800 zł</strong>
            </li>
          </ul>

          <a href="/demo/dentysta/prices" className={styles.cta}>
            Więcej
            <MoveRight color="currentColor" size={20} />
          </a>
        </div>
      </div>
      <div className={styles.info}>
        <Info size={20} strokeWidth={3} color="var(--accent)" />
        Podane ceny mają charakter orientacyjny. Ostateczny koszt leczenia
        ustalany jest indywidualnie podczas konsultacji
      </div>
      <div className={styles.cta_block}>
        <div className={styles.iconwrapper}>
          <Calendar size={50} strokeWidth={1} color="currentColor" />
        </div>
        <div className={styles.mid}>
          <h4>Masz pytania? Umów się na wizytę</h4>
          <p>
            Chętnie odpowiemy na wszystkie pytania i dobierzemy najlepsze
            rozwiązanie dla Ciebie.
          </p>
        </div>
        <a href="#contact" className={styles.cta}>
          <Calendar size={30} strokeWidth={1.5} color="currentColor" />
          Umów wizytę
        </a>
      </div>
    </section>
  );
}
