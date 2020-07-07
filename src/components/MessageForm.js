import React, { Component } from 'react'

class MessageForm extends Component {
    
    state= {
        content: "",
        sender_user_id: "", 
        receiver_user_id: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.content.value = ''
        e.target.sender_user_id.value = ''
        e.target.receiver_user_id.value = ''
        console.log(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Message content</label>
                <textarea type="text" name="content" placeholder="Write your message here" value={this.state.content} onChange={this.handleChange} />
                <label>sender_user_id</label>
                <input type="text" name="sender_user_id" placeholder="this should be hidden" value={this.state.sender_user_id} onChange={this.handleChange} />
                <label>receiver_user_id</label>
                <input type="text" name="receiver_user_id" placeholder="this should be hidden" value={this.state.receiver_user_id} onChange={this.handleChange}/>
                <input type="Submit" value="Send Message" />
            </form>
        )
    }
}

export default MessageForm