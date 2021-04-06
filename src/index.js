import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import "./index.css";

const Index = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
