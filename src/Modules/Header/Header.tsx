import React, { useState } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../Data/i18nc";

export const Header: React.FC = () => {

  const [lang,setLang] = useState(localStorage.getItem("land")||"pl");
  const {t} = useTranslation();
  const handleLangButton =()=>{
    if(lang=="pl")
    {
      setLang("en");
      localStorage.setItem("lang","en");
    }
    else{
      setLang("pl");
      localStorage.setItem("lang","pl");
    }
    i18n.changeLanguage(lang); 
  }
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo"><img src="svg/icon.svg" alt="logo"></img>Andrii Turzhanskyi</div>

        <div className="right">
          <button
            className="lang-btn"
            name="lang-btn"
            onClick={() => handleLangButton()}
          >
            {lang}
          </button>

          <a href="#contact" className="btn primary small">
            {t("header.contact")}
          </a>
        </div>
      </div>
    </header>
  );
};