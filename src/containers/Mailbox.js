import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { api } from '../services/api'
import MessageForm from '../components/MessageForm'
import Inbox from './Inbox'

class Mailbox extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        api.messages.fetchMessages()
        .then(data=>this.setState({
            messages: data
          }))
    }

    addMessage = (data) => {
        const newMessages = [...this.state.messages, data]
        this.setState({
            messages: newMessages
        })
    }

    deleteMessage = (messageId) => {
        const updatedMessages = this.state.messages.filter(message=> message.id !== messageId)
        this.setState({
            messages: updatedMessages
        })
    }

    render(){
        return (
            <div className="Mailbox">
                Hi from Mailbox
                <Route 
                    exact 
                    path='/mailbox/inbox' 
                    render={props => 
                    <Inbox {...props} deleteMessage={this.deleteMessage}/>} />
                <Route 
                    path='/message-form' 
                    render={props => 
                    <MessageForm {...props} addMessage={this.addMessage}/>}
                />
            </div>
        )
    }
}

export default Mailbox