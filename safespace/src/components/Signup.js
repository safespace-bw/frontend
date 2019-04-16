import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/signupAction";

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
            <div class="card-body">
              <form onSubmit={this.signup}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <p>UserName</p>
                    <span class="input-group-text">
                      <i class="fas fa-user" />
                    </span>
                  </div>
                  <input
                    class="form-control"
                    onChange={this.input}
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                    type="text"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key" />
                    </span>
                  </div>
                  <input
                    class="form-control"
                    onChange={this.input}
                    placeholder="Password"
                    value={this.state.password}
                    name="password"
                    type="password"
                  />
                </div>

                <button className="btn float-right login_btn" type="submit">
                  sign up
                </button>
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
