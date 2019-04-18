import React from "react";
import styled from "styled-components";

const MessageBox = styled.div`

  background-image: url("../public/safespace.png")
  display: flex;
  width: 25rem;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-radius: 8px;
  margin: 20px auto;
  color: white;
  .top-box {
    display: flex;
    flex-direction: column;
    .text-box {
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 1.7rem;
      padding: 0;
    }
    .far {
      color: rgba(135, 191, 255);
    }
  }
`;

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: this.props.message.body,
      editing: false
    };
  }

  input = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateMessage = e => {
    console.log("message id:", this.props.message.id);
    e.preventDefault();
    this.props.updateMessage(this.props.message.id, {
      body: this.state.newText
    });
    this.setState({
      ...this.state,
      editing: false
    });
  };

  render() {
    return (
      <MessageBox>
        <div className="top-box">
          <div className="text-box">
            {!this.state.editing ? (
              <p>
                {this.props.message.body}{" "}
                <i
                  className="far fa-edit"
                  onClick={() => this.setState({ editing: true })}
                />{" "}
                <i
                  className="far fa-trash-alt"
                  onClick={e =>
                    this.props.deleteMessage(e, this.props.message.id)
                  }
                />
              </p>
            ) : (
              <div>
                <input
                  className="title-input"
                  type="text"
                  name="newText"
                  value={this.state.newText}
                  onChange={this.input}
                />
                <button onClick={this.updateMessage}>Update message</button>
              </div>
            )}
          </div>
        </div>
      </MessageBox>
    );
  }
}

export default Messages;
