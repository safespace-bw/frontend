import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/signupAction";
import { Link } from "react-router-dom";
import "../css/signup.scss";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state).then(() => {
      this.props.registered === true
        ? this.props.history.push("/messagelist")
        : this.props.history.push("/signup");
    });
  };

  render() {
    console.log("props: ", this.props);
    return (
      <div className="signup-bg">
        <div className="signup-container">
          <div className="d-flex justify-content-center h-100">
            <div className="blurred-box">
              <div className="signup-card">
                <div className="signup-card-header">
                  <h2>{this.props.displayText}</h2>
                </div>
                <div className="signup-card-body">
                  <form onSubmit={this.signup}>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                  <div className="col-md-12">
                    <p>
                      Already registered?<Link to="/login"> Login Here</Link>
                    </p>
                  </div>
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
    isLoading: state.signup.isLoading,
    displayText: state.signup.displayText,
    error: state.signup.error,
    registered: state.signup.registered
  };
};

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
