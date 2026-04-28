import React from "react";
import "./tech.css";
import RadialProgress from "../Components/radialProgess";
const Featurs = [
  {
    key: "Wydajność",
  },
];
const Tech = () => {
  return (
    <section className="tech" id="tech">
      <div className="container">
        <h2>Quality / Performance</h2>
        <div className="tech-content">
          <div>
            <div className="left"><RadialProgress value={85} /></div>
            <div className="right">
              <h3>Wydajność</h3>
              <p>asdasd asdasd asd asdasds</p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
export default Tech;
