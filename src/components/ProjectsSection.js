import React, { useState, useEffect } from "react";
import "./css/projectsSection.scss";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import axios from "axios";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const openProjectModal = (i) => {
    setSelectedProject(i);
    setOpenModal(true);
  };

  useEffect(() => {
    axios.get("/admin/data/portfolio.json").then(({ data }) => {
      setProjects([...data.projects]);
    });
  }, []);

  return (
    <div className="projects-section" id="projects">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>PORTFOLIO</h3>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <ProjectCard
              project={project}
              key={i}
              index={i}
              openProjectModal={openProjectModal}
            />
          ))}
        </div>
        {openModal && projects && (
          <ProjectModal
            project={projects[selectedProject]}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </div>
  );
}
