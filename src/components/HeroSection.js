import React from "react";
import "./css/heroSection.scss";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm Gursharan Singh</h1>
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a href="/">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>

            <ul id="navigation">
              <li>
                <a href="/resume.pdf">Resume</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="left-column">
            <img
              id="profile_pic"
              src="/images/profile.jpg"
              alt="Gursharan Singh"
            />
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>What I Do</h3>
                <p>I design and build wesbites</p>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
