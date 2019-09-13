import React from "react";
import { addMessage } from "../actions/messageListAction";
import "../css/messageForm.css";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";
import { connect } from "react-redux";
import axios from "axios";
import { Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import phoneText from "../images/phonetext1.png";

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
      <Card>
        <div className="top-div"></div>
        <h1 style={{ color: "white", textAlign: "center" }}>Messenger</h1>
        <h6 className="card-title" style={{ color: "black" }}>
          Send a positive text!
        </h6>
        <img src={phoneText} className="phonetext-img"></img>
        <div className="messageForm">
          <div className="messageForm-container">
            <form onSubmit={this.addMessage}>
              <div className="messageForm-group">
                <ReactPhoneInput
                  defaultCountry={"us"}
                  value={this.state.to}
                  onChange={this.handleOnChange}
                  inputStyle={{ borderRadius: "15px" }}
                  inputExtraProps={{
                    name: "to",
                    required: true,
                    autoFocus: true
                  }}
                  className="form-control"
                  id="phoneinput"
                  placeholder="Enter phone number"
                />

                <textarea
                  name="body"
                  onChange={this.input}
                  value={this.state.message.body}
                  placeholder="Your Message *"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  id="textinput"
                />

                <div className="buttonForm-group">
                  <Button
                    type="submit"
                    // size="large"

                    variant="contained"
                    style={{
                      // color: "white",
                      backgroundColor: "rgb(129,210,199)",
                      width: "200px",
                      height: "40px",
                      borderRadius: "20px"
                    }}
                  >
                    Send Message
                    <SendIcon style={{ marginLeft: "5px" }}></SendIcon>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Card>
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
