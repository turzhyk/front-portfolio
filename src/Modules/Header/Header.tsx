import React, { useEffect, useState } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../Data/i18nc";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const { t } = useTranslation();
  const handleLangButton = () => {
    const newLang = lang === "pl" ? "en" : "pl";

    setLang(newLang);
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
  };
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang);
  }, []);
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img src="/svg/icon.svg" alt="logo"></img>
          <Link to="/web">Andrzej Turzański</Link>
        </div>

        <div className="right">
          <button
            className="lang-btn"
            name="lang-btn"
            onClick={() => handleLangButton()}
          >
            {lang=="en"?"pl":"en"}
          </button>

          <a href="#contact" className="primary small contact-btn">
            {t("header.contact")}
          </a>
        </div>
      </div>
    </header>
  );
};
