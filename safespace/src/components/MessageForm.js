import React from "react";
import { addMessage } from "../actions/messageListAction";
import "../css/messageForm.css";
import { connect } from "react-redux";

class MessageForm extends React.Component {
  state = {
    text: ""
  };

  input = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addMessage = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addMessage({ text: this.state.text });
    this.setState({
      ...this.state,
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addMessage}>
        <div className="messageForm-group">
          <label htmlFor="exampleFormControlTextarea1">
            Create a Positive Message
          </label>
          <textarea
            placeholder="think happy thoughts!!!"
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
      </form>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToPops,
  { addMessage }
)(MessageForm);
