// Importing necessary files
import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

// Main Header Component
const Header = () => {
  //Getting data from useAuth hook
  const { user, logOut } = useAuth();

  //Setup redirecting
  const history = useHistory();
  const handleHeaderBtn = () => {
    history.push("/login");
  };

  return (
    <div className="header">
      <nav>
        <div className="nav-brand">
          <NavLink to="/">
            <span className="hl-text">Mindful </span>Consultancy
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/specialists">Specialists</NavLink>
          <NavLink to="/self-test">Tests</NavLink>
          {user.email ? (
            <>
              <Link to="/user">{user.displayName}</Link>
              <button onClick={logOut} className="btn btn-header">
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleHeaderBtn} className="btn btn-header">
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
