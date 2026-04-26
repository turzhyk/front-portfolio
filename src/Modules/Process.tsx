import React, { useEffect, useRef, useState } from "react";
import "./process.css";
import { WorkflowConnector } from "./WorkflowConnector";
import { useTranslation } from "react-i18next";

const steps = [
  {
    title: "step1",
    text: [
      "...",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nisi vulputate, porttitor neque nec, feugiat libero. Etiam vulputate erat sagittis tempor fringilla. Aliquam nec nisi sed tellus gravida elementum. Nunc molestie, lectus quis sodales hendrerit, ipsum ipsum feugiat diam, in dignissim leo est ut turpis. Ut vehicula, nisi vitae ultricies consectetur, nulla purus elementum sapien, in ornare magna lorem eget lorem. ",
    ],
    color: "#dffbd2",
    image: "/images/step1.png",
    desc: "We discuss adndwad dw"
  },
  {
    title: ["Прототип", "Design & Feedback"],
    text: ["...", "..."],
    color: "#eedffd",
    image: "/images/step2.png",
    desc: "We discuss adndwad dw"
  },
  {
    title: ["Разработка", "Clean Coding & SEO-ready"],
    text: ["...", "..."],
    color: "#d6ffe6",
    image: "/images/step3.png",
    desc: "We discuss adndwad dw"
  },
  {
    title: ["Запуск", "Ready to sell"],
    text: ["...", "..."],
    color: "#ffead6",
    image: "/images/step4.png",
    desc: "We discuss adndwad dw"
  },
];

export const Process: React.FC = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const [isAuto, setIsAuto] = useState(true);
  const {t} = useTranslation();
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
  let cancelled = false;

  const fadeOut = setTimeout(() => {
    if (!cancelled) setFade(false);
  }, 0);

  const fadeIn = setTimeout(() => {
    if (!cancelled) setFade(true);
  }, 200);

  return () => {
    cancelled = true;
    clearTimeout(fadeOut);
    clearTimeout(fadeIn);
  };
}, [active]);

  return (
    <section className="process">
      <div className="container">
        <h2>Jak pracuję</h2>

        <div className="process-grid">
          {/* LEFT */}
          <div className="left-line"></div>
          <div className="steps">
            {steps.map((step, i) => (
              <button
                key={i+""+step.title}
                ref={stepRefs[i]}
                className={`step ${i === active ? "active" : ""}`}
                // style={
                //   i === active ? { backgroundColor: steps[i].color } : undefined
                // }
                onClick={() => {
                  setActive(i);
                  setIsAuto(false);
                }}
              >
                <div className="step-header">
                  <span className={`index + ${i === active ? "active" : ""}`}>
                    {i+1}
                  </span>

                  <span className="title">
                  {t("process.step"+(i+1)+".title")}
                  </span>
                </div>
                <p>  {t("process.step"+(i+1)+".subtitle")}</p>
              </button>
            ))}
          </div>
          <div className="process-connector" style={{ width: "auto", alignSelf: "stretch" }}>
            <WorkflowConnector
              activeIndex={active}
              colors={steps.map((i) => i.color)}
              stepRefs={stepRefs}
              cardRef={cardRef}
            />
          </div>
          {/* RIGHT */}
          <div className="content">
            <div
              className={`card ${fade ? "fade-in" : "fade-out"}`}
              ref={cardRef}
            >
              <h3> {t("process.step"+(active+1)+".title")}</h3>
              <div className="card-content">
                <p>  {t("process.step"+(active+1)+".desc")}</p>
                <div className="card-img-wrapper">
                  <img src="images/watsup_scr.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
