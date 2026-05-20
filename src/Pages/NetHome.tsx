import React from "react";
import "./nethome.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
export default function NetHome() {
  return (
    <>
      <Helmet>
        <title>Andrzej Turzański | .NET & React Developer</title>
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <div className="nethome home-wrapper">
        <h1>My Projects</h1>
        <div className="projects-wrapper">
          <div className="project" >
            <div className="project-header">
              <div className="apibox">API</div>
              <h3>Print shop E-Comm</h3>
            </div>
            <div className="techstack">
              <span className="tech">C#</span> 
              <span className="tech">ASP.NET</span>
              <span className="tech">PostgreSQL</span>
              <span className="tech">Docker</span>
              
            </div>
             <div className="techstack">
              <span className="tech">JWT</span> 
             
            </div>
            <div className="footer"><Link to="https://github.com/turzhyk/dpback-ecomm-api"><img width={22} src="/svg/socials/github.svg"/><span>Check it on GitHub</span></Link></div>
          </div>
          <div className="project" >
            <div className="project-header">
              <div className="apibox">API</div>
              <h3>Loyalty System</h3>
            </div>
            <div className="techstack">
              <span className="tech">C#</span> 
              <span className="tech">ASP.NET</span>
              <span className="tech">PostgreSQL</span>
              <span className="tech">Docker</span>
              
            </div>
             <div className="techstack">
              <span className="tech">JWT</span> 
             
            </div>
            <div className="footer"><Link to="https://github.com/turzhyk/loyaltysystem"><img width={22} src="/svg/socials/github.svg"/><span>Check it on GitHub</span></Link></div>
          </div>
        </div>
      </div>
    </>
  );
}
