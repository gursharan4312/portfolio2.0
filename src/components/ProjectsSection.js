import React, { useState, useEffect } from "react";
import "./css/projectsSection.scss";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [projects, setProjects] = useState([
    {
      title: "",
      description: "",
      imgURL: "",
      github: "#",
      live: "#",
    },
  ]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const openProjectModal = (i) => {
    setSelectedProject(i);
    setOpenModal(true);
  };

  useEffect(() => {
    let temp = [
      {
        title: "Utility West Civil Works",
        description: "Local Construction company located at Delta BC.",
        imgURL: "images/utilitywest.JPG",
        github: "#",
        live: "http://utilitywestcivilworks.com/",
      },
      {
        title: "Portfolio 1.0",
        description: "My first portfolio built using React.js",
        imgURL: "images/portfolio1.JPG",
        github: "https://github.com/gursharan4312/portfolio_template_react",
        live: "https://portfolio-gursharan.netlify.app/",
      },
      {
        title: "Amazon Clone",
        description: "Amazon clone build using React",
        imgURL: "images/amazon-clone.JPG",
        github: "https://github.com/gursharan4312/amazon-clone",
        live: "https://amazon-react.netlify.app/",
      },
    ];
    setProjects([...temp]);
  }, []);
  return (
    <div className="projects-section">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
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
