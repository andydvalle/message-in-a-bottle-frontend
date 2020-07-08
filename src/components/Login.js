import React from 'react'
import { api } from '../services/api'
import { Link } from 'react-router-dom'

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            error: false,
            fields: {
                name: '',
                password: ''
            }
        }
    }

    // changes state with the input received in the login form
    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value };
        this.setState({fields: newFields});
    }

    // submit event handler
    handleSubmit = e => {
        e.preventDefault()
        // fetch request to login
        api.auth.login(this.state.fields)
        .then(resp => {
            if (!resp.error) {
                // calls login function from App.js if no error from fetch
                this.props.onLogin(resp);
                // redirects to home page, dashboard
                this.props.history.push('/');
            } else {
                this.setState( { error: true })
            }
        })
    }

    render() {
        const { fields } = this.state;
        return (
            <div>
                {this.state.error ? <h1>Try Again</h1> : null }
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Username</label>
                            <input
                            name="name"
                            placeholder="username"
                            value={fields.username}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={fields.password}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit">
                            Login
                        </button>
                    </form>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }
}

export default Login;