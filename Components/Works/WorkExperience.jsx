import React from "react";

const WorkExperience = ({ experiences }) => {
  return (
    <div className="work_grid">
      {experiences.map((exp) => (
        <div key={exp.id} className="work_item">
          <div className="work_header">
            <div className="work_header-content">
              <div className="work_title-group">
                <h3 className="work_role">{exp.role}</h3>
                <span className="work_company">@ {exp.company}</span>
              </div>
              <span className="work_duration">{exp.duration}</span>
            </div>
          </div>
          <ul className="">
            {exp.descriptions.map((ex, i) => (
              <li className="" key={i}>
                {ex}
              </li>
            ))}
          </ul>
          <div className="work_technologies">
            {exp.technologies.map((tech, index) => (
              <span key={index} className="work_tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
