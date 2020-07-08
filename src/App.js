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

  //GET fetch messages and set state messages
  fetchMessages = () => {
    const URL = "http://localhost:3000/messages"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      messages: data
    }))
  }

  //GET fetch journal entries and set state journals
  fetchJournals = () => {
    const URL = "http://localhost:3000/journals"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      journals: data
    }))
  }

  //POST fetch journals, then GET fetch journals
  postJournal = (data) => {
    // console.log("posting journal entry")
    const URL = "http://localhost:3000/journals"
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchJournals())
  }

  //POST fetch messages, then GET fetch messages
  postMessage = (data) => {
    // console.log("posting message")
    const URL = "http://localhost:3000/messages"
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchMessages())
  }

  //DELETE fetch messages, then GET fetch messages
  deleteMessage = (messageId) => {
    // console.log(`deleting ${messageId}`)
    const URL = `http://localhost:3000/messages/${messageId}`
    fetch(URL, {
      method: 'DELETE'
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchMessages())
  }

  //DELETE fetch journals, then GET fetch journals
  deleteJournal = (journalId) => {
    // console.log(`deleting ${journalId}`)
    const URL = `http://localhost:3000/journals/${journalId}`
    fetch(URL, {
      method: 'DELETE'
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchJournals())
  }

  //PUT fetch, edit journals, then GET fetch journals
  //*NOT WORKING PROPERLY, DELETES JOURNAL ENTRY* 
  editJournal = (data) => {
    console.log(`editing ${data.id}`)
    const URL= `http://localhost:3000/journals/${data.id}`
    fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
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
          <Dashboard journals={this.state.journals} messages={this.state.messages} onHandlePostMessage={this.postMessage} onHandlePostJournal={this.postJournal} onHandleDeleteMessage={this.deleteMessage} onHandleDeleteJournal={this.deleteJournal} onHandleEditJournal={this.editJournal}/>
      </div>
    );
  }
}

export default App;