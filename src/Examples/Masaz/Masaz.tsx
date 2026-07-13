import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Hero from "./Hero";
import Header from "./Header";
import Uslugi from "./Uslugi";
import About from "./About";
import DemoCta from "../DemoCta";
import Footer from "./Footer";
import Faq from "./Faq";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";
import Pain from "./Pain";
import Brag from "./Brag";
import Process from "./Process";
import AboutMe from "./AboutMe";
import Opinion from "./Opinion";
export default function Masaz() {
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
          🛠️ Profesjonalna naprawa twojego samochodu | Serwis POZNAŃ | DEMO
        </title>
        <meta
          name="description"
          content="Kompleksowa naprawa i obsługa pojazdów osobowych. Szybko, uczciwie i z gwarancją w Poznaniu"
        />
        <meta
          property="og:title"
          content="Kompleksowa naprawa i obsługa pojazdów w poznaniu"
        />
      </Helmet>
      <div className={styles.ex2}>
        <Header activeBlock={activeSection} />
        <DemoCta />
        <Hero />
        <Brag/>
        <Pain/>
        <About/>
        <Uslugi />
        <Process/>
        <AboutMe/>
        <Opinion/>
        {/* <Faq/> */}

        {/* <Contact/> */}
        {/* <Footer/> */}
      </div>
    </>
  );
}
