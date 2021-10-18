import React, { useContext } from "react";
import { ServiceContext } from "../../../../context/ContextProvider";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useContext(ServiceContext);

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
