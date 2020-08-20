import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import Dashboard from "./containers/Dashboard.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { api } from "./services/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {},
      },
    };
  }

  // used in submitting login Form, sets App state and token for user
  onLogin = (data) => {
    const updatedState = {
      ...this.state.auth,
      user: { id: data.id, name: data.name },
    };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  };

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  componentDidMount() {
    // gets token
    const token = localStorage.getItem("token");

    // if token exists calls getCurrentUser and sets auth state)
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar
          currentUser={this.state.auth.user}
          handleLogout={this.onLogout}
        />
        {/* <Switch> */}
        <Route
          exact
          path="/"
          render={(props) => <Login {...props} onLogin={this.onLogin} />}
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup {...props} onLogin={this.onLogin} />}
        />
        <Route
          path="/dashboard"
          render={(props) => (
            <Dashboard {...props} currentUser={this.state.auth.user} />
          )}
        />
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
