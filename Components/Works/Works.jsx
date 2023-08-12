import React from "react";
import "./Work.css";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Works</h2>
      <span className="section_subtitle">Past Projects</span>

      <div className="container work_section">
        <WorkCard />
      </div>
    </section>
  );
};

export default Works;
