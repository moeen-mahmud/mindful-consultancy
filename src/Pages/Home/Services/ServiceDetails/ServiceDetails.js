// Importing necessary files
import React, { useContext } from "react";
import { useParams } from "react-router";
import { ServiceContext } from "../../../../context/ContextProvider";
import SingleService from "../SingleService/SingleService";
import "./ServiceDetails.css";

// Main Service Details Component
const ServiceDetails = () => {
  //Getting service name from url parameter
  const { serviceName } = useParams();

  //Getting service from service context
  const [services] = useContext(ServiceContext);

  //Find each service by its name
  const filterService = services.filter(
    (service) => service.serviceName === serviceName
  );

  return (
    <div className="service-details">
      {filterService.map((serv) => (
        <SingleService key={serv.id} serv={serv}></SingleService>
      ))}
    </div>
  );
};

export default ServiceDetails;
