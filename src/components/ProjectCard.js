import React from "react";
import "./css/projectCard.scss";

export default function ProjectCard({ project, index }) {
  const { title, description, whatIlearnt, images, github, live } = project;
  return (
    <div>
      <div className="project">
        <img
          className="thumbnail"
          src={images[0].url}
          alt={title}
          // onClick={() => openProjectModal(index)}
        />
        <div className="project-preview">
          <h6 className="project-title">{title}</h6>
          <p className="project-intro">{description}</p>
          {whatIlearnt && (
            <h5 style={{ margin: 0, padding: 0 }}>What did I learn?</h5>
          )}
          <ul>
            {whatIlearnt &&
              whatIlearnt.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
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

          {/* <span onClick={() => openProjectModal(index)}> Read More</span> */}
        </div>{" "}
      </div>
    </div>
  );
}
