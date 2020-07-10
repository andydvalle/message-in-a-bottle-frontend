import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { api } from "../services/api";
import MessageForm from "../components/MessageForm";
import Inbox from "./Inbox";
import Outbox from "./Outbox";
import logo from "../message-in-a-bottle-logo.png"
// import AuthHOC from '../HOCs/AuthHOC'

class Mailbox extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    api.messages.fetchMessages().then((data) => {
      const userMessages = data.filter((message) => {
        return (
          message.receiver_user_id == this.props.currentUser.id ||
          message.sender_user_id == this.props.currentUser.id
        );
      });
      this.setState({
        messages: userMessages,
      });
    });
  }

  addMessage = (data) => {
    const newMessages = [...this.state.messages, data];
    this.setState({
      messages: newMessages,
    });
  };

  removeMessage = (messageId) => {
    const updatedMessages = this.state.messages.filter(
      (message) => message.id !== messageId
    );
    this.setState({
      messages: updatedMessages,
    });
  };

  render() {
    return (
      <div className="container">
        {/* Hi from Mailbox */}
        {window.location.pathname === "/dashboard/mailbox" ? (
          <div className="row">
            <div className="card col-sm-4">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Inbox</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink
                  to="/dashboard/mailbox/inbox"
                  className="btn btn-primary"
                >
                  View Inbox
                </NavLink>
              </div>
            </div>
            <div className="card col-sm-4">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Sent messages</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink
                  to="/dashboard/mailbox/outbox"
                  className="btn btn-primary"
                >
                  View Sent Messages
                </NavLink>
              </div>
            </div>
            <div className="card col-sm-4">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Send a message</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink
                  to="/dashboard/mailbox/message-form"
                  className="btn btn-primary"
                >
                  Create a message
                </NavLink>
              </div>
            </div>
          </div>
        ) : null}
        <Switch>
          <Route
            exact
            path="/dashboard/mailbox/inbox"
            render={(props) => (
              <Inbox
                {...props}
                removeMessage={this.removeMessage}
                messages={this.state.messages}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/mailbox/outbox"
            render={(props) => (
              <Outbox
                {...props}
                removeMessage={this.removeMessage}
                messages={this.state.messages}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
            path="/dashboard/mailbox/message-form"
            render={(props) => (
              <MessageForm
                {...props}
                addMessage={this.addMessage}
                currentUser={this.props.currentUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Mailbox;
