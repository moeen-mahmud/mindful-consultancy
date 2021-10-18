import React from "react";
import useSpecialists from "../../../hooks/useSpecialists";
import Specialist from "../Specialist/Specialist";
import "./Specialists.css";

const Specialists = () => {
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
