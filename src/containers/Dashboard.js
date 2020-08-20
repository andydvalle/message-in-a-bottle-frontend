import React, { Component } from "react";
import AuthHOC from "../HOCs/AuthHOC";
import { Route, Switch, NavLink } from "react-router-dom";
import Mailbox from "./Mailbox";
import Journal from "./Journal.js";
import { api } from "../services/api";
import journal from "../png/journal.png";
import bottles from "../png/mailbox-bottles.png";

//container that holds inbox and journal

class Dashboard extends Component {
  state = {
    journals: [],
  };

  componentDidMount() {
    api.journals.fetchJournals().then((data) => {
      const userJournals = data.filter((journal) => {
        return journal.user_id === this.props.currentUser.id;
      });
      userJournals.sort(this.sortJournals);
      this.setState({
        journals: userJournals,
      });
    });
  }

  sortJournals = (a, b) => {
    const aId = a.id;
    const bId = b.id;

    let comparison = 0;
    if (aId > bId) {
      comparison = 1;
    } else if (aId < bId) {
      comparison = -1;
    }
    return comparison;
  };

  addJournal = (data) => {
    const newJournals = [...this.state.journals, data];
    this.setState({
      journals: newJournals,
    });
  };

  removeJournal = (journalId) => {
    const updatedJournals = this.state.journals.filter(
      (journal) => journal.id !== journalId
    );
    this.setState({
      journals: updatedJournals,
    });
  };

  updateJournal = (journalEdit) => {
    const updatedJournals = this.state.journals.map((journal) =>
      journal.id !== journalEdit.id ? journal : journalEdit
    );
    this.setState({
      journals: updatedJournals,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        {window.location.pathname === "/dashboard" ? (
          <div className="row">
            <div className="card mr-5" style={{ width: "18rem" }}>
              <img className="card-img-top p-2" src={bottles} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Messages</h5>
                <p className="card-text">
                  View, create, and send messages in a bottle.
                </p>
                <NavLink to="/dashboard/mailbox" className="btn btn-primary">
                  View Messages
                </NavLink>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top p-2" src={journal} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Journal</h5>
                <p className="card-text">
                  Write personal journal entries for your eyes only.
                </p>
                <NavLink to="/dashboard/journal" className="btn btn-primary">
                  View Journal
                </NavLink>
              </div>
            </div>
          </div>
        ) : null}
        <Switch>
          <Route
            path="/dashboard/mailbox"
            render={(props) => (
              <Mailbox {...props} currentUser={this.props.currentUser} />
            )}
          />
          <Route
            path="/dashboard/journal"
            render={(props) => (
              <Journal
                {...props}
                journals={this.state.journals}
                addJournal={this.addJournal}
                removeJournal={this.removeJournal}
                updateJournal={this.updateJournal}
                currentUser={this.props.currentUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default AuthHOC(Dashboard);
