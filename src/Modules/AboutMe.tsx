import React from "react";
import "./aboutme.css";

const Features = [
  { title: "Lokalizacja", img:"svg/location.svg"},
  { title: "Podejście" , img:"svg/bulb.svg"},
  { title: "Technologie" , img:"svg/code.svg"},
  { title: "Gwarancja", img:"svg/handshake.svg" },
];
export const AboutMe = () => {
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
              <div className="card">
                <h3 className="title">{i.title}</h3>
                <img src={i.img}/>
                <p> dasdadda ads asd as dasd ad</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
