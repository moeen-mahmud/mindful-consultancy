import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
          <button className="btn btn-header">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
