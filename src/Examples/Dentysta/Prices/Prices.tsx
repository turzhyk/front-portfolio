import { Calendar, CheckLine } from "lucide-react";
import styles from "./Prices.module.css";

interface PriceItem {
  name: string;
  price: string;
}

interface PriceCategory {
  title: string;
  icon: string;
  items: PriceItem[];
}

const categories: PriceCategory[] = [
  {
    title: "Stomatologia zachowawcza",
    icon: "/icons/tooth.svg",
    items: [
      { name: "Konsultacja stomatologiczna", price: "od 150 zł" },
      { name: "Wizyta kontrolna", price: "od 100 zł" },
      { name: "Leczenie próchnicy", price: "od 250 zł" },
      { name: "Wypełnienie kompozytowe", price: "od 300 zł" },
      { name: "Odbudowa zęba", price: "od 450 zł" },
      { name: "Leczenie kanałowe (1 kanał)", price: "od 700 zł" },
      { name: "Leczenie kanałowe (2 kanały)", price: "od 900 zł" },
      { name: "Leczenie kanałowe (3–4 kanały)", price: "od 1200 zł" },
    ],
  },
  {
    title: "Higienizacja",
    icon: "/icons/droplet.svg",
    items: [
      { name: "Przegląd + plan leczenia", price: "od 150 zł" },
      { name: "Skaling", price: "od 250 zł" },
      { name: "Piaskowanie", price: "od 250 zł" },
      { name: "Fluoryzacja", price: "od 150 zł" },
      { name: "Skaling + piaskowanie + fluoryzacja", price: "od 450 zł" },
      { name: "Instruktaż higieny jamy ustnej", price: "od 80 zł" },
    ],
  },
  {
    title: "Wybielanie",
    icon: "/icons/sparkle.svg",
    items: [
      { name: "Wybielanie gabinetowe", price: "od 900 zł" },
      { name: "Wybielanie nakładkowe", price: "od 700 zł" },
      { name: "Wybielanie pojedynczego zęba", price: "od 300 zł" },
      { name: "Konsultacja estetyczna", price: "od 150 zł" },
    ],
  },
  {
    title: "Stomatologia estetyczna",
    icon: "/icons/diamond.svg",
    items: [
      { name: "Bonding", price: "od 500 zł" },
      { name: "Licówka kompozytowa", price: "od 700 zł" },
      { name: "Licówka porcelanowa", price: "od 1800 zł" },
      { name: "Korona pełnoceramiczna", price: "od 1800 zł" },
      { name: "Odbudowa estetyczna zęba", price: "od 600 zł" },
    ],
  },
  {
    title: "Implantologia",
    icon: "/icons/implant.svg",
    items: [
      { name: "Konsultacja implantologiczna", price: "od 200 zł" },
      { name: "Implant zębowy", price: "od 2800 zł" },
      { name: "Korona na implancie", price: "od 2200 zł" },
      { name: "Odbudowa implantu", price: "od 1500 zł" },
      { name: "Podniesienie dna zatoki", price: "od 2500 zł" },
      { name: "Regeneracja kości", price: "od 1800 zł" },
    ],
  },
  {
    title: "Protetyka",
    icon: "/icons/tooth-outline.svg",
    items: [
      { name: "Korona porcelanowa", price: "od 1700 zł" },
      { name: "Most porcelanowy", price: "od 4500 zł" },
      { name: "Proteza akrylowa", price: "od 1800 zł" },
      { name: "Proteza szkieletowa", price: "od 2800 zł" },
      { name: "Naprawa protezy", price: "od 250 zł" },
    ],
  },
  {
    title: "Chirurgia stomatologiczna",
    icon: "/icons/syringe.svg",
    items: [
      { name: "Ekstrakcja zęba", price: "od 350 zł" },
      { name: "Chirurgiczne usunięcie ósemki", price: "od 800 zł" },
      { name: "Nacięcie ropnia", price: "od 300 zł" },
      { name: "Resekcja wierzchołka korzenia", price: "od 1200 zł" },
    ],
  },
  {
    title: "Ortodoncja",
    icon: "/icons/braces.svg",
    items: [
      { name: "Konsultacja ortodontyczna", price: "od 200 zł" },
      { name: "Aparat metalowy (1 łuk)", price: "od 2800 zł" },
      { name: "Aparat estetyczny (1 łuk)", price: "od 3500 zł" },
      { name: "Kontrola aparatu", price: "od 250 zł" },
      { name: "Retainer (aparat retencyjny)", price: "od 600 zł" },
    ],
  },
  {
    title: "Stomatologia dziecięca",
    icon: "/icons/tooth-child.svg",
    items: [
      { name: "Wizyta adaptacyjna", price: "od 150 zł" },
      { name: "Leczenie zęba mlecznego", price: "od 250 zł" },
      { name: "Lakowanie", price: "od 150 zł" },
      { name: "Fluoryzacja", price: "od 120 zł" },
      { name: "Usunięcie zęba mlecznego", price: "od 200 zł" },
    ],
  },
  {
    title: "Diagnostyka",
    icon: "/icons/camera.svg",
    items: [
      { name: "RTG punktowe", price: "od 50 zł" },
      { name: "RTG panoramiczne", price: "od 150 zł" },
      { name: "Tomografia CBCT", price: "od 350 zł" },
      { name: "Zdjęcie cefalometryczne", price: "od 150 zł" },
    ],
  },
];

export default function Prices() {
  return (
    <section className={styles.prices}>
      <h3>CENNIK</h3>
      <h2>Przejrzyste ceny, wysoka jakość</h2>
      <p>
        Stawiamy na uczciwość i transparentność.
        <br />
        Poniżej znajdziesz ceny najczęściej wybieranych usług.
      </p>

      <div className={styles.content}>
        <div className={styles.grid}>
          {categories.map((category) => (
            <div className={styles.card} key={category.title}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <CheckLine size={25} color="var(--accent)"/>
                  {/* <img src={category.icon} alt="" className={styles.icon} /> */}
                </div>
                <h4 className={styles.cardTitle}>{category.title}</h4>
              </div>

              <ul className={styles.priceList}>
                {category.items.map((item) => (
                  <li className={styles.priceItem} key={item.name}>
                    <span className={styles.priceName}>{item.name}</span>
                    <span className={styles.priceValue}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
        <a href="/demo/dentysta/#contact" className={styles.cta}>
          <Calendar size={30} strokeWidth={1.5} color="currentColor" />
          Umów wizytę
        </a>
      </div>
    </section>
  );
}
