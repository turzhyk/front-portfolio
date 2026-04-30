import React from "react";
import "./mockup.css";

type Props = {
  pcSrc: string;
  mobileSrc: string;
};

export const LaptopMockup: React.FC<Props> = ({ pcSrc, mobileSrc }) => {
  return (
    <div className="laptop">
      <img  loading="lazy" alt="vizualizacja strony na laptopie" src="laptop_mock.webp" className="laptop-mock" />
      <div className="laptop-screen">
        <video  src={pcSrc} autoPlay loop muted playsInline />
      </div>
      <img  loading="lazy" alt="vizualizacja strony na telefonie" src="iphone_mock.webp" className="phone-mock"></img>
      <div className="phone-screen">
        <video src={mobileSrc} autoPlay loop muted playsInline />
      </div>
    </div>
  );
};
