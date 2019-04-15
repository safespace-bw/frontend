import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { login, fetchMessages } from "../actions";

//build out a simple login form with username and password inputs and a submit button (design this however you would like).
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  //When the request returns, use the history object in your Login component to navigate your user to your FriendsList route
  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => {
        this.props.history.push("/");
      })
      .then(() => {
        this.props.fetchMessages();
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button>
            {" "}
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    error: state.error,
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  { login, fetchMessages }
)(Login);
