import React from "react";
import "./mockup.css";

type Props = {
  videoSrc: string;
};

export const LaptopMockup: React.FC<Props> = ({ videoSrc }) => {
  return (
    <div className="laptop">
      <img src="laptop_mock.png" className="laptop-mock"/>
      <div className="laptop-screen">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <img src="iphone_mock.png" className="phone-mock"></img>
         <div className="phone-screen">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};