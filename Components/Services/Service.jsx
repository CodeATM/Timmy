'use client'

import React, {useState} from "react";
import "./Service.css";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineArrowRight } from 'react-icons/ai'

const Service = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="service section" id="section">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I bring to the table</span>

      <div className="service_container container grid">
        <div className="service_content">
          <div className="">
            <LiaToolsSolid className="service_icon" />
            <h3 className="service_title">
              Product <br />
              Designer
            </h3>
          </div>

          <span className="service_button" onClick ={() => toggleTab(1)}>
            View more
            <AiOutlineArrowRight className="service_button-icon" />
          </span>

          <div className= {toggleState === 1 ? 'service_modal active-modal' : 'service_modal'}>
            <div className="service_modal-content">
              <MdOutlineCancel className="service_modal-close" onClick = {()=> toggleTab(0)}/>

              <h3 className="Service_modal-title">Product Designer</h3>
              <p className="service_modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore id ex, mollitia modi eligendi 
              </p>

              <ul className="service_modal-services grid">
                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service_content">
          <div className="">
            <LiaToolsSolid className="service_icon" />
            <h3 className="service_title">
              Product <br />
              Designer
            </h3>
          </div>

          <span className="service_button" onClick ={() => toggleTab(2)}>
            View more
            <AiOutlineArrowRight className="service_button-icon" />
          </span>

          <div className= {toggleState === 2 ? 'service_modal active-modal' : 'service_modal'}>
            <div className="service_modal-content">
              <MdOutlineCancel className="service_modal-close" onClick = {()=> toggleTab(0)}/>

              <h3 className="Service_modal-title">Product Designer</h3>
              <p className="service_modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore id ex, mollitia modi eligendi 
              </p>

              <ul className="service_modal-services grid">
                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service_content">
          <div className="">
            <LiaToolsSolid className="service_icon" />
            <h3 className="service_title">
              Product <br />
              Designer
            </h3>
          </div>

          <span className="service_button" onClick ={() => toggleTab(3)}>
            View more
            <AiOutlineArrowRight className="service_button-icon" onClick = {()=> toggleTab(0)} />
          </span>

          <div className= {toggleState === 3 ? 'service_modal active-modal' : 'service_modal'}>
            <div className="service_modal-content">
              <MdOutlineCancel className="service_modal-close" />

              <h3 className="Service_modal-title">Product Designer</h3>
              <p className="service_modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore id ex, mollitia modi eligendi 
              </p>

              <ul className="service_modal-services grid">
                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
