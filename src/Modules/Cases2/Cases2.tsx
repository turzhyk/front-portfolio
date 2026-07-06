import React from "react";
import "./cases2.css";
import { useTranslation } from "react-i18next";

export default function Cases2() {
  const { t } = useTranslation();
  return (
    <section className="cases2" id="cases2">
      <h2>{t("cases2.h")}</h2>
      <div className="content">
        <div className="case">
          <div className="pic">
            <img width={300} height={200} src="images/case2.webp" />
          </div>
          <div className="center">
            <h3>{t("cases2.case1.h")}</h3>
            <h4>{t("cases2.case1.h2")}</h4>
            <ul>
              <li>{t("cases2.case1.li1")}</li>
              <li>{t("cases2.case1.li2")}</li>
              <li>{t("cases2.case1.li3")}</li>
            </ul>
            
          </div>
          <div className="vert" />
          <div className="right">
            <div>
              <p className="price-tag">{t("cases2.price")}</p>
              <p className="price">&lt;{t("cases2.case1.price")}</p>
            </div>
            <div>
              <p className="price-tag">{t("cases2.time")}</p>
              <p className="price">&lt;{t("cases2.case1.time")}</p>
            </div>
          </div>
        </div>
        <div className="case">
          <div className="pic">
            <img width={300} height={200} src="images/case1.webp" />
          </div>
         <div className="center">
            <h3>{t("cases2.case2.h")}</h3>
            <ul>
              <li>{t("cases2.case2.li1")}</li>
              <li>{t("cases2.case2.li2")}</li>
              <li>{t("cases2.case2.li3")}</li>
              <li>{t("cases2.case2.li4")}</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="/demo/warsztat"><img src="/svg/external_link.svg" alt="" width={20}/>Zobać demo</a>
          </div>
          <div className="vert" />
          <div className="right">
            <div>
              <p className="price-tag">{t("cases2.price")}</p>
              <p className="price">&lt;{t("cases2.case2.price")}</p>
            </div>
            <div>
              <p className="price-tag">{t("cases2.time")}</p>
              <p className="price">&lt;{t("cases2.case2.time")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
