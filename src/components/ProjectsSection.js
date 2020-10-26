import React, { useState } from "react";
import "./css/projectsSection.scss";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../user.json";

export default function ProjectsSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const openProjectModal = (i) => {
    setSelectedProject(i);
    setOpenModal(true);
  };

  return (
    <div className="projects-section" id="projects">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Some of my projects</h3>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <ProjectCard
              project={project}
              key={i}
              index={i}
              openProjectModal={openProjectModal}
            />
          ))}
          {openModal && (
            <ProjectModal
              project={projects[selectedProject]}
              toggleModal={toggleModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
