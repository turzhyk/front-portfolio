import { Hero } from "./Modules/Hero";
import { Cases } from "./Modules/Cases";
import { Header } from "./Modules/Header";
import { Process } from "./Modules/Process";
import { AboutMe } from "./Modules/AboutMe";
import ContactForm from "./Modules/ContactForm/ContactForm";


function App() {

  return (
    <>
      <div className="page">
        <Header />
        <Hero />
        <Cases />
        <AboutMe />
        <Process />
        <ContactForm/>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
