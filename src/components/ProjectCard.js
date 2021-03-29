import React from "react";
import "./css/projectCard.scss";

export default function ProjectCard({ project, index, openProjectModal }) {
  const {
    projectName,
    projectDescription,
    whatDidILearn,
    projectImage,
    github,
    live,
  } = project;
  return (
    <div className="project">
      <img
        className="thumbnail"
        src={projectImage[0]}
        alt={projectName}
        onClick={() => openProjectModal(index)}
      />
      <div className="project-preview">
        <h6 className="project-title">{projectName}</h6>
        <p className="project-intro">{projectDescription}</p>
        {whatDidILearn && (
          <h5 style={{ margin: 0, padding: 0 }}>What did I learn?</h5>
        )}
        <ul id="whatILearn">
          {whatDidILearn &&
            whatDidILearn.map((item, i) =>
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
