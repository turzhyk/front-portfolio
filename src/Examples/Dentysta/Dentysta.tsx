import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "./Header";
import Uslugi from "./Uslugi/Uslugi";
import About from "./About/About";
import DemoCta from "../DemoCta";
import Footer from "./Footer/Footer";
import Faq from "./FAQ/Faq";
import { Helmet } from "react-helmet-async";
import Process from "./Process";
import Opinion from "./Opinion/Opinion";
import RunningLine from "./RunningLine";
import Offer from "./Offer";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
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
       <Team/>
        <Process/>
        <Opinion/>
        <Faq/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
