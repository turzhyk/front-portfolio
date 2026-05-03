import React from "react";
import { LaptopMockup } from "./LaptopMockup";
import "./cases.css";
import { useInView } from "../Data/useInView";
import { VerticalDivider } from "./Components/VerticalDivider";
import { useTranslation } from "react-i18next";


 const Cases: React.FC = () => {
  const { ref: ref1, isVisible: isV1 } = useInView<HTMLHeadingElement>();
  const {t} = useTranslation();
  return (
    <section id="cases" className="cases">
      <h2>{t("cases.title")}</h2>

      <div className="cases-project">
      
          <VerticalDivider
            startMargin="25px"
            length="20rem"
            dots={["0%", "20%", "52%", "100%"]}
          />
          <div className="cases-project-leftcol">
            <h2 className="title">{t("cases.case1.title")}</h2>
            <hr />
            <h3 className="subtitle">{t("cases.task")}</h3>
            <p >
            {t("cases.case1.task")}
            </p>
            <h3 className="subtitle">{t("cases.result")}</h3>
            <p >
               {t("cases.case1.result")}
            </p>
            <br />
            <hr />
            <div className="footer">
              <div>
                <h3 className="subtitle">Budget</h3>
                <h4 ref={ref1} className={`reveal ${isV1 ? "show" : ""}`}>
                  &lt;2 000zł
                </h4>
              </div>
              <div>
                <h3 className="subtitle">Development time</h3>
                <h4 className={`reveal ${isV1 ? "show" : ""}`}>&lt;5 weeks</h4>
              </div>
            </div>
          </div>
          <div className="cases-project-right-col">
              <LaptopMockup pcSrc={"/videos/case1_pc.webm"} mobileSrc={"/videos/case1_mobile.webm"} />
          </div>
        
      </div>
      {/* <div className="project">
        <div className="project-content">
          <VerticalDivider
            startMargin="25px"
            length="20rem"
            dots={["0%", "20%", "52%", "100%"]}
          />
          <div className="left">
            <h2 className="title">{t("cases.case2.title")}</h2>
            <hr />
            <h3 className="subtitle">{t("cases.task")}</h3>
            <p className="">
               {t("cases.case2.task")}
            </p>
            <h3 className="subtitle">{t("cases.result")}</h3>
            <p className="">
               {t("cases.case2.result")}
            </p>
            <br />
            <hr />
            <div className="footer">
              <div>
                <h3 className="subtitle">Budget</h3>
                <h4 ref={ref1} className={`reveal ${isV1 ? "show" : ""}`}>
                  &lt;1 500zł
                </h4>
              </div>
              <div>
                <h3 className="subtitle">Development time</h3>
                <h4 className={`reveal ${isV1 ? "show" : ""}`}>&lt;3 weeks</h4>
              </div>
            </div>
          </div>
          <div className="right">
            <LaptopMockup pcSrc={"videos/case1_pc.webm"} mobileSrc={"videos/case1_mobile.mp4"} />
          </div>
        </div>
      </div> */}
      {/* <button className="btn show-more-btn">Show more</button> */}
      
    </section>
  );
};
export default Cases;