import React, { useState } from "react";
import "./Contact.css";
import Icon1 from "../images/github-icon.png";
import Icon2 from "../images/linkedin-icon.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b3epu4m",
        "template_qathqoi",
        formData,
        "h1SwloCC0NpYWs-uV"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <>
      <div className="contact-body">
        <div className="contact-container">
          <h1>Contact Me</h1>
          <div className="contact-format">
            <span className="contact-info">
              <h2>Contact Info</h2>
              <div className="social-media">
                <p>
                  <strong>Email: </strong>tomitacolby@gmail.com
                </p>
                <p>
                  <strong>Phone: </strong>(808)497-7786
                </p>
                <h2>Social Media</h2>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/colbytomita">
                    <img src={Icon2} alt="linkedin-logo"></img>
                  </a>
                  <a href="https://github.com/colbytomita">
                    <img src={Icon1} alt="github-logo"></img>
                  </a>
                </div>
              </div>
            </span>
            <span className="contact-box">
              <h2>Send me a message!</h2>
              <br />
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g., John"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
