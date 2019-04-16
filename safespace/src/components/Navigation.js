import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="https://safespace.netlify.com/">
            Safe Space
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#">My Profile</a>
          </li>
          <li>
            <NavLink to="/messagelist">My Messages</NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to="/signup">
              <i className="fas fa-user" /> Sign Up{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <i className="fas fa-sign-in-alt" /> Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
