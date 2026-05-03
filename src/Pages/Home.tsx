import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <div className="home-wrapper">
      <Helmet>
        <title>Andrzej Turzański | .NET & React Developer</title>
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <h1>Andrzej Turzański</h1>
      <h2>Software Engineer & Web Performance Specialist</h2>
      <div className="home-button-wrapper">
        <Link to={"/"}>
          <span>
            Dla Rekruterów <br />/ Portfolio IT
          </span>
          <code>.net</code>
        </Link>
        <Link reloadDocument to={"/web"}>
          <span>
            Usługi Web <br />/ Oferta Biznesowa
          </span>

          <code>web</code>
        </Link>
      </div>
    </div>
  );
}
