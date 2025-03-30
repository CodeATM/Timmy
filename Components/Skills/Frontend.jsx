import React from "react";
import { FiAward } from "react-icons/fi";

const Frontend = () => {
  const backendSkills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Javascript", level: "Advanced" },
    { name: "Typescript", level: "Basic" },
    { name: "ReactJS", level: "Basic" },
    { name: "NextJS", level: "" },
    { name: "Redux", level: "Basic" },
    { name: "VueJS", level: "Intermediate" },
    { name: "Material UI", level: "Basic" },
    { name: "API Integration", level: "Intermediate" },
    { name: "GSAP", level: "Intermediate" },
    { name: "Framer", level: "Basic" },
  ];
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Development</h3>

      <div className="skills_box">
        <div className="skills_group">
          {backendSkills.map((skill) => (
            <div className="skills_data">
              <FiAward className="skill_icon" />
              <div className="">
                <h3 className="skills_name">{skill.name}</h3>
                <span className="skills_level">Advance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
