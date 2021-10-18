// Importing necessary files
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../utilities/Spinner/Spinner";

// Set up private route
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  //Set up a loading spinner for waiting to finish the reload
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
