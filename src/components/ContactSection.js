import React, { useState } from "react";
import "./css/contactSection.scss";

import { Formik, Field, Form } from "formik";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState("");
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
        <Formik
          initialValues={{ name: "", subject: "", email: "", message: "" }}
          onSubmit={(values, actions) => {
            setIsSubmitting(true);

            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", values }),
            })
              .then((res) => {
                setIsSubmitting(false);
                actions.resetForm();

                if (res.status === 200) {
                  setFormResponse(
                    "<span class='success' >Message Submitted</span>"
                  );
                } else {
                  setFormResponse(
                    "<span class='error' >Something went wrong</span>"
                  );
                }
              })
              .catch((e) =>
                setFormResponse(
                  "<span class='error' >Something went wrong</span>"
                )
              );
          }}
        >
          {(props) => (
            <Form id="contact-form" name="contact">
              <label>Name</label>
              <Field name="name" type="text" className="input-field" required />
              <label>Subject</label>
              <Field name="subject" type="text" className="input-field" />
              <label>Email</label>
              <Field
                name="email"
                type="email"
                className="input-field"
                required
              />
              <label>Message</label>
              <Field name="message" as="textarea" className="input-field" />
              <input id="submit-btn" type="submit" value="Send" />
              {isSubmitting && <div className="loader" />}
              {formResponse && (
                <div
                  className="form-response"
                  dangerouslySetInnerHTML={{ __html: formResponse }}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
