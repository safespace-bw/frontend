import React from "react";
import { addMessage } from "../actions/messageListAction";
import "../css/messageForm.css";
import { connect } from "react-redux";

class MessageForm extends React.Component {
  state = {
    text: ""
  };

  input = e => {
    this.setState({ text: e.target.value });
  };

  addMessage = e => {
    e.preventDefault();
    console.log("checking text", this.state.text);
    console.log({ body: this.state.text, user_id: this.props.id });
    this.props.addMessage({ body: this.state.text, user_id: this.props.id });
    this.setState({
      ...this.state,
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addMessage}>
        <div className="messageForm">
          <div className="messageForm-group">
            <label htmlFor="exampleFormControlTextarea1">
              Create a Positive Message
            </label>
            <textarea
              onChange={this.input}
              value={this.state.text}
              placeholder="send a message to yourself!"
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
