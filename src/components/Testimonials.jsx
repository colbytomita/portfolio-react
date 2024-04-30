import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import TestimonialImg1 from "../images/andrew.webp";
import TestimonialImg2 from "../images/charan.webp";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-body">
        <h1>Testimonials</h1>
        <div className="testimonial-container">
          {/* <TestimonialCard
            name="John Doe"
            jobTitle="CEO"
            company="Google"
            image="https://via.placeholder.com/150"
            text="Colby is a great developer."
          /> */}
          <TestimonialCard
            name="Andrew Shu"
            jobTitle="Director of Engineering"
            company="Permiso Security"
            image={TestimonialImg1}
            text="I worked with Colby on a number of full stack projects he shipped when he interned at Permiso Security. I appreciated Colby's drive in learning about and deploying code to integrate into complex production systems. He navigated our tooling and our backend, frontend systems in the cloud while building out modules in the Permiso product. "
          />
          <TestimonialCard
            name="Charan Theja Sunkara"
            jobTitle="Senior Manager of Engineering"
            company="Permiso Security"
            image={TestimonialImg2}
            text="Colby is a very talented and hardworking individual who is very passionate about his work and is always eager to learn new things. I appreciated how he was a great team player and was always willing to help others. He is a great asset to any team and I highly recommend him."
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
