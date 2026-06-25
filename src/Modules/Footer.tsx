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
            <a href="#result">{t("product.h2")}</a>
          </li>
          <li>
            <a href="#cases2">{t("cases2.h")}</a>
          </li>
           <li>
            <a href="#offer">{t("offer.h")}</a>
          </li>
          <li>
            <a href="#cowork">{t("cowork.h")}</a>
          </li>
          <li>
            <a href="#aboutme">{t("about.title")}</a>
          </li>
         
        </ul>
        <ul className="footer-column contact">
          <li className="footer-title">{t("footer.contact")}</li>
          <li>
            <img
              height={20}
              width={20}
              src="/svg/email.svg"
              alt=""
              loading="lazy"
            />
            andrewturzh@gmail.com
          </li>
          <li>
            {" "}
            <img
              height={20}
              width={20}
              src="/svg/location2.svg"
              alt=""
              loading="lazy"
            />
            Poznań
          </li>
          <li className="socials">
            <a href="https://linkedin.com/in/andrii-turzhanskyi-9a9118201" className="linkedin">
              <img src="/svg/socials/linkedin.svg" width={40} height={40} alt="linkedin logo"/>
            </a>
            <a href="https://github.com/turzhyk" className="github">
              <img src="/svg/socials/github.svg" width={40} height={40} alt="github logo"/>
            </a>
            {/* <a href="https://github.com/turzhyk" className="facebook">
              <img src="/svg/socials/fb.svg" width={40} height={40} alt="facebook logo"/>
            </a>
            <a href="https://github.com/turzhyk" className="instagram">
              <img src="/svg/socials/insta.svg" width={40} height={40} alt="instagram logo"/>
            </a> */}
          </li>
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
