import { lazy, Suspense } from "react";
import { Header } from "../Modules/Header/Header";
import { Hero } from "../Modules/Hero";
import { Footer } from "../Modules/Footer";
import Cases from "../Modules/Cases";
import Tech from "../Modules/Tech/Tech";
import Pain from "../Modules/Pain/Pain";
import Faq from "../Modules/FAQ/Faq";
import Process2 from "../Modules/Process2/Process2";
import Offer from "../Modules/Offer/Offer";
import Coworking from "../Modules/Coworking/Coworking";
import Exp from "../Modules/Exp/Exp";
import Cases2 from "../Modules/Cases2/Cases2";
const AboutMe = lazy(() => import("../Modules/AboutMe"));
const Process = lazy(() => import("../Modules/Process"));
const ContactForm = lazy(() => import("../Modules/ContactForm/ContactForm"));
export default function Home() {
  return (
    <>
      <main className="page">
        <Header />
        <Hero />
        <Pain />
        <Process2/>
        <Exp/>
        <Cases2/>
        <Offer/>
        <Coworking/> <Faq/>
        <Tech />
       
        <Suspense fallback={null}>
          
          <AboutMe />
          {/* <Process /> */}
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
