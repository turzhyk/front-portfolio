import React from "react";
import "./exp.css";
import { useTranslation } from "react-i18next";
export default function Exp() {
   const { t } = useTranslation();
  return (
    <section className="exp" id="exp">
      <div className="features">
        <div className="feat1 feat">
          <strong>15+</strong> <h3>{t('exp.projects')}</h3>
        </div>
        <div className="vert1"></div>
        <div className="feat2 feat">
          <strong>3</strong> <h3>{t('exp.time')}</h3>
        </div>
        <div className="vert1"></div>
        <div className="feat3 feat">
          <strong>{t('exp.durnum')}</strong> <h3>{t('exp.duration')}</h3>
        </div>
      </div>
    </section>
  );
}
