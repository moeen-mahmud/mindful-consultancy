// Importing necessary files
import React from "react";
import { useHistory } from "react-router";
import "./SingleService.css";

// Main Single Service Component
const SingleService = (props) => {
  //Getting data from props
  const { serviceName, serviceLongDesc, serviceImage, specialistName, price } =
    props.serv;

  //Function for back button
  const history = useHistory();
  const handleBackBtn = () => {
    history.push("/");
  };

  return (
    <div className="single-service">
      <section>
        <img src={serviceImage} alt={serviceName} />
      </section>
      <section>
        <h1 className="service-title">{serviceName} Related Counselling</h1>
        <p className="service-desc">{serviceLongDesc}</p>
        <p className="service-specialist">Specialist: {specialistName}</p>
        <p className="service-value">Value: ${price}</p>
        <button onClick={handleBackBtn} className="btn btn-header">
          Back to services
        </button>
      </section>
    </div>
  );
};

export default SingleService;
