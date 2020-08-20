import React, { Component } from "react";
import { api } from "../services/api";

//This is where all the received messages will live

class Message extends Component {
  //sends message id to App.js deleteMessage
  handleDeleteMessage = (e) => {
    api.messages
      .deleteMessage(this.props.messageData.id)
      .then((data) => this.props.removeMessage(this.props.messageData.id));
  };

  render() {
    const { content } = this.props.messageData;

    return (
      <div className="card">
        <div className="card-body">
          <p>{content}</p>
          <button
            className="btn btn-outline-danger"
            onClick={this.handleDeleteMessage}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Message;
