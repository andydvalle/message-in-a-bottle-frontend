import React, { Component } from "react";
import AuthHOC from "../HOCs/AuthHOC";
import { Route, Switch } from "react-router-dom";
import Mailbox from "./Mailbox";
import Journal from "../containers/Journal.js";
import { api } from "../services/api";

//container that holds inbox and journal

class Dashboard extends Component {
  state = {
    journals: [],
  };

  componentDidMount() {
    api.journals.fetchJournals();
  }

  render() {
    return (
        <div className="Dashboard">
          Hi from Dashboard
          <Switch>
            <Route
              path="/mailbox"
              render={(props) => <Mailbox {...props} />}
            />
            <Route
              path="/journal"
              render={(props) => <Journal {...props} journals={this.state.journals} />
              }
            />
          </Switch>
        </div>
    );
  }
}

export default AuthHOC(Dashboard);
