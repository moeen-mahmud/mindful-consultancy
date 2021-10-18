// Importing necessary files
import React, { useContext } from "react";
import Rating from "react-rating";
import { ServiceContext } from "../../../context/ContextProvider";
import "./Specialist.css";

// Main Specialist component
const Specialist = (props) => {
  //Getting data from props
  const {
    specialistName,
    specialistImage,
    specialistAbout,
    specialistRating,
    reviewCount,
  } = props.specialist;

  //Getting service data (again!) from service context
  const [services] = useContext(ServiceContext);

  //Filtering out correspondence services
  const filterService = services.filter(
    (service) => service.specialistName === specialistName
  );

  return (
    <div className="specialist">
      <img src={specialistImage} alt={specialistName} />
      <div className="specialist-content">
        <h1>{specialistName}</h1>
        <p>{specialistAbout}</p>
        <div className="service-list">
          <div>
            <Rating
              emptySymbol="far fa-star ratings"
              fullSymbol="fas fa-star ratings"
              initialRating={specialistRating}
              readonly
            ></Rating>
            <p>
              Rated: {reviewCount}{" "}
              <span>
                <i className="fas fa-user"></i>
              </span>
            </p>
            <h2 className="specialist-service-list">My Services</h2>
            <div className="service-list">
              {filterService.map((service) => (
                <span key={service.id}>{service.serviceName}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
