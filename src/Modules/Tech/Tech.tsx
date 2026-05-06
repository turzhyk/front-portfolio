import React, { useState } from "react";
import "./tech.css";
import RadialProgress from "../Components/radialProgess";
import { Trans, useTranslation } from "react-i18next";
import { useInView } from "../../Data/useInView";
const Features = [
  {
    key: "Wydajność",
    color: "#5484e3"
  },
  {
    key: "Wydajność",
    color: "#5469e3"
  },
  {
    key: "Wydajność",
    color: "#5954e3"
  },
  {
    key: "Wydajność",
    color: "#8154e3"
  },
];
const Tech = () => {
  const [active, setActive] = useState(-1);
  const { t } = useTranslation();
  const { ref, isVisible } = useInView<HTMLDivElement>();
  return (
    <section ref={ref} className="tech" id="tech">
      <div className={`container ` + (isVisible ? " fade-in" : "hidden")}>
        <h2>{t("tech.title")}</h2>
        <p className="subtitle">
          <Trans
            i18nKey="tech.after"
            components={{
              hi1: <span className="subtitle-hi" />,
            }}
          />
        </p>

        <div className="tech-content">
          {Features.map((item, i) => {
            return (
              <div key={item.key + i} onMouseEnter={() => setActive(i)}>
                <div className="left">
                  <RadialProgress
                    value={100}
                    stroke={active == i ? 8 : 5}
                    delay={i / 2 + "s"}
                    color={item.color}
                  />
                </div>
                <div className="right">
                  <h3>{t("tech.case" + (i + 1) + ".title")}</h3>
                  <p>{t("tech.case" + (i + 1) + ".desc")}</p>
                </div>
              </div>
            );
          })}
        </div>
        <i>
          {t("tech.warning")}{" "}
          <strong>
            <a href="https://pagespeed.web.dev/analysis/https-turzan-pl/arbuav3uvb?form_factor=desktop">
              Google PageSpeed Insights
            </a>
          </strong>
        </i>
        <h3>{t("tech.subtitle")}</h3>
      </div>
    </section>
  );
};
export default Tech;
