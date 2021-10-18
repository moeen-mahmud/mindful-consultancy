import React from "react";

const SingleService = (props) => {
  const { serviceName, serviceLongDesc, serviceImage, specialistName, price } =
    props.serv;
  return (
    <div>
      <h1>{serviceName}</h1>
    </div>
  );
};

export default SingleService;
