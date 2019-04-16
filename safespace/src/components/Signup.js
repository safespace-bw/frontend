import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/signupAction";
import "./signup.css";

class Signup extends Component {
  state = {
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
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h2>{this.props.displayText}</h2>
            </div>
            <div className="card-body">
              <form onSubmit={this.signup}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    className="form-control"
                    onChange={this.input}
                    placeholder="Create Username"
                    value={this.state.username}
                    name="username"
                    type="text"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    className="form-control"
                    onChange={this.input}
                    placeholder="Create Password"
                    value={this.state.password}
                    name="password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
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
