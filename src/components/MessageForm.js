import React, { Component } from "react";
import { api } from "../services/api";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user_count: "",
    };
  }

  //sets state to current values of form inputs
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  findReceiver = () => {
    let random = Math.floor(Math.random() * this.state.user_count + 1);
    if (random === this.props.currentUser.id) {
      return random++;
    }
    return random;
  };

  setSenderAndReceiver = () => {
    this.setState({
      sender_user_id: this.props.currentUser.id,
      receiver_user_id: this.findReceiver(),
    });
  };

  //sends data to App.js to submitMessageForm(), then sets state back to ''
  handlePostMessage = (e) => {
    e.preventDefault();
    api.messages
      .postMessage({
        content: this.state.content,
        sender_user_id: this.props.currentUser.id,
        receiver_user_id: this.findReceiver(),
      })
      .then((data) => this.props.addMessage(data));
    this.setState({
      content: "",
    });
  };

  getUserCount = () => {
    return api.users.getAllUsers().then((users) =>
      this.setState({
        user_count: users.length,
      })
    );
  };

  componentDidMount() {
    this.getUserCount();
  }

  render() {
    return (
      <div className="container m-3">
        <div className="card">
          <form className="card-body" onSubmit={this.handlePostMessage}>
            <h5 className="card-title">Create a message in a bottle</h5>
            <label>What would you like to share?</label>
            <textarea
              type="text"
              name="content"
              className="form-control"
              placeholder="Example: I've always wanted to learn how to fly..."
              value={this.state.content}
              onChange={this.handleChange}
            />
            <small id="messageHelp" className="form-text text-muted">
              Your message will be sent anonymously to another writer, just like
              you.
            </small>

            <input
              type="hidden"
              name="sender_user_id"
              className="form-control"
              placeholder="this should be hidden"
              defaultValue={this.props.currentUser.id}
              onChange={this.handleChange}
            />
            <button className="btn btn-primary mt-3" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageForm;
