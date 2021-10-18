import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const ServiceContext = createContext();
export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const allServiceContext = useServices();
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
