import React from "react";
import { addMessage } from "../actions/messageListAction";
import "../css/messageForm.css";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";
import { connect } from "react-redux";
import axios from "axios";

class MessageForm extends React.Component {
  state = {
    message: {
      to: "",
      body: ""
    }
  };

  input = event => {
    const name = event.target.getAttribute("name");
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  };

  handleOnChange = value => {
    console.log(value);
    this.setState({ to: value }, () => {
      console.log(this.state.to);
    });
  };

  addMessage = event => {
    event.preventDefault();
    // this.setState({ submitting: true });
    this.props.addMessage({
      body: this.state.message.body,
      user_id: this.props.id
    });
    this.setState({
      ...this.state,
      message: {
        to: "",
        body: ""
      }
    });
    axios({
      method: "POST",
      url: "http://localhost:5000/api/twilio/msg",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      data: {
        to: this.state.to,
        body: this.state.message.body
      }
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.addMessage}>
          <div className="messageForm">
            <div className="messageForm-group">
              <label htmlFor="exampleFormControlTextarea1">
                Create a Positive Message
              </label>

              <ReactPhoneInput
                defaultCountry={"us"}
                value={this.state.to}
                onChange={this.handleOnChange}
                inputExtraProps={{
                  name: "to",
                  required: true,
                  autoFocus: true
                }}
                className="form-control"
              />

              <textarea
                name="body"
                onChange={this.input}
                value={this.state.message.body}
                // placeholder="send a message to yourself!"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />

              <div className="buttonForm-group">
                <input
                  type="submit"
                  value="Add Message"
                  className="btn-lg btn-block"
                />
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    text: state.text,
    id: state.login.id
  };
};

export default connect(
  mapStateToProps,
  { addMessage }
)(MessageForm);
