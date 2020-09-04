import React from "react";
import "./css/contactSection.scss";

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

        <form id="contact-form">
          <label>Name</label>
          <input className="input-field" type="text" name="name" />

          <label>Subject</label>
          <input className="input-field" type="text" name="subject" />

          <label>Email</label>
          <input className="input-field" type="text" name="email" />

          <label>Message</label>
          <textarea className="input-field" name="message"></textarea>

          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
