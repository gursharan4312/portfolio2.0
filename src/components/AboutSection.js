import React from "react";
import "./css/aboutSection.scss";

export default function AboutSection() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p>
              I am a web Developer from vancouver, BC. I enjoy building
              everything from small business to rich intractive web apps. I
              enjoy creating new stuff which helps me to learn more.
            </p>
            <hr />
            <h4>TOP EXPERTISE</h4>
            <p>
              Fullstack developer with primary focus on Node(Express) + React:{" "}
              <a target="_blank" href="resume.pdf" rel="noopener noreferrer">
                Download Resume
              </a>
            </p>
            <div className="skills">
              <ul>
                <li>JavaScript(ES6)</li>
                <li>C++(OOP)</li>
                <li>AWS(EC2/S3/Lambda)</li>
                <li>HTML5/CSS3</li>
              </ul>
              <ul>
                <li>React</li>
                <li>Node(Express/Feathers) </li>
                <li>SQL/NoSQL</li>
                <li>MongoDB/MySQL/OracleDB</li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            {/* <img id="social_img" src="images/follow.jpg" alt="folow" /> */}
            <h3>Find me on other social platforms</h3>

            <a
              target="_blank"
              href="https://github.com/gursharan4312"
              rel="noopener noreferrer"
            >
              Github : gursharan4312
            </a>
            <br />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gursharan4312/"
              rel="noopener noreferrer"
            >
              Linkedin : gursharan4312
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
