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
        <div className="jumbotron">
          <div className="jumbotron-content col-sm-4 p-3">
            <h1 className="display-4">Welcome!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classNamees for typography and spacing to space
              content out within the larger container.
            </p>
            {/* <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p> */}
          </div>
        </div>
        <div className="card col-sm-6">
          {this.state.error ? <h1>Try Again</h1> : null}
          <div className="card-body">
            <h5 className="card-title">Welcome to Message In a Bottle!</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="name"
                  className="form-control"
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
                  className="form-control"
                  placeholder="Password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary btn mt-3 mr-3" type="submit">
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
