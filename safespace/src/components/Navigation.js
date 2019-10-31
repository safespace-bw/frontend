import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import NavLogo from "../images/safespacelogo1.png";

import "../css/nav.scss";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logChange =
    props.loggedIn === false ? (
      <>
        <div className="filler"></div>
        <Navbar className="navbar" light expand="md" fixed={"top"}>
          <NavbarBrand href="/">
            <img
              src={NavLogo}
              width="50"
              height="50"
              // className="d-inline-block align-top"
              alt=""
              className="nav-logo-bubble"
            />
            <div className="nav-title-wrapper">
              <div className="nav-title">Safespace</div>
              <div className="nav-undertitle">
                the safe way to increase positivity
              </div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://safespace-frontend.netlify.com/">
                  Sign in
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://safespace-frontend.netlify.com/">
                  <Button className="signup-btn" color="primary">
                    Sign up
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    ) : (
      <>
        <div className="filler"></div>
        <Navbar className="navbar" light expand="md" fixed={"top"}>
          <NavbarBrand href="/">
            <img
              src={NavLogo}
              width="50"
              height="50"
              // className="d-inline-block align-top"
              alt=""
              className="nav-logo-bubble"
            />
            <div className="nav-title-wrapper">
              <div className="nav-title">Safespace</div>
              <div className="nav-undertitle">
                the safe way to increase positivity
              </div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/messagelist">
                  My Messages <i className="fas fa-sms fa-lg" />
                </NavLink>
              </NavItem>
              <NavItem>
                <Button className="signup-btn" color="primary">
                  Log out
                  <NavLink exact to="/" onClick={props.logOut}></NavLink>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );

  return <div>{logChange}</div>;
};

export default Navigation;
