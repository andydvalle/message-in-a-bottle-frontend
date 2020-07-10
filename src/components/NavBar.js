import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../png/message-in-a-bottle-logo.png"

class NavBar extends Component {
  
  render() {
    const currentUser = this.props.currentUser
    const loggedIn = !!this.props.currentUser.id
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
          <Link class="navbar-brand" to="/login">
            <img src={logo}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {loggedIn ? (<div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/dashboard">
                  Dashboard <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard/journal">
                  My Journal
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/mailbox"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Messages
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/dashboard/mailbox/inbox">
                    Inbox
                  </Link>
                  <Link class="dropdown-item" to="/dashboard/mailbox/outbox">
                    Sent Messages
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/dashboard/mailbox/message-form">
                    New Message
                  </Link>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              {/* {loggedIn ? (
                <a className="item">Welcome {currentUser.username}</a>
              ) : null} */}
              {loggedIn ? (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <div onClick={() => {
                      this.props.handleLogout();
                    }}
                    className="ui primary button"
                    >
                    Log Out
                    </div>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-item">
                    <div className="nav-link">Sign In</div>
                  </Link>
                </li>
              )}
              {/* <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link class="nav-link btn btn-primary" to="/signup">
                  Start Here
                </Link>
              </li> */}
            </ul>
          </div>) : null }
        </nav>  
      </div>
    );
  }
}

export default NavBar;
