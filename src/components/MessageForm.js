import React, { Component } from 'react'
import { api } from '../services/api'

class MessageForm extends Component {
    
    state= {
        content: "",
        sender_user_id: "", 
        receiver_user_id: ""
    }

    //sets state to current values of form inputs
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //sends data to App.js to submitMessageForm(), then sets state back to ''
    handlePostMessage = (e) => {
        e.preventDefault()
        api.messages.postMessage(this.state).then(data=>this.props.addMessage(data))
        this.setState({
            content: '',
            sender_user_id: '',
            receiver_user_id: ''
        })
    }

    render(){
        return (
            <form className="MessageForm" onSubmit={this.handlePostMessage}>
                <label>Message content</label>
                <textarea type="text" name="content" placeholder="Write your message here" value={this.state.content} onChange={this.handleChange} />
                <label>sender_user_id</label>
                <input type="text" name="sender_user_id" placeholder="this should be hidden" value={this.state.sender_user_id} onChange={this.handleChange} />
                <label>receiver_user_id</label>
                <input type="text" name="receiver_user_id" placeholder="this should be hidden" value={this.state.receiver_user_id} onChange={this.handleChange}/>
                <button type="submit">Send Message</button>
            </form>
        )
    }
}

export default MessageForm