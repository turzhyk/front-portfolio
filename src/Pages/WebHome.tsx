import { lazy, Suspense } from "react";
import { Header } from "../Modules/Header/Header";
import { Hero } from "../Modules/Hero";
import { Footer } from "../Modules/Footer";
const Cases = lazy(() => import("../Modules/Cases"));
const AboutMe = lazy(() => import("../Modules/AboutMe"));
const Process = lazy(() => import("../Modules/Process"));
const Tech = lazy(() => import("../Modules/Tech/Tech"));
const ContactForm = lazy(() => import("../Modules/ContactForm/ContactForm"));
export default function Home() {
  return (
    <>
      <main className="page">
        <Header />
        <Hero />
        <Suspense fallback={null}>
          <Cases />
          <Tech />
          <AboutMe />
          <Process />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
