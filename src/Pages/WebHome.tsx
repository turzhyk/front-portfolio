import { lazy, Suspense } from "react";
import { Header } from "../Modules/Header/Header";
import { Hero } from "../Modules/Hero";
import { Footer } from "../Modules/Footer";
import Tech from "../Modules/Tech/Tech";
import Pain from "../Modules/Pain/Pain";
import Process2 from "../Modules/Process2/Process2";
import Offer from "../Modules/Offer/Offer";
import Exp from "../Modules/Exp/Exp";
import Cases2 from "../Modules/Cases2/Cases2";
import Coworking from "../Modules/Coworking/Coworking";

const AboutMe = lazy(() => import("../Modules/AboutMe"));
const ContactForm = lazy(() => import("../Modules/ContactForm/ContactForm"));
export default function Home() {
  return (
    <>
      <main className="page">
        <Header />
        <Hero />
        <Pain />
        <Process2 />
        <Exp />
        <Cases2 />
        <Offer />
        <Coworking />

        <Suspense fallback={null}>
          <Tech />
          <AboutMe />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
