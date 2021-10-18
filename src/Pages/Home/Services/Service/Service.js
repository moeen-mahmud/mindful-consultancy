import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
  const { serviceName, serviceImage, serviceShortDesc } = props.service;
  const history = useHistory();

  const handleDetailsBtn = () => {
    history.push(`/${serviceName}`);
  };

  return (
    <div className="service">
      <figure className="service-card">
        <img className="service-img" src={serviceImage} alt={serviceName} />
        <figcaption className="service-content">
          <h2>{serviceName}</h2>
          <p>{serviceShortDesc}</p>
        </figcaption>
        <section className="btn-container">
          <button onClick={handleDetailsBtn} className="btn btn-service">
            View Details
          </button>
        </section>
      </figure>
    </div>
  );
};

export default Service;
