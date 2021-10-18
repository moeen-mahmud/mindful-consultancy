import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  const history = useHistory();
  const handleHeaderBtn = () => {
    history.push("/login");
  };

  return (
    <div className="header">
      <nav>
        <div className="nav-brand">
          <NavLink to="/">
            <span className="hl-text">Mindful</span> Consultancy
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/specialists">Specialists</NavLink>
          <NavLink to="/self-test">Self Test</NavLink>
          {user.email ? (
            <>
              <NavLink to="/">{user.displayName}</NavLink>
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
