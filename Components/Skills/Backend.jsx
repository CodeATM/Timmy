import React from 'react'
import { FiAward } from "react-icons/fi";

const Backend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Backend Development</h3>

        <div className="skills_box">
        <div className="skills_group">
            <div className="skills_data">
                <FiAward className='skill_icon'/>
                <div className="">
                    <h3 className="skills_name">Node JS</h3>
                        <span className="skills_level">Intermediate</span>

                </div>
            </div>

            <div className="skills_data">
                <FiAward className='skill_icon'/>
                <div className="">
                    <h3 className="skills_name">Express JS</h3>
                        <span className="skills_level">Intermediate</span>

                </div>
            </div>
            <div className="skills_data">
                <FiAward className='skill_icon'/>
                <div className="">
                    <h3 className="skills_name">MongoDB</h3>
                        <span className="skills_level">Intermediate</span>

                </div>
            </div>
            <div className="skills_data">
                <FiAward className='skill_icon'/>
                <div className="">
                    <h3 className="skills_name">Git</h3>
                        <span className="skills_level">Advance</span>

                </div>
            </div>
            <div className="skills_data">
                <FiAward className='skill_icon'/>
                <div className="">
                    <h3 className="skills_name">Firebase</h3>
                        <span className="skills_level">Basics</span>

                </div>
            </div>
        </div>
        <div className="skills_group">
            <div className="skills_data">
                <FiAward className='skill_icon'/>
                <div className="">
                    <h3 className="skills_name">Python</h3>
                        <span className="skills_level">Basics</span>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Backend