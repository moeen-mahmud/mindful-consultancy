import React, { createContext } from "react";
import useServices from "../hooks/useServices";

export const ServiceContext = createContext();
const ContextProvider = ({ children }) => {
  const allServiceContext = useServices();
  return (
    <ServiceContext.Provider value={allServiceContext}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ContextProvider;
