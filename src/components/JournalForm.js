import React, { Component } from "react";
import { api } from "../services/api";

class JournalForm extends Component {
  constructor(props) {
    super();
    this.state = {
      id: "",
      title: "",
      content: "",
      user_id: "",
      isEdit: false,
    };
  }

  //sets state to current values of form inputs
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //if isEdit===true sends data to App.js editJournal, else to App.js postJournal
  handleJournalForm = (e) => {
    e.preventDefault();
    if (this.state.isEdit) {
      api.journals
        .editJournal(this.state)
        .then((data) => this.props.updateJournal(data));
      this.props.resetJournalState();
    } else {
      api.journals
        .postJournal(this.state)
        .then((data) => this.props.addJournal(data));
      this.setState({
        id: "",
        title: "",
        content: "",
        user_id: "",
        isEdit: false,
      });
    }
  };

  // udpates state and form values
  componentWillReceiveProps(nextProps) {
    if (nextProps.updateFormData !== this.state) {
      this.setState({
        id: nextProps.updateFormData.id,
        title: nextProps.updateFormData.title,
        content: nextProps.updateFormData.content,
        user_id: this.props.currentUser.id,
        isEdit: nextProps.updateFormData.isEdit,
      });
    }
  }

  render() {
    return (
      <div className="container m-3">
        <div className="card">
          <form className="card-body" onSubmit={this.handleJournalForm}>
            <h5 className="card-title">Begin a new journal entry</h5>
            <label>What's your entry title?</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Example: This happened today..."
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label className="pt-2">Spill your thoughts.</label>
            <textarea
              type="text"
              name="content"
              className="form-control"
              placeholder="Example: I was walking around and found..."
              value={this.state.content}
              onChange={this.handleChange}
            />
            <button className="btn btn-primary mt-3" type="submit">
              Save Journal Entry
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default JournalForm;
