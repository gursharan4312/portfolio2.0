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
        images: [
          {
            url: "images/utilitywest.JPG",
            legend: "",
          },
        ],
        imgURL: "images/utilitywest.JPG",
        github: "#",
        live: "http://utilitywestcivilworks.com/",
        technologies: ["React", "SASS"],
      },
      {
        title: "Portfolio 1.0",
        description: "My first portfolio built using React.js",
        images: [
          {
            url: "images/portfolio1.JPG",
            legend: "Dark theme",
          },
        ],
        imgURL: "images/portfolio1.JPG",
        github: "https://github.com/gursharan4312/portfolio_template_react",
        live: "https://portfolio-gursharan.netlify.app/",
        technologies: ["React", "SASS", "Particle.js"],
      },
      {
        title: "Amazon Clone",
        description: "Amazon clone build using React",
        images: [
          {
            url: "images/amazon-clone.JPG",
            legend: "Dark theme",
          },
        ],
        imgURL: "images/amazon-clone.JPG",
        github: "https://github.com/gursharan4312/amazon-clone",
        live: "https://amazon-react.netlify.app/",
        technologies: ["React", "SASS"],
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
