import React, { Component } from "react";
import Message from "../components/Message";

//container that holds MessageForm and Messages

class Inbox extends Component {
  renderMessages = () => {
    const userInbox = this.props.messages.filter(message => {
      return message.receiver_user_id === this.props.currentUser.id
    })
    return userInbox.map((message) => {
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
        <h3>Found Messages</h3>
        <h5>Yes! New bottles.</h5>
        {this.renderMessages()}
      </div>
    );
  }
}

export default Inbox;
