import React, { useState } from "react";
import "./css/projectsSection.scss";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const projects = [
    {
      title: "ProShop Ecomm App",
      description:
        "Full Stack ecomm app built using MERN(MongoDB, Express, React, Node) Stack",
      images: [
        {
          url: "images/proshop1.PNG",
          legend: "Home page",
        },
        {
          url: "images/proshop2.PNG",
          legend: "Project Details",
        },
        {
          url: "images/proshop3.PNG",
          legend: "Cart Section",
        },
        {
          url: "images/proshop5.PNG",
          legend: "Order Details",
        },
        {
          url: "images/proshop6.PNG",
          legend: "Admin Products update",
        },
      ],
      github: "https://github.com/gursharan4312/proshop",
      live: "https://proecomm.herokuapp.com/",
      technologies: ["Node.js", "Express", "MongoDb", "React", "SASS"],
    },
    {
      title: "Utility West Civil Works",
      description: "Local Construction company located at Delta BC.",
      images: [
        {
          url: "images/utilitywest.JPG",
          legend: "",
        },
      ],
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
        {
          url: "images/portfolio1-light.JPG",
          legend: "Light theme",
        },
      ],
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
      github: "https://github.com/gursharan4312/amazon-clone",
      live: "https://amazon-react.netlify.app/",
      technologies: ["React", "SASS"],
    },
  ];

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
