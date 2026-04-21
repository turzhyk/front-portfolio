import React from "react";
import "./mockup.css";

type Props = {
  videoSrc: string;
};

export const LaptopMockup: React.FC<Props> = ({ videoSrc }) => {
  return (
    <div className="laptop">
      <div className="screen">
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