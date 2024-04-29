import React from "react";
import "./Contact.css";
import Icon1 from "../images/github-icon.png";
import Icon2 from "../images/linkedin-icon.png";

const Contact = () => {
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
                  <a href="github.com/colbytomita">
                    <img src={Icon1} alt="github-logo"></img>
                  </a>
                </div>
              </div>
            </span>
            <span className="contact-box">
              <h2>Send me a message!</h2>
              <br />
              <form className="contact-form" method="get">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g., John"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"></textarea>
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
