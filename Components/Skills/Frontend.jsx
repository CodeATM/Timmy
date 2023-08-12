import React from "react";
import { FiAward } from "react-icons/fi";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>

      <div className="skills_box">
      <div className="skills_group">
        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">HTML</h3>
            <span className="skills_level">Advance</span>
          </div>
        </div>

        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">CSS</h3>
            <span className="skills_level">Advance</span>
          </div>
        </div>
        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">Tailwind CSS</h3>
            <span className="skills_level">Advance</span>
          </div>
        </div>

        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">Javascript</h3>
            <span className="skills_level">Advance</span>
          </div>
        </div>
        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">NextJS</h3>
            <span className="skills_level">Intermidate</span>
          </div>
        </div>
      </div>
      <div className="skills_group">
        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">ReactJS</h3>
            <span className="skills_level">Advance</span>
          </div>
        </div>

        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">Material UI</h3>
            <span className="skills_level">intermediate</span>
          </div>
        </div>
        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">Bootstrap</h3>
            <span className="skills_level">Basics</span>
          </div>
        </div>
        <div className="skills_data">
          <FiAward className="skill_icon" />
          <div className="">
            <h3 className="skills_name">Rest API</h3>
            <span className="skills_level">Intermediate</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Frontend;
