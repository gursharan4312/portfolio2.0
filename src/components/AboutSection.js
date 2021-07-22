import React from "react";
import "./css/aboutSection.scss";

export default function AboutSection() {
  const skills = [
    "JavaScript(ES6)",
    "Java",
    "React",
    "Redux",
    "Node",
    "AWS(EC2/S3/Lambda)",
    "HTML5/CSS3",
    "SQL(MySQL)",
    "MongoDB",
    "Nginx",
    "Docker",
    "Git",
    "WebAPI",
    "and more...",
  ];
  const socialLinks = [
    {
      name: "Github : gursharan4312",
      link: "https://github.com/gursharan4312",
    },
    {
      name: "Linkedin : gursharan4312",
      link: "https://www.linkedin.com/in/gursharan4312/",
    },
  ];
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p>
              I always had passion for coding. I enjoy doing both frontend and
              backend of a website.I am always looking for opportunities to push
              my boundaries and build new and exciting things.Recently I'm more
              focused on MERN stack and created some awsome projects with it.
            </p>
            <hr />
            <h4>TOP EXPERTISE</h4>
            <p>
              Fullstack developer with primary focus on Node(Express) + React:{" "}
              <a target="_blank" href="/final resume.pdf" rel="noopener noreferrer">
                Download Resume
              </a>
            </p>
          </div>

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
        </div>
        <div className="skills">
          <h3>Programming Skills</h3>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
