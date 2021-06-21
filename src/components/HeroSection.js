import React from "react";
import "./css/heroSection.scss";

export default function HeroSection() {
  const changeThemeToDark = () => {
    var r = document.querySelector(":root");
    r.style.setProperty("--mainBackground", "#111");
    r.style.setProperty("--secondaryBackground", "#1e1e1e");
    r.style.setProperty("--tertiaryBackground", "#fcca57");
    r.style.setProperty("--mainColor", "#eaeaea");
    r.style.setProperty("--secondaryColor", "#fff");
    r.style.setProperty("--borderColor", "#c1c1c1");
    r.style.setProperty("--mainText", "#f1f1f1");
    r.style.setProperty("--secondaryText", "#ddd");
    r.style.setProperty("--themeDotBorder", "#24292e");
    r.style.setProperty("--previewBg", "#1f1a10");
    r.style.setProperty("--previewShadow", "#f0ead6");
    r.style.setProperty("--buttonColor", "#fff");
    r.style.setProperty("--buttonText", "#000");
  };
  const changeThemeToLight = () => {
    var r = document.querySelector(":root");
    r.style.setProperty("--mainBackground", "#fff");
    r.style.setProperty("--secondaryBackground", "#eaeaea");
    r.style.setProperty("--tertiaryBackground", "#f0ead6");
    r.style.setProperty("--mainColor", "#eaeaea");
    r.style.setProperty("--secondaryColor", "#fff");
    r.style.setProperty("--borderColor", "#c1c1c1");
    r.style.setProperty("--mainText", "#black");
    r.style.setProperty("--secondaryText", "#4b5156");
    r.style.setProperty("--themeDotBorder", "#24292e");
    r.style.setProperty("--previewBg", "#fbf9f3cc");
    r.style.setProperty("--previewShadow", "#f0ead6");
    r.style.setProperty("--buttonColor", "#000");
    r.style.setProperty("--buttonText", "#fff");
  };
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
                <a href="/final resume.pdf">Resume</a>
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
            <h4>Change Theme:</h4>
            <div className="theme-options-wrapper">
              <div className="theme-option">
                {/* <strong>Light:</strong>{" "} */}
                <span
                  className="theme-dot"
                  id="light-mode"
                  onClick={changeThemeToLight}
                ></span>
                <span
                  className="theme-dot"
                  id="dark-mode"
                  onClick={changeThemeToDark}
                ></span>
              </div>
              <div className="theme-option">
                {/* <strong>Dark:</strong>{" "} */}
                {/* <span
                  className="theme-dot"
                  id="dark-mode"
                  onClick={changeThemeToDark}
                ></span> */}
              </div>
            </div>
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
