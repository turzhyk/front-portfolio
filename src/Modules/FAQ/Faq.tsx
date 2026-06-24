import React from "react";
import "./faq.css";
import Question from "./Question";

const questions = [
  {
    open:true,
    title: "Ile kosztuje stworzenie strony internetowej?",
    answer:
      "Jeśli zależy Ci przede wszystkim na zdobywaniu nowych klientów, przygotuję dla Ciebie prosty, estetyczny i skuteczny landing page. Cena takiej strony wynosi zwykle od 1250 do 2700 zł.",
  },
  {
       open:false,
    title: "Jak długo trwa cały proces?",
    answer: "Od rozpoczęcia współpracy do publikacji gotowej strony w internecie cały proces zazwyczaj zajmuje od 3 do 6 tygodni w przypadku większości projektów.",
  },
  {
       open:false,
    title: "",
    answer: "",
  },
];
export default function Faq() {
  return (
    <section className="faq">
      <h2>Odpowiadam na pytania</h2>
      <div className="questions">
        {questions.map((i) => (
          <Question key={i.title} open={i.open} title={i.title} answer={i.answer} />
        ))}
      </div>
    </section>
  );
}
