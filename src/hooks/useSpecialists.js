import { useEffect, useState } from "react";

const useSpecialists = () => {
  const [specialists, setSpecialists] = useState([]);

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
