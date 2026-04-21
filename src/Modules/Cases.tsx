import React from "react";
import { LaptopMockup } from "./LaptopMockup";
import "./cases.css";

type Case = {
  title: string;
  description: string;
  result: string;
  video: string;
};

const cases: Case[] = [
  {
    title: "Интернет-магазин одежды",
    description: "Редизайн лендинга + адаптив",
    result: "+35% заявок",
    video: "/videos/shop.mp4",
  },
  {
    title: "Сайт для студии",
    description: "Разработка с нуля",
    result: "Запуск за 7 дней",
    video: "/videos/studio.mp4",
  },
];

export const Cases: React.FC = () => {
  return (
    <section id="cases" className="cases">
      <div className="container">
        <h2>Мои работы</h2>

        <div className="cases-list">
          {cases.map((item, index) => (
            <div key={index} className="case">
              <LaptopMockup videoSrc={item.video} />

              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="result">{item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};