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
          Profesjonalna pielęgnacja Twojego ciała | MASAŻ POZNAŃ | DEMO
        </title>
        <meta
          name="description"
          content="Indywidualne masaże i chwile relaksu stworzone z troską o Twoje samopoczucie. Komfort, spokój i pełne zaangażowanie."
        />
        <meta
          property="og:title"
          content="Profesjonalna pielęgnacja Twojego ciała"
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
