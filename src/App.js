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

  // fetchMessages = () => {
  //   const URL = "http://localhost:3000/messages"
  //   fetch(URL)
  //   .then(resp=>resp.json())
  //   .then(data=>this.setState({
  //     messages: data
  //   }))
  // }

  // fetchJournals = () => {
  //   const URL = "http://localhost:3000/journals"
  //   fetch(URL)
  //   .then(resp=>resp.json())
  //   .then(data=>this.setState({
  //     journals: data
  //   }))
  // }

  onLogin = data => {
    const updatedState = { ...this.state.auth, user: {id: data.id, name: data.name}};
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState })
  }

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
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
      </div>
    );
  }
}

export default App;
