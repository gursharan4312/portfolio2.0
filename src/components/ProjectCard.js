import React from "react";
import "./css/projectCard.scss";

export default function ProjectCard({ project, index, openProjectModal }) {
  const { title, description, images, github, live } = project;
  return (
    <div>
      <div className="project">
        <img
          className="thumbnail"
          src={images[0].url}
          alt={title}
          onClick={() => openProjectModal(index)}
        />
        <div className="project-preview">
          <h6 className="project-title">{title}</h6>
          <p className="project-intro">{description}</p>
          <a href={github} target="_blankl">
            Github
          </a>
          <br />
          <a href={live} target="_blankl">
            View live
          </a>
          <br />
          <span onClick={() => openProjectModal(index)}> Read More</span>
        </div>{" "}
      </div>
    </div>
  );
}
