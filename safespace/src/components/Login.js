import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/loginAction";
import { Link } from "react-router-dom";

import "../css/login.css";

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

  login = e => {
    console.log("this props", this.props);
    console.log("this state", this.state);
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.loggedIn === true
        ? this.props.history.push("/messagelist")
        : this.props.history.push("/login");
    });
  };
  render() {
    return (
      <div className="signup-bg">
        <div className="signup-container">
          <div className="d-flex justify-content-center h-100">
            <div className="signup-card">
              <div className="signup-card-header">
                <h2>{this.props.displayText}</h2>
              </div>
              <div className="signup-card-body">
                <form onSubmit={this.login}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                      placeholder="Username"
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
                      type="password"
                      name="password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Log In"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
                <div className="col-md-12">
                  <p>
                    Not registered?<Link to="/signup"> Create an account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn,
    error: state.error,
    displayText: state.login.displayText,
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
