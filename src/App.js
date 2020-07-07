import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import Dashboard from './containers/Dashboard.js'
import Inbox from './containers/Inbox.js'
import Journal from './containers/Journal.js'

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

  fetchMessages = () => {
    const URL = "http://localhost:3000/messages"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      messages: data
    }))
  }

  fetchJournals = () => {
    const URL = "http://localhost:3000/journals"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      journals: data
    }))
  }

  onLogin = data => {
    const updatedState = { ...this.state.auth, user: {id: data.id, username: data.username}};
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState })
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
        <Dashboard />
        <Inbox />
        <Journal />
        <Login onLogin={this.onLogin} />
    </div>
    );
  }
}

export default App;
