import React from "react";
import { LaptopMockup } from "./LaptopMockup";
import "./cases.css";
import { useInView } from "../Data/useInView";
import { VerticalDivider } from "./Components/VerticalDivider";

type Case = {
  title: string;
  description: string;
  result: string;
  video: string;
};

const cases: Case[] = [
  {
    title: "Интернет-магазин одежды",
    description: "Редизайн лендинга + адаптив",
    result: "+35% заявок",
    video: "/videos/shop.mp4",
  },
  {
    title: "Сайт для студии",
    description: "Разработка с нуля",
    result: "Запуск за 7 дней",
    video: "/videos/studio.mp4",
  },
];

export const Cases: React.FC = () => {
  const { ref: ref1, isVisible: isV1 } = useInView<HTMLHeadingElement>();
  return (
    <section id="cases" className="cases">
      <h2>My Projects</h2>

      <div className="project">
        <div className="project-content">
          <VerticalDivider
            startMargin="25px"
            length="20rem"
            dots={["0%", "20%", "52%", "100%"]}
          />
          <div className="left">
            <h2 className="title">Page for Printing service</h2>
            <hr />
            <h3 className="subtitle">Task</h3>
            <p className="">
              Developed a landing site for a print shop featuring service
              catalog, individual service pages with pricing calculators,
              customer reviews, and a contact form for inquiries.
            </p>
            <h3 className="subtitle">Result</h3>
            <p className="">
              Improved lead generation by making it easier for users to
              calculate prices and request services instantly, resulting in
              higher conversion rate and more qualified customer inquiries for
              both B2C and B2B clients.
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
                <h4 className={`reveal ${isV1 ? "show" : ""}`}>&lt;3 weeks</h4>
              </div>
            </div>
          </div>
          <div className="right">
            <LaptopMockup videoSrc={""} />
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-content">
          <VerticalDivider
            startMargin="25px"
            length="20rem"
            dots={["0%", "20%", "52%", "100%"]}
          />
          <div className="left">
            <h2 className="title">Driving School Landing Page</h2>
            <hr />
            <h3 className="subtitle">Task</h3>
            <p className="">
              Built a simple 2–3 page landing website for a driving school,
              including course information, pricing, and a contact form for
              quick enrollment.
            </p>
            <h3 className="subtitle">Result</h3>
            <p className="">
              Increased student sign-ups by simplifying access to key
              information and enabling fast inquiries, leading to more
              consistent lead flow and reduced drop-off during registration.
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
                <h4 className={`reveal ${isV1 ? "show" : ""}`}>&lt;2 weeks</h4>
              </div>
            </div>
          </div>
          <div className="right">
            <LaptopMockup videoSrc={""} />
          </div>
        </div>
      </div>
      <button className="btn show-more-btn">Show more</button>
      
    </section>
  );
};
