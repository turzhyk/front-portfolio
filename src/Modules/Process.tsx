import React, { useEffect, useRef, useState } from "react";
import { t } from "../Data/i18n";
import "./process.css";
import { WorkflowConnector } from "./WorkflowConnector";

type Step = {
  title: [string, string];
  text: [string, string];
};

const steps = [
  {
    title: ["Обсуждение", "Discussion"],
    text: ["...", "..."],
    color: "#dffbd2",
    image: "/images/step1.png",
  },
  {
    title: ["Прототип", "Wireframe"],
    text: ["...", "..."],
    color: "#eedffd",
    image: "/images/step2.png",
  },
  {
    title: ["Разработка", "Development"],
    text: ["...", "..."],
    color: "#d6ffe6",
    image: "/images/step3.png",
  },
  {
    title: ["Запуск", "Launch"],
    text: ["...", "..."],
    color: "#ffead6",
    image: "/images/step4.png",
  },
];

export const Process: React.FC = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const [displayed, setDisplayed] = useState(active);
  const [isAuto, setIsAuto] = useState(true);
  const stepRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];
  const cardRef = useRef<HTMLDivElement>(null);

  // 🔁 авто-переключение
  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAuto]);

  // 🎬 fade анимация при смене
  useEffect(() => {
    // запускаем fade-out
    setFade(false);

    const timeout = setTimeout(() => {
      // меняем контент ПОСЛЕ затухания
      setDisplayed(active);
      setFade(true); // fade-in
    }, 200); // должно совпадать с CSS transition

    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <section className="process">
      <div className="container">
        <h2>{t("Как я работаю", "How I work")}</h2>

        <div className="process-grid">
          {/* LEFT */}
          <div className="steps">
            {steps.map((step, i) => (
              <button
                key={i}
                ref={stepRefs[i]}
                className={`step ${i === active ? "active" : ""}`}
                style={
                  i === active ? { backgroundColor: steps[i].color } : undefined
                }
                onClick={() => {
                  setActive(i);
                  setIsAuto(false);
                }}
              >
                <span className={`index + ${i === active ? "active" : ""}`}>
                  {i + 1}
                </span>

                <span className="title">{t(step.title[0], step.title[1])}</span>

                {i === active && (
                  <img src={step.image} className="step-image" alt="" />
                )}
              </button>
            ))}
          </div>
          <div style={{ width: "auto", alignSelf: "stretch" }}>
            <WorkflowConnector
              activeIndex={active}
              colors={steps.map((i) => i.color)}
              stepRefs={stepRefs}
              cardRef={cardRef}
            />
          </div>
          {/* RIGHT */}
          <div className="content">
            <div className={`card ${fade ? "fade-in" : "fade-out"}`} ref={cardRef}>
              <h3>{t(steps[displayed].title[0], steps[displayed].title[1])}</h3>
              <p>{t(steps[displayed].text[0], steps[displayed].text[1])}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
