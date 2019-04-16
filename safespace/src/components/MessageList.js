import React from "react";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import {
  fetchMessages,
  addMessage,
  updateMessage,
  deleteMessage
} from "../actions/messageListAction";
import { connect } from "react-redux";

class MessageList extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.props.fetchMessages(this.props.id);
  }

  addMessage = message => {
    console.log(this.props);
    this.props.addMessage(this.props.id, message);
  };

  // updateMessage = () => {
  //   this.props.updateMessage();
  // };

  // deleteMessage = () => {
  //   this.props.deleteMessage();
  // };

  render() {
    console.log(this.props.messages);
    return (
      <>
        <MessageForm addMessage={this.addMessage} />
        <div>
          {this.props.messages.map((message, id) => {
            return (
              <Messages
                message={message}
                deleteMessage={this.deleteMessage}
                updateMessage={this.updateMessage}
                key={id}
              />
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    fetchingMessages: state.list.fetchingMessages,
    addingMessage: state.list.addingMessage,
    messages: state.list.messages,
    error: state.list.error,
    id: state.login.id,
    token: state.login.token
  };
};

export default connect(
  mapStateToPops,
  { fetchMessages, addMessage }
)(MessageList);
