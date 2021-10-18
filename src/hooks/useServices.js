// Importing necessary hooks
import { useEffect, useState } from "react";

// The useService hook
const useServices = () => {
  const [services, setServices] = useState([]);

  //Fetching service data
  useEffect(() => {
    fetch(`/serviceData.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [services];
};

export default useServices;
