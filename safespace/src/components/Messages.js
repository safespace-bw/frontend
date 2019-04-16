import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`
  display: flex;
  width: 25rem;
  flex-direction: column;
  padding: 1rem 0;
  background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  color: white;
  .top-box {
    display: flex;
    flex-direction: column;
    .text-box {
      width: 100%;
      padding: 1rem;
    }
    .button-box {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .msg-button {
        width: 30%;
        border: none;
        background-color: none;
      }
    }
  }
  .unhidden {
    display: flex;
    flex-direction: column;
  }
  .edit-button {
    margin-top: 0.5rem;
    width: 30%;
    border: none;
    align-self: center;
  }
`;

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: this.props.message.text,
      formClass: "hidden"
    };
  }

  input = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formToggle = e => {
    e.preventDefault();
    this.state.formClass === "hidden"
      ? this.setState({
          ...this.state,
          formClass: "unhidden"
        })
      : this.setState({
          ...this.state,
          formClass: "hidden"
        });
  };

  updateMessage = e => {
    e.preventDefault();
    this.props.updateMessage(this.props.message.id, {
      text: this.state.newText
    });
    this.setState({
      ...this.state,
      formClass: "hidden"
    });
  };

  render() {
    return (
      <MessageBox>
        <div className="top-box">
          <div className="text-box">
            <p>{this.props.message.text}</p>
          </div>
          <div className="button-box">
            <button className="msg-button" onClick={this.formToggle}>
              edit message
            </button>
            <button
              className="msg-button"
              onClick={e => this.props.deleteMessage(e, this.props.message.id)}
            >
              delete message
            </button>
          </div>
        </div>
        <form
          className={`update-form ${this.state.formClass}`}
          onSubmit={this.updateMessage}
        >
          <textarea
            onChange={this.input}
            placeholder="New Message Text"
            value={this.state.newText}
            name="newText"
            type="text"
            rows="4"
          />
          <button className="edit-button" type="submit">
            submit
          </button>
        </form>
      </MessageBox>
    );
  }
}

export default Messages;
