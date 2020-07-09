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
      <div className="container m-3" >
        <div className="card">
          <form className="card-body" onSubmit={this.handleJournalForm}>
          <h5 class="card-title">New Journal Entry</h5>
            <label>Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              placeholder="Give this entry a title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label>Journal Entry</label>
            <textarea
              type="text"
              name="content"
              class="form-control"
              placeholder="What are you thinking about today?"
              value={this.state.content}
              onChange={this.handleChange}
            />
            {/* <label>user_id</label>
            <input
              type="text"
              name="user_id"
              class="form-control"
              placeholder="this should be hidden"
              value={this.state.user_id}
              onChange={this.handleChange}
            /> */}
            <button className="btn btn-primary mt-3" type="submit">
              Submit Journal
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default JournalForm;
