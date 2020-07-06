import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import Dashboard from './containers/Dashboard.js'
import Inbox from './containers/Inbox.js'
import Journal from './containers/Journal.js'

class App extends Component {

  state= {
    journals: [],
    messages: []
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
    </div>
    );
  }
}

export default App;
