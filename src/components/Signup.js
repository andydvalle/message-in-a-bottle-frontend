import React from 'react'
import { api } from '../services/api'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

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

    handleChange = e => {
        const newFields = {...this.state.fields, [e.target.name]: e.target.value };
        this.setState({fields: newFields});
    }

    handleSubmit = e => {
        e.preventDefault()
        api.auth.signUp(this.state.fields)
        .then(resp => {
            console.log(resp)
            if (!resp.error) {
                this.props.onLogin(resp);
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
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;