import React, { Component } from "react";
import { api } from "../services/api";

class MessageForm extends Component {

  constructor(props) {
    super()
    this.state = {
      content: "",
      sender_user_id: "",
      receiver_user_id: "",
      user_count: ""
    };
  }

  //sets state to current values of form inputs
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  findReceiver = () => {
    return Math.floor((Math.random() * this.state.user_count) + 1) 
  }

  setSenderAndReceiver = () => {
    this.setState({
      sender_user_id: this.props.currentUser.id,
      receiver_user_id: this.findReceiver()
    })
  }

  //sends data to App.js to submitMessageForm(), then sets state back to ''
  handlePostMessage = (e) => {
    e.preventDefault();
    api.messages.postMessage({
      content: this.state.content,
      sender_user_id: this.state.sender_user_id,
      receiver_user_id: this.state.receiver_user_id
    })
    .then((data) => this.props.addMessage(data));
    this.setState({
      content: "",
      sender_user_id: "",
      receiver_user_id: ""
    });
  };

  getUserCount = () => {
    return api.users.getAllUsers()
    .then(users => this.setState({
      user_count: users.length
    }))
  }

  componentDidMount() {
    this.getUserCount()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.updateFormData !== this.state) {
      this.setSenderAndReceiver()
    }
  }

  render() {
    return (
      <div className="container m-3">
        <div className="card">
          <form className="card-body" onSubmit={this.handlePostMessage}>
            <h5 className="card-title">Send a message in a bottle</h5>
            <label>Your message:</label>
            <textarea
              type="text"
              name="content"
              class="form-control"
              placeholder="What would you like to say?"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <small id="messageHelp" class="form-text text-muted">
              Your message will be sent anonymously to another writer, just like
              you.
            </small>

            {/* <label>sender_user_id</label>
            <input
              type="text"
              name="sender_user_id"
              class="form-control"
              placeholder="this should be hidden"
              value={this.state.sender_user_id}
              onChange={this.handleChange}
            /> */}
            {/* <label>receiver_user_id</label>
            <input
              type="text"
              name="receiver_user_id"
              class="form-control"
              placeholder="this should be hidden"
              value={this.state.receiver_user_id}
              onChange={this.handleChange}
            /> */}
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
