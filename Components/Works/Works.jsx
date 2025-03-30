"use client";

import React, { useState } from "react";
import "./Work.css";
import WorkExperience from "./WorkExperience";

const frontendExperience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "CVspan Limited",
    duration: "2024 - Present",
    descriptions: [
      "Improved page load speed by 35% by optimizing assets implementing lazy loading, and minimizing render-blocking resources, contributing to a smoother user experience",
      "Developed mobile-first, responsive interfaces ensuring consistent functionality and visual integrity across all devices and browsers",
      "Introduced smooth, lightweight animations and interactive elements,improving the site’s visual appeal and engagement metrics.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer motion",
      "AWS",
      "API integrations",
    ],
  },
  {
    id: 2,
    role: "Contract Software Developer",
    company: "The Edge Cooperative Society",
    duration: "March 2024 -  May 2024",
    descriptions: [
      "Refactored existing codebase to follow best practices, enhancing code readability, reducing technical debt, and making future updates more efficient.",
      "Developed and maintained client-facing applications. Collaborated with designers to implement pixel-perfect interfaces.",
    ],
    technologies: [
      "HTML",
      "JavaScript",
      "ExpressJS",
      "Bootstrap",
      "ReactJS",
      "MySQL",
    ],
  },
  {
    id: 3,
    role: "Backend Developer Intern",
    company: "Wish to Wear",
    duration: "Jan 2024 - July 2024",
    descriptions: [
      "Built an order management module, improving transaction efficiency for e-commerce operations",
      "Collaborated closely with the front-end team to streamline user experiences, reducing load times.",
      "Scaled back-end RESTful APIs, achieving a reduction in server downtime.",
    ],
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Awelewa Clothing",
    duration: "Aug 2022 - Oct 2023",
    descriptions: [
      "Maintained regular communication with stakeholders to ensure development alignment with business goals and to implement adjustments based on direct feedback",
      "Implemented responsive design principles, ensuring seamless user experience on both high- and low-performance devices",
    ],
    technologies: [
      "React",
      "HTML",
      "Tailwindcss",
      "Javascript",
      "Api integration",
      "Redux",
      "Framer motion",
      ,
    ],
  },
];

const Works = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section_title">Work Experience</h2>
      <span className="section_subtitle">Where I've Worked</span>

      <div className="container work_section">
        <div className="work_tabs">
          <div className="tabs_content">
            <WorkExperience experiences={frontendExperience} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
