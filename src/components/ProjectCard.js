import React from "react";
import "./css/projectCard.scss";

export default function ProjectCard({ project, index, openProjectModal }) {
  const { title, description, imgURL, github, live } = project;
  return (
    <div>
      <div className="project">
        <img
          className="thumbnail"
          src={imgURL}
          alt="thumbnail"
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
