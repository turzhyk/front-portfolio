import React from "react";
import "./header.css";

export const Header: React.FC = () => {

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Andrii Turzhanskyi</div>

        <div className="right">
          {/* <button
            className="lang-btn"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
          >
            {lang === "ru" ? "EN" : "RU"}
          </button> */}

          <a href="#contact" className="btn primary small">
            Skontaktuj
          </a>
        </div>
      </div>
    </header>
  );
};