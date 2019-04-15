import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions";

class Signup extends Component {
  state = {
    name: "",
    username: "",
    password: ""
  };

  input = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signup(this.state);
  };

  render() {
    return (
      <div>
        <h2>{this.props.displayText}</h2>
        <form onSubmit={this.signup}>
          <p>Name</p>
          <input
            onChange={this.input}
            placeholder="Name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <p>UserName</p>
          <input
            onChange={this.input}
            placeholder="Username"
            value={this.state.username}
            name="username"
            type="text"
          />
          <p>Password</p>
          <input
            onChange={this.input}
            placeholder="Password"
            value={this.state.password}
            name="password"
            type="password"
          />
          <button className="signup-button" type="submit">
            sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.signup.isLoading,
    displayText: state.signup.displayText,
    error: state.signup.error
  };
};

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
