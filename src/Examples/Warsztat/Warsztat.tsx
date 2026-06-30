import React, { useEffect, useState } from "react";
// import "./warsztat.css";
import styles from './warsztat.module.css';
import Hero from "./Hero";
import Header from "./Header";
import Uslugi from "./Uslugi";
import About from "./About";
import DemoCta from "../DemoCta";
import Galery from "./Galery";
import Footer from "./Footer";
import { Team } from "./Team";
import Faq from "./Faq";
import Opinion from "./Opinion";
export default function Warsztat() {
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
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div className={styles.ex1}>
      <Header activeBlock={activeSection}/>
      <DemoCta/>
      <Hero />
      <Uslugi/>
      <About/>
      <Galery/>
      <Team/>
      <Opinion/>
      <Faq/>
      <Footer/>
    </div>
  );
}
