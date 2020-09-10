import React from "react";
import ReactDOM from "react-dom";
import "./css/projectModal.scss";

export default function ProjectModal({ project, toggleModal }) {
  const { title, description, imgURL, github, live } = project;
  return ReactDOM.createPortal(
    <div className="project-modal">
      <div className="modal-container">
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
          <h1>{title}</h1>
          <img src={imgURL} />
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>,
    document.querySelector("#portal")
  );
}
