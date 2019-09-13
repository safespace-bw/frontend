import React from "react";
import { NavLink } from "react-router-dom";

import "../css/nav.css";

const Navigation = props => {
  const logChange =
    props.loggedIn === false ? (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink to="/signup">
            <i className="fas fa-user-alt fa-lg" /> Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <i className="fas fa-sign-in-alt fa-lg" /> Login
          </NavLink>
        </li>
      </ul>
    ) : (
      <>
        <ul className="nav navbar-nav">
          {/* <li>
            <a href="#">My Profile</a>
          </li> */}
          <li>
            <NavLink to="/messagelist">
              My Messages <i className="fas fa-sms fa-lg" />
            </NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink exact to="/" onClick={props.logOut}>
              <i className="fas fa-sign-out-alt" /> Logout
            </NavLink>
          </li>
        </ul>
      </>
    );

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <a className="nav-logo" href="https://safespace.netlify.com/">
          <div className="navbar-header">
            <div className="navbar-brand">
              <img
                src="https://assets.dryicons.com/uploads/icon/svg/6593/633d41cf-0dcd-4316-8beb-ffc1b3adc070.svg"
                width="30px"
                height="40px"
                alt="logo"
              />

              <h2 className="navbar-text">Safe Space </h2>
              <div className="navbar-register" style={{ fontSize: "10px" }}>
                <i className="far fa-registered fa-xs" />
              </div>
            </div>
          </div>
        </a>
        {logChange}
      </div>
    </nav>
  );
};

export default Navigation;
