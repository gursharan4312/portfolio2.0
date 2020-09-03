import React from "react";
import "./css/projectsSection.scss";

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>

        <div className="projects-wrapper">
          <div>
            <div className="project">
              <img className="thumbnail" src="images/dash.jpg" alt="dash" />
              <div className="project-preview">
                <h6 className="project-title">Laboratory Management System</h6>
                <p className="project-intro">
                  Designed built &amp; mantained a the lab managment system for
                  FOI Laboratories
                </p>
                <a href="project.html">Read More</a>
              </div>
            </div>
          </div>

          <div>
            <div className="project">
              <img
                className="thumbnail"
                src="images/ecom.jpg"
                alt="thumbnail"
              />
              <div className="project-preview">
                <h6 className="project-title">
                  Online Store - CoursePost Title
                </h6>
                <p className="project-intro">
                  Online store with paypal payments intergration and guest user
                  shopping
                </p>
                <a href="project.html">Read More</a>
              </div>
            </div>
          </div>

          <div>
            <div className="project">
              <img
                className="thumbnail"
                src="images/membership site.jpg"
                alt="membership"
              />
              <div className="project-preview">
                <h6 className="project-title">Membership Website</h6>
                <p className="project-intro">
                  Modulized guide for online courses with step by step
                  intructions
                </p>
                <a href="project.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
