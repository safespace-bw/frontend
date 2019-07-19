import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MessageList from "./components/MessageList";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.setState({
      ...this.state
    });
  }

  logOut = () => {
    console.log("logout");
    this.setState({
      ...this.state,
      token: null
    });
    localStorage.clear();
    window.location.assign("/");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation loggedIn={this.props.loggedIn} logOut={this.logOut} />

          <Route exact path="/" component={Signup} />
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
    messages: state.messages,
    loggedIn: state.login.loggedIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
