import React from "react";
import "./css/projectCard.scss";

export default function ProjectCard({ project }) {
  const { title, description, imgURL, github, live } = project;
  return (
    <div>
      <div className="project">
        <img className="thumbnail" src={imgURL} alt="thumbnail" />
        <div className="project-preview">
          <h6 className="project-title">{title}</h6>
          <p className="project-intro">{description}</p>
          <a href={github}>Github</a>
          <br />
          <a href={live}>View live</a>
          <br />
          <a href="project.html">Read More</a>
        </div>{" "}
      </div>
    </div>
  );
}
