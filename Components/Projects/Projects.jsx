"use client";

import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const frontendProjects = [
  {
    id: 1,
    title: "Cloudz",
    description:
      "Cloudz is a modern and small scale version od Google drive which offers the service of uploading images and creating a shareable link for sharing and future download.",
    image: "/assets/uploader.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwindcss",
      "Typescript",
      "Api integration",
      "Redux",
    ],
    liveLink: "https://cloudz-three.vercel.app/",
    githubLink: "https://github.com/CodeATM/cloudinary-uploader",
  },
  {
    id: 2,
    title: "PicFinder",
    description:
      "PIcFinder is an application built on the unsplash api. It include feature such as search for both images and images colection. ",
    image: "/assets/picFinder.png",
    technologies: [
      "React",
      "Tailwind css",
      "Framer Motion",
      "NextJS",
      "Javascript",
    ],
    liveLink: "https://picture-finder.vercel.app/",
    githubLink: "https://github.com/CodeATM/PictureFinder",
  },
  {
    id: 3,
    title: "PDSign",
    description:
      "This is a tools that hepls to anotate a document such as adding highlight, underline, signature. it also has a feature of exporting the anotated document.",
    image: "/assets/Annotation.png",
    technologies: ["React", "Next.js", "Tailwind Css", "Typescript"],
    liveLink: "https://pdf-annotator-orcin.vercel.app/",
    githubLink: "https://github.com/CodeATM/Pdf-Annotator",
  },
  {
    id: 4,
    title: "Voyage",
    description:
      "Voyage is a vacation website landing page that shows the vacation listing of the company with nice and cool animation. It is built with GSAP for motion for nice motion.",
    image: "/assets/voyage.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Typescript",
      "NextJS",
    ],
    liveLink: "https://voyage-pi.vercel.app/",
    githubLink: "https://github.com/CodeATM/Voyage",
  },
];

const backendProjects = [
  {
    id: 1,
    title: "ECommerce API",
    description:
      "This is an eccommerce api built with nodejs to handle the datafow of an ecomerce platform. IT also offer the features such as Payment, Analytics, Authentication with OAuth2.0.",
    technologies: ["Node.js", "Express", "Redis", "MongoDB", "Stripe"],
    liveLink: "https://ecommerce-api-oe5e.onrender.com",
    githubLink: "https://github.com/CodeATM/Ecommerce-Api",
  },
  {
    id: 2,
    title: "Ajo",
    description:
      "RESTful API useable for contribution. It is  developed based on PAystack as a payment gateway. it also has robust integration for notifications, Emailing etc ",
    technologies: [
      "Node.js",
      "Express",
      "Redis",
      "MongoDB",
      "Paystack",
      "OAuth",
    ],
    liveLink: "https://ajo-m7gy.onrender.com",
    githubLink: "https://github.com/CodeATM/Ajo",
  },
  {
    id: 3,
    title: "Little Diary",
    description:
      "This is an API Built to handle crud operation for a note keeping app. it is bulit Using GOlang and POstgresSQL",
    technologies: ["Golang", "GOfiber", "Redis", "PostgresSQL"],
    liveLink: "https://go-notepal.onrender.com",
    githubLink: "https://github.com/CodeATM/go-notepal",
  },
  {
    id: 4,
    title: "Artistic",
    description:
      "Artistic API was built to handle backend operations of a story writing application.IT offers features such as like, comment,  folllowing etc. It is built to handle robust story like wattpad with chapters for each ",
    technologies: ["Node.js", "Express", "Redis", "MongoDB"],
    liveLink: "https://artistic-7k0f.onrender.com",
    githubLink: "https://github.com/CodeATM/Artistic",
  },
  {
    id: 5,
    title: "SocioME",
    description:
      "SocioMe is an online social media platform that is built with NodeJS, expressJS, Mongodb. It allows user to like, Follow, create feeds, add comment etc.",
    technologies: ["NodeJs", "ExpressJS", "MongoDB"],
    liveLink: "",
    githubLink: "https://github.com/project",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">My Recent Work</span>

      <div className="container">
        <div className="projects_tabs">
          <div className="tabs_list">
            <button
              className={`tab_button ${
                activeTab === "frontend" ? "active" : ""
              }`}
              onClick={() => setActiveTab("frontend")}
            >
              Frontend
            </button>
            <button
              className={`tab_button ${
                activeTab === "backend" ? "active" : ""
              }`}
              onClick={() => setActiveTab("backend")}
            >
              Backend
            </button>
          </div>

          <div className="projects_grid">
            {(activeTab === "frontend"
              ? frontendProjects
              : backendProjects
            ).map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                showImage={activeTab === "frontend"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
