import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
  showImage,
}) => {
  return (
    <div className={`project_card ${!showImage ? 'backend' : ''}`}>
      {showImage && (
        <div className="project_img-wrapper">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="project_img"
          />
        </div>
      )}

      <div className="project_content">
        <h3 className="project_title">{title}</h3>
        <p className="project_description">{description}</p>
        <div className="project_technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project_tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project_links">
          {liveLink && (
            <a href={liveLink} className="project_link" target="_blank" rel="noreferrer">
              Demo <i className="bx bx-right-arrow-alt"></i>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} className="project_link" target="_blank" rel="noreferrer">
              Github <i className="bx bx-right-arrow-alt"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 