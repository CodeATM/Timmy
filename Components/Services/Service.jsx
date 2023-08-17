"use client";

import React, { useState } from "react";
import "./Service.css";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FiSettings } from 'react-icons/fi'

const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="service section" id="section">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I bring to the table</span>

      <div className="service_container container grid">
        <div className="service_content">
          <div className="">
            <CgWebsite className="service_icon" />
            <h3 className="service_title">
              Frontend <br />
              Development
            </h3>
          </div>

          <span className="service_button" onClick={() => toggleTab(1)}>
            View more
            <AiOutlineArrowRight className="service_button-icon" />
          </span>

          <div
            className={
              toggleState === 1 ? "service_modal active-modal" : "service_modal"
            }
          >
            <div className="service_modal-content">
              <MdOutlineCancel
                className="service_modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="Service_modal-title">Frontend Development</h3>
              <p className="service_modal-description">
                I offer the best frontend services to make your website more
                fanstastic
              </p>

              <ul className="service_modal-services grid">
                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Dynamic and static webpages.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Advance integration for better SEO.
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Large scale and single page websites.
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
              Backend <br />
              Development
            </h3>
          </div>

          <span className="service_button" onClick={() => toggleTab(2)}>
            View more
            <AiOutlineArrowRight className="service_button-icon" />
          </span>

          <div
            className={
              toggleState === 2 ? "service_modal active-modal" : "service_modal"
            }
          >
            <div className="service_modal-content">
              <MdOutlineCancel
                className="service_modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="Service_modal-title">Backend Development</h3>
              <p className="service_modal-description">
                I will provide you with the best Backend logic that best suit
                your need
              </p>

              <ul className="service_modal-services grid">
                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Advance security practice to ensure your data safety
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Best logics to ensure fast and efficient running of your web
                    Applications
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Nice hosting for easy access
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service_content">
          <div className="">
            <FiSettings className="service_icon" />
            <h3 className="service_title">
              Website <br />
              Management
            </h3>
          </div>

          <span className="service_button" onClick={() => toggleTab(3)}>
            View more
            <AiOutlineArrowRight
              className="service_button-icon"
              onClick={() => toggleTab(0)}
            />
          </span>

          <div
            className={
              toggleState === 3 ? "service_modal active-modal" : "service_modal"
            }
          >
            <div className="service_modal-content">
              <MdOutlineCancel className="service_modal-close" />

              <h3 className="Service_modal-title">Website Manager</h3>
              <p className="service_modal-description">
                I help to manage existing website for easy and better work flow
              </p>

              <ul className="service_modal-services grid">
                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">Bug fixing</p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">
                    Website content management
                  </p>
                </li>

                <li className="service_modal-service">
                  <LiaToolsSolid className="Service_modal-icon" />
                  <p className="service_modal-info">Api integrations</p>
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
