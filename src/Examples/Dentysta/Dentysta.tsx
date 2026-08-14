import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "./Header";
import Uslugi from "./Uslugi/Uslugi";
import About from "./About/About";
import DemoCta from "../DemoCta";
import Footer from "./Footer/Footer";
import Faq from "./FAQ/Faq";
import { Helmet } from "react-helmet-async";
import Opinion from "./Opinion/Opinion";
import RunningLine from "./RunningLine";
import Offer from "./Offer";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Steps from "./Steps/Steps";


export default function Dentysta() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.8,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
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
        <Header activeBlock={activeSection} />
        <DemoCta />
        <Hero />
        <RunningLine />
        <Uslugi />

        <About />
        <Offer />
        <Team />
       <Steps/>
        <Opinion />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
