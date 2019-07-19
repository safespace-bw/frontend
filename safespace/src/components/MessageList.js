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
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../css/messageList.css";

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
    this.props.addMessage(message);
  };

  updateMessage = (id, message) => {
    console.log(id);
    this.props.updateMessage(id, message);
  };

  deleteMessage = (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log(this.props);
    console.log(this.props.id);
    this.props.deleteMessage(id);
  };

  render() {
    console.log("this.props.messages:", this.props.messages);

    const messageList = this.props.messages.map((message, id) => (
      <Messages
        message={message}
        updateMessage={this.updateMessage}
        deleteMessage={this.deleteMessage}
        key={id}
      />
    ));

    return (
      <html className="home-bg">
        
          <div className="messageList-container">
            <MessageForm addMessage={this.addMessage} />
            <div className="messages-container">
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                {messageList}
              </ReactCSSTransitionGroup>
            </div>
          
        </div>
      </html>
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
