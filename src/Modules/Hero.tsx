import React from "react";
import { t } from "../Data/i18n";
import "./hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          {t(
            "Разрабатываю лендинги и сайты, которые приводят заявки",
            "I build landing pages and websites that generate leads"
          )}
        </h1>

        <p className="subtitle">
          {t(
            "Быстрый запуск, адаптив, интеграции через Firebase",
            "Fast launch, responsive, Firebase integrations"
          )}
        </p>

        <div className="actions">
          <a href="#contact" className="btn primary">
            {t("Обсудить проект", "Discuss project")}
          </a>
        </div>
      </div>
    </section>
  );
};