// Importing necessary hooks
import { useEffect, useState } from "react";

//The useSpecialists hook for loading each specialist
const useSpecialists = () => {
  const [specialists, setSpecialists] = useState([]);

  //Fetching specialist data
  useEffect(() => {
    fetch(`./specialistData.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSpecialists(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [specialists];
};

export default useSpecialists;
