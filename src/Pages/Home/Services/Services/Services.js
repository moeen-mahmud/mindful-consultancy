import React from "react";
import useServices from "../../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();

  console.log(services.map((service) => service));
  return (
    <div className="services">
      <h1>Choose your desired service</h1>
      <p>
        Discover the world of psychological counselling.
        <br />
        Find out how online counselling can help you with your topic.
      </p>
      <div className="all-services">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
