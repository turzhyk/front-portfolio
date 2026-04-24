import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Hero } from "./Modules/Hero";
import { Cases } from "./Modules/Cases";
import { LaptopMockup } from "./Modules/LaptopMockup";
import { Header } from "./Modules/Header";
import { Process } from "./Modules/Process";
import { AboutMe } from "./Modules/AboutMe";
import { Footer } from "./Modules/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        <Cases />
        <AboutMe />
        <Process />
      </div>
      <Footer/>
    </>
  );
}

export default App;
