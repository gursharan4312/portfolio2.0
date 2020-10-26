import React from "react";
import "./css/aboutSection.scss";
import { aboutMe, topExperties, skills, socialLinks } from "../user.json";

export default function AboutSection() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p>{aboutMe}</p>
            <hr />
            <h4>TOP EXPERTISE</h4>
            <p>
              {topExperties}:{" "}
              <a target="_blank" href="resume.pdf" rel="noopener noreferrer">
                Download Resume
              </a>
            </p>
            <div className="skills">
              <ul>
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          {socialLinks && (
            <>
              <div className="social-links">
                <h4>Find me on other social platforms</h4>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
