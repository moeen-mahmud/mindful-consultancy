import React, { createContext } from "react";

// Importing necessary hooks
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

// Creating Context
export const ServiceContext = createContext();
export const AuthContext = createContext();

// Context Provider
const ContextProvider = ({ children }) => {
  //Context for showing service data
  const allServiceContext = useServices();

  //Context for user authentication
  const allAuthContext = useFirebase();
  return (
    <AuthContext.Provider value={allAuthContext}>
      <ServiceContext.Provider value={allServiceContext}>
        {children}
      </ServiceContext.Provider>
    </AuthContext.Provider>
  );
};

export default ContextProvider;
