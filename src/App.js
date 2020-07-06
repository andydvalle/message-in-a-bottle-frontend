import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './components/NavBar.js'

class App extends Component {
  render(){
  return (
    <div>
        Hi from app
        <NavBar />
    </div>
    );
  }
}

export default App;
