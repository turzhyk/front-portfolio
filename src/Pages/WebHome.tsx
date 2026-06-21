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
        <Offer/>
        <Tech />
        <Faq/>
        <Suspense fallback={null}>
          <Cases />
          <AboutMe />
          {/* <Process /> */}
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
