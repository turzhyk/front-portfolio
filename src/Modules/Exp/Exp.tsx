import React from "react";
import "./exp.css";
import { useTranslation } from "react-i18next";
import { useInView } from "../../Examples/Warsztat/useInView";
export default function Exp() {
   const { t } = useTranslation();
   const { ref, isVisible } = useInView(0.5);
  return (
    <section ref={ref} className={"exp "+(isVisible?" visible":"")} id="exp">
      <div className="features">
        <div className="feat1 feat" >
          <strong>15+</strong> <h3>{t('exp.projects')}</h3>
        </div>
        <div className="vert1"></div>
        <div className="feat2 feat" style={{transitionDelay:"100ms"}}>
          <strong>3</strong> <h3>{t('exp.time')}</h3>
        </div>
        <div className="vert1"></div>
        <div className="feat3 feat" style={{transitionDelay:"200ms"}}>
          <strong>{t('exp.durnum')}</strong> <h3>{t('exp.duration')}</h3>
        </div>
      </div>
    </section>
  );
}
