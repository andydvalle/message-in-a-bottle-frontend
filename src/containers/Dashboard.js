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
    api.journals.fetchJournals()
    .then(data=>this.setState({
        journals: data
      }))
  }

  addJournal = (data) => {
      const newJournals = [...this.state.journals, data]
      this.setState({
          journals: newJournals
      })
  }

  removeJournal = (journalId) => {
      const updatedJournals = this.state.journals.filter(journal => journal.id !== journalId)
      this.setState({
        journals: updatedJournals
      })
  }

  updateJournal = (journalEdit) => {
    const updatedJournals = this.state.journals.map(journal => journal.id !== journalEdit.id ? journal : {...journal, journalEdit} )
    this.setState({
      journals: updatedJournals
    })
  }

  render() {
    return (
        <div className="Dashboard">
          Hi from Dashboard
            <Route
              path="/mailbox"
              render={(props) => <Mailbox {...props} />}
            />
            <Route
              path="/journal"
              render={(props) => <Journal {...props} journals={this.state.journals} addJournal={this.addJournal} removeJournal={this.removeJournal} updateJournal={this.updateJournal}/>
              }
            />
        </div>
    );
  }
}

export default AuthHOC(Dashboard);
