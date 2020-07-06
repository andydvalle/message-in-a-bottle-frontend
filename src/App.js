import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import Dashboard from './containers/Dashboard.js'
import Inbox from './containers/Inbox.js'
import Journal from './containers/Journal.js'

class App extends Component {
  render(){
  return (
    <div>
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
