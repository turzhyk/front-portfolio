import React from "react";
import "./pain.css";
import { useTranslation } from "react-i18next";
export default function Pain() {
    const { t } = useTranslation();
  return (
    <section className="pain" id="pain">
      <div className="wide">
        <div className="problem">
          <div>
            <h1>{t("pain.t1")}</h1>
            <h1>{t("pain.t2")}</h1>
          </div>
          <div className="quests">
            <p className="quest">{t("pain.q1")}</p>
            <p className="quest">{t("pain.q2")}</p>
            <p className="quest">{t("pain.q3")}</p>
            <p className="quest">{t("pain.q4")}</p>

          </div>
        </div>

        <div className="action">
          <h2>{t("pain.h2")}</h2>
          {/* <p>
            Bez technicznego żargonu. Skupiamy się na klientach, nie na stronie.
          </p> */}
          <div className="options">
            <div className="option">
              <h3>{t('pain.option')} 1</h3>
              <div className="option-middle">
                <p className="option-title">
                  <strong>
                   {t("pain.option1.h")}
                  </strong>
                </p>
                <p className="desc">
                  {t("pain.option1.action")}
                </p>
              </div>
              <div className="effect">
                 {t("pain.option1.effect")}
              </div>
              {/* <a className="cte1" href="#contact">Pokaż, co można poprawić</a> */}
            </div>
            <div className="option">
               <h3>{t('pain.option')} 2</h3>

              <div className="option-middle">
                <p className="option-title">
                  <strong>{t("pain.option2.h")}</strong>
                </p>
                <p className="desc">    {t("pain.option2.action")}
                 </p>
              </div>
              <div className="effect">
                {t("pain.option2.effect")}
              </div>
              {/* <a className="cte1" href="#contact">Chcę stronę dla mojej firmy</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
