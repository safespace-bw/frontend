import React from "react";
import Messages from "./Messages";

class MessageList extends React.Component {
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

export default MessageList;
