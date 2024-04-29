import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import TestimonialImg1 from "../images/andrew.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-body">
        <h1>Testimonials</h1>
        <div className="testimonial-container">
          <TestimonialCard
            name="John Doe"
            jobTitle="CEO"
            company="Google"
            image="https://via.placeholder.com/150"
            text="Colby is a great developer."
          />
          <TestimonialCard
            name="Andrew Shu"
            jobTitle="Director of Engineering"
            company="Permiso Security"
            image={TestimonialImg1}
            text="I worked with Colby on a number of full stack projects he shipped when he interned at Permiso Security. I appreciated Colby's drive in learning about and deploying code to integrate into complex production systems. He navigated our tooling and our backend, frontend systems in the cloud while building out modules in the Permiso product. "
          />
          <TestimonialCard
            name="John Smith"
            jobTitle="CEO"
            company="Amazon"
            image="https://via.placeholder.com/150"
            text="Colby is a great developer."
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
