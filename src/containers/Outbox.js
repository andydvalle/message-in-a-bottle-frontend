import React, { Component } from "react";
import Message from "../components/Message";

//container that holds MessageForm and Messages

class Outbox extends Component {
  renderMessages = () => {
    const userOutbox = this.props.messages.filter(message => {
      return message.sender_user_id === this.props.currentUser.id
    })
    return this.props.messages.map((message) => {
      return (
        <Message
          key={message.id}
          messageData={message}
          removeMessage={this.props.removeMessage}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Sent Messages</h3>
        <h5>Your bottles that floated away...</h5>

        {this.renderMessages()}
      </div>
    );
  }
}

export default Outbox;
