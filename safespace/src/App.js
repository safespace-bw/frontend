import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MessageList from "./components/MessageList";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute
            exact
            path="/messagelist"
            component={() => <MessageList messages={this.props.messages} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
