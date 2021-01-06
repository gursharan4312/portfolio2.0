import React from "react";
import "./css/projectCard.scss";

export default function ProjectCard({ project, index, openProjectModal }) {
  const { title, description, whatIlearnt, images, github, live } = project;
  return (
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
        {whatIlearnt && (
          <h5 style={{ margin: 0, padding: 0 }}>What did I learn?</h5>
        )}
        <ul id="whatILearn">
          {whatIlearnt &&
            whatIlearnt.map((item, i) =>
              i < 3 ? (
                <li key={i}>{item}</li>
              ) : i === 3 ? (
                <strong>. . . . .</strong>
              ) : (
                ""
              )
            )}
        </ul>
        <span onClick={() => openProjectModal(index)}> Read More</span>
        <div className="button-wrapper">
          {github !== "#" && (
            <a href={github} target="_blankl">
              Github
            </a>
          )}

          <a href={live} target="_blankl">
            View live
          </a>
        </div>
      </div>
    </div>
  );
}
