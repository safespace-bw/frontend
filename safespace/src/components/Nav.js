import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
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
              <i class="far fa-user" /> Sign Up{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <span className="glyphicon glyphicon-log-in" /> Login{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
