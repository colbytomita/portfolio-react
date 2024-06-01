import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <head>
        <title>Colby Tomita's Portfolio</title>
      </head>
      <div className="app-body">
        <Navbar />
        <section id="home">
          <div className="spacer" id="space-1"></div>
          <HeroSection />
        </section>
        <section id="about-me">
          <div className="spacer" id="space-2"></div>
          <About />
        </section>
        <section id="projects">
          <div className="spacer" id="space-3"></div>
          <Projects />
        </section>
        <section id="strengths">
          <div className="spacer" id="space-4"></div>
          <Strengths />
        </section>
        <section id="resume">
          <div className="spacer" id="space-5"></div>
          <Resume />
        </section>
        {/* <section id="testimonials">
          <div className="spacer" id="space-6"></div>
          <Testimonials />
        </section> */}
        <section id="contact-me">
          <div className="spacer" id="space-7"></div>
          <Contact />
        </section>
        <div className="footer">
          <p>© 2024 Colby Tomita</p>
        </div>
      </div>
    </>
  );
};

export default App;
