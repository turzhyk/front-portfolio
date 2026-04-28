import { lazy, Suspense } from "react";

import { Hero } from "./Modules/Hero";
import { Header } from "./Modules/Header/Header";

// lazy-load тяжёлых секций
const Cases = lazy(() => import("./Modules/Cases"));
const AboutMe = lazy(() => import("./Modules/AboutMe"));
const Process = lazy(() => import("./Modules/Process"));
const Tech = lazy(() => import("./Modules/Tech/Tech"));
const ContactForm = lazy(() => import("./Modules/ContactForm/ContactForm"));

function App() {
  return (
    <>
      <main className="page">
        <Header />
        <Hero />

        <Suspense fallback={null}>
          <Cases />
          <Tech/>
          <AboutMe />
          <Process />
          <ContactForm />
        </Suspense>
      </main>
    </>
  );
}

export default App;