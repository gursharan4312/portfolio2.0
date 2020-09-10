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
        title: "Online Store - CoursePost Title",
        description:
          "Online store with paypal payments intergration and guest user shopping",
        imgURL: "images/ecom.jpg",
        github: "#",
        live: "#",
      },
      {
        title: "Online Store - CoursePost Title2",
        description:
          "Online store with paypal payments intergration and guest user shopping",
        imgURL: "images/ecom.jpg",
        github: "#",
        live: "#",
      },
      {
        title: "Online Store - CoursePost Title3",
        description:
          "Online store with paypal payments intergration and guest user shopping",
        imgURL: "images/ecom.jpg",
        github: "#",
        live: "#",
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
