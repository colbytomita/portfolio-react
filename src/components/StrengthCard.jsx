import React from "react";
import "./StrengthCard.css";

const StrengthCard = (props) => {
  return (
    <div className="strength-card">
      <h2>{props.title}</h2>
      <img className="strength-image" src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
};

export default StrengthCard;
