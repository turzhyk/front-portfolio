import React from "react";
import "./aboutme.css";
import { useTranslation } from "react-i18next";

const Features = [
  { key: "location", img:"svg/location.svg"},
  { key: "way" , img:"svg/bulb.svg"},
  { key: "tech" , img:"svg/code.svg"},
  { key: "garanty", img:"svg/handshake.svg" },
];
export const AboutMe = () => {
  const {t} = useTranslation();
  return (
    <section className="aboutme">
      <h2>About me</h2>
      <div className="container">
        <div className="top">
          <div className="img-wrapper"><img src="images/aboutme.jpeg"/></div>
          <div className="content">
            <h2 className="title">Name Surname</h2>
            <div className="hr" />
            <p>
              Ddad ajdiajwoidjnmg opifesom3ioh nfehjfo jfo iewjfj fjqi fjqp
              joij{" "}
            </p>
            <span className="factura"><img src="svg/checkmark.svg"/><p>Wystawiam faktury VAT</p></span>
          </div>
        </div>
        <div className="bottom">
          {Features.map((i) => {
            return (
              <div className="about-card">
                <h3 className="title">{t("about."+i.key+".title")}</h3>
                <img src={i.img}/>
                <p> {t("about."+i.key+".desc")}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
