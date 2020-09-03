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
              I build new projects just to tickle my brain and love teaching
              others how they're made.
            </p>

            <p>
              While I keep busy teaching courses, I still take interviews in
              search of a great team &amp; projects that interest me.
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p>
              Fullstack developer with primary focus on Django + React:{" "}
              <a target="_blank" href="resume.pdf">
                Download Resume
              </a>
            </p>

            <div className="skills">
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Postgres</li>
              </ul>

              <ul>
                <li>Google Maps API</li>
                <li>JS Charts</li>
                <li>AWS (RDS/S3)</li>
                <li>Heroku</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          </div>

          <div className="social-links">
            <img id="social_img" src="images/follow.jpg" />
            <h3>Find me on Twitter &amp; Youtube</h3>

            <a target="_blank" href="https://www.youtube.com/c/dennisivy">
              YouTube: @DennisIvy
            </a>
            <br />
            <a target="_blank" href="https://twitter.com/dennisivy11">
              Twitter: @DennisIvy11
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
