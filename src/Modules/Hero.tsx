import React from "react";
import  "../Data/i18nc.ts";
import "./hero.css";
import { Trans, useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="container">
        <h1>
         <Trans
            i18nKey="hero.title"
            components={{
              hi1: <span className="t-accent1" />,
              hi2: <span className="t-accent2 glow" />,
            }}
          />
        </h1>

        <p className="subtitle">[{t("hero.subtitle")}]</p>

        <div className="actions">
          <a href="#contact" className="btn primary">
            {t("hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};