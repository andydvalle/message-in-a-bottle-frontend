import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar.js'
import Dashboard from './containers/Dashboard.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { api } from './services/api';

class App extends Component {

  constructor() {
    super()
    this.state= {
      auth: {
        user: {}
      },
      journals: [],
      messages: []
    }
  }

  onLogin = data => {
    const updatedState = { ...this.state.auth, user: {id: data.id, name: data.name}};
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState })
  }

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
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
    const token = localStorage.getItem("token")
    console.log(token)
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const updatedState = { ...this.state.auth, user: user }
        this.setState({ auth: updatedState })
      })
    }
  }

  render(){
  return (
      <div className="App">
          Hi from app
          <NavBar 
            currentUser={this.state.auth.user}
            handleLogout={this.onLogout}
            />
          <Route
            exact
            path="/"
            render={props => <Dashboard {...props} />}
            />
          <Route 
            exact
            path="/login"
            render={props => <Login {...props} onLogin={this.onLogin} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} onLogin={this.onLogin} />}
          />
          <NavBar />
          <Dashboard journals={this.state.journals} messages={this.state.messages} onHandlePostMessage={this.postMessage} onHandlePostJournal={this.postJournal} onHandleDeleteMessage={this.deleteMessage} onHandleDeleteJournal={this.deleteJournal} onHandleEditJournal={this.editJournal}/>
      </div>
    );
  }
}

export default App;