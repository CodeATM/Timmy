import React from "react";
import {FiAward,} from 'react-icons/fi'
import {BiSupport} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <FiAward className='about_icon'/>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">4 Years Working</span>
      </div>
      
      <div className="about_box">
        <BiSupport className='about_icon'/>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">16+ Project</span>
      </div>

      <div className="about_box">
        <BsBriefcase className='about_icon'/>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
