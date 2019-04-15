import React from "react";
import Messages from "./Messages";
import { fetchMessages, addMessage } from "../actions/messageListAction";
import { connect } from "react-redux";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  addMsg = () => {
    this.props.addMsg();
  };

  render() {
    return (
      <div>
        {this.props.messages.map((message, id) => {
          return <Messages message={message} key={id} />;
        })}
      </div>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToPops,
  { fetchMessages, addMessage }
)(MessageList);
