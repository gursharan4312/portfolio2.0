import React from "react";
import "./css/heroSection.scss";
import { name, imageUrl, whatIdo } from "../user.json";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="container">
        <div className="greeting-wrapper">
          <h1>Hi, I'm {name}</h1>
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
                <a href="/resume (1).pdf">Resume</a>
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
            <img id="profile_pic" src={imageUrl} alt={name} />
            {/* <h5 style={{ textAlign: "center", lineHeight: "0" }}>
              Personalize Theme
            </h5> */}

            {/* <div id="theme-options-wrapper">
              <div
                data-mode="light"
                id="light-mode"
                className="theme-dot"
              ></div>
              <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
              <div
                data-mode="green"
                id="green-mode"
                className="theme-dot"
              ></div>
              <div
                data-mode="purple"
                id="purple-mode"
                className="theme-dot"
              ></div>
            </div> */}

            {/* <p id="settings-note">
              *Theme settings will be saved for
              <br />
              your next vist
            </p> */}
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>What I Do</h3>
                <p>{whatIdo}</p>
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
