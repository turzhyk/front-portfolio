import styles from "./styles.module.css";

import DemoCta from "../DemoCta";

import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Prices from "./Prices/Prices";
import Footer from "./Footer/Footer";

export default function Dentysta() {
  return (
    <>
     <Helmet>
        <title>
          Ekskluzywna klinika stomatologiczna | Piękny uśmiech | DEMO
        </title>
        <meta
          name="description"
          content="Nowoczesna klinika stomatologiczna oferująca kompleksowe leczenie zębów, estetykę uśmiechu i profesjonalną opiekę dentystyczną. Zdrowy i piękny uśmiech każdego dnia."
        />
        <meta
          property="og:title"
          content="Profesjonalna opieka stomatologiczna"
        />
      </Helmet>
      <div className={styles.ex3}>
        <Header activeBlock={""} />
        <DemoCta />
        <Prices />
        <Footer />
      </div>
    </>
  );
}
