import React from "react";
import ReactDOM from "react-dom";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import "./index.css";

ReactDOM.render(
  <div className="main-container">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>,
  document.getElementById("root")
);
