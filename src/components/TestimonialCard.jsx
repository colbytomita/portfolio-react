import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial-author">
          <h3>{props.name}</h3>
          <p>{props.jobTitle}</p>
          <p>{props.company}</p>
        </div>
        <br />
        <img src={props.image} alt="testimonial-author" />
        <div className="testimonial-text">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
