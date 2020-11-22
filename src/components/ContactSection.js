import React, { useState } from "react";
import "./css/contactSection.scss";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResoponse, setFormResponse] = useState({ color: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, email, subject, message };
    if (!name || !email || !message) {
      setFormResponse({
        color: "error",
        message: "Name, Email and Message are required",
      });
      return;
    }
    setIsSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then((res) => {
        if (res.status === 200) {
          setFormResponse({ color: "success", message: "Message Sent!" });
          setIsSubmitting(false);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setFormResponse({ color: "error", message: "Someting went wrong" });
          setIsSubmitting(false);
        }
      })
      .catch(() => {
        setFormResponse({ color: "error", message: "Someting went wrong" });
        setIsSubmitting(false);
      });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
        <form name="contact" id="contact-form">
          <label>
            Name:
            <input
              name="name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Subject:
            <input
              name="subject"
              className="input-field"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              className="input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <input
            id="submit-btn"
            type="submit"
            value="Send"
            onClick={handleSubmit}
          />
          {isSubmitting && <span className="loader"></span>}
          {formResoponse.message !== "" && (
            <div className={`form-response ${formResoponse.color}`}>
              {formResoponse.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
