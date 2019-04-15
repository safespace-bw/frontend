//Create a <PrivateRoute /> component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Requirements:
// 1. Has to have the same API as <Route />
// 2. Has to render a <Route /> and pass all the props through to it.
// 3. It has to check for a token, if user is authed, then render the
// component (with the render prop), otherwise redirect the user to /login
const PrivateRoute = ({ component: Component, error, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token") && !error) {
          return <Component {...props} />;
        } else {
          // redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
