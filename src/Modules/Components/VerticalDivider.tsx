import React from "react";
import "./roadmap.css";
type DividerElements={
      dots: string[];
      startMargin:string;
      length:string;
};

export const VerticalDivider = ({dots, startMargin, length}:DividerElements) => {
  return (
    <div className="vertical-roadmap" style={{marginTop:startMargin, height:length}}>
      {dots.map((i)=>{
            return < div className="roadmap-dot" style={{top:i}}/>
      })}
    </div>
  );
};
