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
    this.props.fetchMessages();
  }

  addMessage = message => {
    console.log(this.props);
    console.log(this.props.id);
    this.props.addMessage(this.props.id, message);
  };

  updateMessage = (id, message) => {
    console.log(id);
    this.props.updateMessage(id, this.props.id, message);
  };

  deleteMessage = (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log(this.props);
    console.log(this.props.id);
    this.props.deleteMessage(id, this.props.id);
  };

  render() {
    console.log("this.props.messages:", this.props.messages);
    return (
      <>
        <MessageForm addMessage={this.addMessage} />
        <div>
          {this.props.messages.map((message, id) => {
            return (
              <Messages
                message={message}
                updateMessage={this.updateMessage}
                deleteMessage={this.deleteMessage}
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
    updatingMessage: state.list.updatingMessage,
    deletingMessage: state.list.deletingMessage,
    messages: state.list.messages,
    error: state.list.error,
    id: state.login.id,
    token: state.login.token
  };
};

export default connect(
  mapStateToPops,
  { fetchMessages, addMessage, updateMessage, deleteMessage }
)(MessageList);
