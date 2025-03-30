"use client";

import React, { useState } from "react";
import "./Service.css";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

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

          <div className="service-button-component">
            <a href="" download="">
              <span className="service_button">
                Download CV
                <DownloadButton />
              </span>
            </a>
            <span className="service_button" onClick={() => toggleTab(1)}>
              View more
              <AiOutlineArrowRight className="service_button-icon" />
            </span>
          </div>

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

          <div className="service-button-component">
            <a href="" download="">
              <span className="service_button">
                Download CV
                <DownloadButton />
              </span>
            </a>
            <span className="service_button" onClick={() => toggleTab(2)}>
              View more
              <AiOutlineArrowRight className="service_button-icon" />
            </span>
          </div>

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
              FullStack <br />
              Development
            </h3>
          </div>

          <div className="service-button-component">
            <a href="" download="">
              <span className="service_button">
                Download CV
                <DownloadButton />
              </span>
            </a>
            <span className="service_button" onClick={() => toggleTab(3)}>
              View more
              <AiOutlineArrowRight className="service_button-icon" />
            </span>
          </div>

          <div
            className={
              toggleState === 3 ? "service_modal active-modal" : "service_modal"
            }
          >
            <div className="service_modal-content">
              <MdOutlineCancel
                className="service_modal-close"
                onClick={() => toggleTab(0)}
              />

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

const DownloadButton = () => {
  return (
    <div className="">
      <svg
        className="button__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
          fill="var(--title-color)"
        ></path>
        <path
          d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
          fill="var(--title-color)"
        ></path>
        <path
          d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
          fill="var(--title-color)"
        ></path>
        <path
          d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
          fill="var(--title-color)"
        ></path>
      </svg>
    </div>
  );
};

export default Service;
