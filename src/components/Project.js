import React from "react";
import ReactDOM from "react-dom";

export default function Project({ project }) {
  return ReactDOM.createPortal(
    <div className="full-project">
      <h1>project</h1>
    </div>,
    document.querySelector("#portal")
  );
}
