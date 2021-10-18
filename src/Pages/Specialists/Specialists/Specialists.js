// Imporiting necessary files
import React from "react";
import useSpecialists from "../../../hooks/useSpecialists";
import Specialist from "../Specialist/Specialist";
import "./Specialists.css";

// Main specialists component
const Specialists = () => {
  //Getting all specialist data from useSpecialists hook
  const [specialists] = useSpecialists();
  return (
    <div className="specialists">
      <h1>Meet Our Specialists</h1>
      {specialists.map((specialist) => (
        <Specialist key={specialist.id} specialist={specialist}></Specialist>
      ))}
    </div>
  );
};

export default Specialists;
