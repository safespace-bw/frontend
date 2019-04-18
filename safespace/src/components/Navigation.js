import React from "react";
import { NavLink } from "react-router-dom";

import "../css/nav.css";

const Navigation = props => {
  const logChange =
    props.loggedIn === false ? (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink to="/signup">
            <i className="fas fa-user-alt" /> Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <i className="fas fa-sign-in-alt" /> Login
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
            <NavLink to="/messagelist">My Messages</NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to="/login" onClick={props.logOut}>
              <i className="fas fa-sign-out-alt" /> Logout
            </NavLink>
          </li>
        </ul>
      </>
    );

  console.log("loggedIn:", props.loggedIn);
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="https://safespace.netlify.com/">
            <img
              src="https://static.thenounproject.com/png/358468-200.png"
              width="70px"
              height="50px"
              alt=""
            />{" "}
            Safe Space{" "}
          </a>
        </div>
        {logChange}
      </div>
    </nav>
  );
};

export default Navigation;
