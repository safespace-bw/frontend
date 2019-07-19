import React from "react";
import "../css/messages.css";
import smiley from "../images/smiley.png"

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
      <div className="message-box">
        <div className="top-box">
          <div className="text-box">
            {!this.state.editing ? (
              <div className="text-container">
                <div>
                  <img className="me-Img" src={smiley} alt="smiley"/>
                </div>{" "}
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
              </div>
            ) : (
              <div>
                <input
                  className="text-input"
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
      </div>
    );
  }
}

export default Messages;
