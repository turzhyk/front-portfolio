import { lazy, Suspense } from "react";
import { Header } from "../Modules/Header/Header";
import { Hero } from "../Modules/Hero";
import { Footer } from "../Modules/Footer";
import Cases from "../Modules/Cases";
import Tech from "../Modules/Tech/Tech";
const AboutMe = lazy(() => import("../Modules/AboutMe"));
const Process = lazy(() => import("../Modules/Process"));
const ContactForm = lazy(() => import("../Modules/ContactForm/ContactForm"));
export default function Home() {
  return (
    <>
      <main className="page">
        <Header />
        <Hero />
        <Cases />
        <Tech />
        <Suspense fallback={null}>
          <AboutMe />
          <Process />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
