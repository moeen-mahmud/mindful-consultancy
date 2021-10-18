import React from "react";
import aboutImage from "../../../assets/about-img.jpg";
import "./Importance.css";

const Importance = () => {
  return (
    <div className="importance">
      <h1>Why is mental health important?</h1>
      <div className="about-content">
        <img src={aboutImage} alt="Importance" />
        <p>
          Over 117 million people across Europe suffer from mental health
          issues. Mental health is one of the most valuable resources for our
          daily well-being, quality of life and performance. Professional help,
          such as psychological counselling or therapy, can support you in this
          process.
        </p>
      </div>
    </div>
  );
};

export default Importance;
