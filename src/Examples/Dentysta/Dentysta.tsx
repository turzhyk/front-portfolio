import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import Header from "./Header";
import Uslugi from "./Uslugi";
import About from "./About";
import DemoCta from "../DemoCta";
import Footer from "./Footer";
import Faq from "./Faq";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";
import Pain from "./Pain";
import Process from "./Process";
import AboutMe from "./AboutMe";
import Opinion from "./Opinion";
import Hero from "./Hero";
import RunningLine from "./RunningLine";
import Offer from "./Offer";
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
        <Header activeBlock={activeSection} />
        <DemoCta />
        <Hero />
        <RunningLine/>
         <Uslugi />
        
        <About/>
       <Offer/>
        <Process/>
        <AboutMe/>
        <Opinion/>
        <Faq/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
