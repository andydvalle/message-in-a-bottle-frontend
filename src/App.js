import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import Dashboard from './containers/Dashboard.js'
// import { BroswerRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  state= {
    journals: [],
    messages: []
  }

  //GET fetch all messages and set state messages
  fetchMessages = () => {
    const URL = "http://localhost:3000/messages"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      messages: data
    }))
  }

  //GET fetch all journal entries and set state journals
  fetchJournals = () => {
    const URL = "http://localhost:3000/journals"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      journals: data
    }))
  }

  //POST fetch to journals, then GET fetch journals
  submitJournalForm = (data) => {
    console.log("hi from submitJournalForm")
    const URL = "http://localhost:3000/journals"
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchJournals())
  }

  //POST fetch to messages, then GET fetch messages
  submitMessageForm = (data) => {
    console.log("hi from submitMessageForm")
    const URL = "http://localhost:3000/messages"
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchMessages())
  }

  //DELETE fetch, messages
  deleteMessage = (messageId) => {
    const URL = `http://localhost:3000/messages/${messageId}`
    fetch(URL, {
      method: 'DELETE'
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchMessages())
  }

  //DELETE fetch, journals
  deleteJournal = (journalId) => {
    console.log(`deleting ${journalId}`)
    const URL = `http://localhost:3000/journals/${journalId}`
    fetch(URL, {
      method: 'DELETE'
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchJournals())
  }

  componentDidMount (){
    this.fetchJournals()
    this.fetchMessages()
  }

  render(){
  return (
      <div className="App">
          Hi from app
          <NavBar />
          <Dashboard journals={this.state.journals} messages={this.state.messages} onHandleMessageForm={this.submitMessageForm} onHandleJournalForm={this.submitJournalForm} onHandleDeleteMessage={this.deleteMessage} onHandleDeleteJournal={this.deleteJournal}/>
      </div>
    );
  }
}

export default App;