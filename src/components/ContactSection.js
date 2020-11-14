import React, { useState } from "react";
import "./css/contactSection.scss";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let formdata = { name, email, subject, message };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formdata }),
    })
      .then((res) => {
        setIsSubmitting(false);

        if (res.status === 200) {
          setFormResponse("<span class='success' >Message Submitted</span>");
        } else {
          setFormResponse("<span class='error' >Something went wrong</span>");
        }
      })
      .catch((e) =>
        setFormResponse("<span class='error' >Something went wrong</span>")
      );
  };
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
        <form name="contact" id="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={name}
              className="input-field"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={email}
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Subject:
            <input
              name="subject"
              value={subject}
              className="input-field"
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={message}
              className="input-field"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <input id="submit-btn" type="submit" value="Send" />
          {isSubmitting && <div className="loader" />}
          {formResponse && (
            <div
              className="form-response"
              dangerouslySetInnerHTML={{ __html: formResponse }}
            />
          )}
        </form>
      </div>
    </div>
  );
}
