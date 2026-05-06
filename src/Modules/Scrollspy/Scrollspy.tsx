import React, { useEffect, useState } from "react";
import "./scrollspy.css";
import { useTranslation } from "react-i18next";

const sections = ["heroTitle", "cases", "tech", "about", "process", "contact"];
export const Scrollspy = () => {
  const { t } = useTranslation();
  const [shown, setShown] = useState(true);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // центр экрана
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="scrollspy">
      <div className="title">
        {t("nav")}
        <button
          className={shown ? "" : "hidden1"}
          onClick={() => setShown(!shown)}
        >
          <img src="/svg/arrow_down.svg" height={18} alt="" />
        </button>
      </div>
      <ul className={shown ? "" : "hidden1"}>
        {sections.map((i) => {
          return (
            <li key={i} className={active === i ? "active" : ""}>
              <a href={"#"+i}>{t(i+".title")}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
