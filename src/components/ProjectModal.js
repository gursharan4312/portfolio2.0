import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/projectModal.scss";

export default function ProjectModal({ project, toggleModal }) {
  const modalContainer = useRef(null);
  const {
    projectName,
    projectDescription,
    projectImage,
    github,
    live,
    technologies,
  } = project;
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        modalContainer.current &&
        !modalContainer.current.contains(e.target)
      ) {
        toggleModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalContainer, toggleModal]);
  return ReactDOM.createPortal(
    <div className="project-modal">
      <div className="modal-container" ref={modalContainer}>
        <div className="modal-head">
          <div className="dots-wrapper" onClick={toggleModal}>
            <div id="dot-1" className="browser-dot">
              x
            </div>
            <div id="dot-2" className="browser-dot"></div>
            <div id="dot-3" className="browser-dot"></div>
          </div>
        </div>
        <div className="modal-body">
          <div className="project-img">
            <h1>{projectName}</h1>
            <div>
              <Carousel>
                {projectImage.map((image, i) => (
                  <div key={i}>
                    <img src={image} alt={projectName} />
                    {/* {image.legend && <p className="legend">{image.legend}</p>} */}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="project-details">
            <p className="project-desc">{projectDescription}</p>
            <div className="project-technologies">
              Technologies used:
              {technologies.map((tech, i) => (
                <span className="technology" key={i}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={live} className="btn" target="_blankl">
                View Live
              </a>
              <a href={github} className="btn" target="_blankl">
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer"></div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
}
