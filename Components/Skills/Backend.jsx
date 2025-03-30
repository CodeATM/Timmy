import React from "react";
import { FiAward } from "react-icons/fi";

const backendSkills = [
  { name: "NodeJS", level: "Intermediate" },
  { name: "ExpressJS", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "Firebase", level: "Basic" },
  { name: "Python", level: "Basic" },
  { name: "FastAPI", level: "" },
  { name: "NestJS", level: "Intermediate" },
  { name: "Golang", level: "Basic" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Redis", level: "Basic" },
  { name: "Docker", level: "Intermediate" },
  { name: "AWS", level: "Basic" },
];

const Backend = () => {
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

export default Backend;
