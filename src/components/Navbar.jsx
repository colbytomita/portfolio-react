import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="body">
      <nav>
        <ul className="name-logo">
          <li>
            <a href="#home" className="my-name">
              Colby Tomita
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#strengths">Strengths</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
