import React from "react";
import "./css/contactSection.scss";

export default function ContactSection() {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
        <form name="contact" id="contact-form" method="POST" action="/">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name:
            <input name="name" className="input-field" />
          </label>
          <label>
            Email:
            <input name="email" type="email" className="input-field" />
          </label>
          <label>
            Subject:
            <input name="subject" className="input-field" />
          </label>
          <label>
            Message:
            <textarea name="message" className="input-field" />
          </label>
          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
