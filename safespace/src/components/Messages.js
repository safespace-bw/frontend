import React from "react";

const Messages = props => {
  return (
    <div key={props.message.id}>
      <h2>Name: {props.message.name}</h2>
      <h3>Age: {props.message.age}</h3>
      <h3>E-mail: {props.message.email}</h3>
    </div>
  );
};

export default Messages;
