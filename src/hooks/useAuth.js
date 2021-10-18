// Importing necessary components
import { useContext } from "react";

// Importing auth context
import { AuthContext } from "../context/ContextProvider";

// The useAuth hook
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
