import React from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        name: "",
        password: "",
      },
    };
  }

  // changes state with the input received in the login form
  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  // submit event handler
  handleSubmit = (e) => {
    e.preventDefault();
    // fetch request to login
    api.auth.login(this.state.fields).then((resp) => {
      if (!resp.error) {
        // calls login function from App.js if no error from fetch
        this.props.onLogin(resp);
        // redirects to home page, dashboard
        this.props.history.push("/dashboard");
      } else {
        this.setState({ error: true });
      }
    });
  };

 
  render() {
    const { fields } = this.state;
    return (
      <div className="container mt-5">
        <div class="card col-sm-6">
          {this.state.error ? <h1>Try Again</h1> : null}
          <div class="card-body">
            <h5 class="card-title">Welcome to Message In a Bottle!</h5>
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label>Username</label>
                <input
                  name="name"
                  class="form-control"
                  placeholder="Enter username"
                  value={fields.username}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button class="btn btn-primary btn mt-3 mr-3" type="submit">
                Login
              </button>
              <Link to="/signup">Sign up</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
