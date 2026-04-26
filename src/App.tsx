import { Hero } from "./Modules/Hero";
import { Cases } from "./Modules/Cases";
import { Header } from "./Modules/Header";
import { Process } from "./Modules/Process";
import { AboutMe } from "./Modules/AboutMe";
import { Footer } from "./Modules/Footer";

function App() {

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
