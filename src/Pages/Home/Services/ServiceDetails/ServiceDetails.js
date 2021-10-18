import React, { useContext } from "react";
import { useParams } from "react-router";
import { ServiceContext } from "../../../../context/ContextProvider";
import SingleService from "../SingleService/SingleService";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const [services] = useContext(ServiceContext);

  const filterService = services.filter(
    (service) => service.serviceName === serviceName
  );

  return (
    <div className="serviceDetails">
      {filterService.map((serv) => (
        <SingleService key={serv.id} serv={serv}></SingleService>
      ))}
    </div>
  );
};

export default ServiceDetails;
