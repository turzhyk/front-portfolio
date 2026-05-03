import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="content">
        <ul className="footer-column">
          <li className="footer-title">{t("nav")}</li>
          <li>
            <a href="#cases">{t("cases.title")}</a>
          </li>
          <li>
            <a href="#tech">{t("tech.title")}</a>
          </li>
          <li>
            <a href="#aboutme">{t("about.title")}</a>
          </li>
          <li>
            <a href="#process">{t("process.title")}</a>
          </li>
        </ul>
        <ul className="footer-column contact">
          <li className="title"></li>
          <li>andrewturzh@gmail.com</li>
          <li>Poznań</li>
        </ul>
      </div>
      <hr />
      <Link className="privacy" to="/web/privacy" reloadDocument>
        Prywatnosc / RODO
      </Link>
      <div className="rights">
        Performance: 100/100. Sustainable & Fast Web Development.
      </div>
      <div className="rights">
        © 2026 Turzan.pl. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
};
