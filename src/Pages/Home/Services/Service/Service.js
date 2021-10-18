import React from "react";
import "./Service.css";

const Service = (props) => {
  const { id, serviceName, serviceImage, serviceShortDesc } = props.service;

  return (
    <div className="service">
      <figure className="service-card">
        <img className="service-img" src={serviceImage} alt={serviceName} />
        <figcaption className="service-content">
          <h2>{serviceName}</h2>
          <p>{serviceShortDesc}</p>
        </figcaption>
        <section className="btn-container">
          <button className="btn btn-service">View Details</button>
        </section>
      </figure>
    </div>
  );
};

export default Service;
