import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { api } from '../services/api'
import MessageForm from '../components/MessageForm'
import Inbox from './Inbox'
import Outbox from './Outbox'
// import AuthHOC from '../HOCs/AuthHOC'

class Mailbox extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        api.messages.fetchMessages()
        .then(data => {
            console.log(data)
            const userMessages = data.filter(message => {
                return message.id == this.props.currentUser.id
            })
            this.setState({
                messages: userMessages
            })
        })
    }

    addMessage = (data) => {
        const newMessages = [...this.state.messages, data]
        this.setState({
            messages: newMessages
        })
    }

    removeMessage = (messageId) => {
        const updatedMessages = this.state.messages.filter(message=> message.id !== messageId)
        this.setState({
            messages: updatedMessages
        })
    }

    render(){
        return (
            <div className="Mailbox">
                {/* Hi from Mailbox */}
                {/* <NavLink to="/dashboard/mailbox/inbox">Inbox</NavLink>
                <NavLink to="/dashboard/mailbox/message-form">New Message</NavLink> */}
                <Switch>
                    <Route 
                        exact 
                        path='/dashboard/mailbox/inbox' 
                        render={props => 
                        <Inbox {...props} removeMessage={this.removeMessage} messages={this.state.messages}/> }
                        />
                    <Route 
                        exact 
                        path='/dashboard/mailbox/outbox' 
                        render={props => 
                        <Outbox {...props} removeMessage={this.removeMessage} messages={this.state.messages}/> }
                        />
                    <Route 
                        path='/dashboard/mailbox/message-form' 
                        render={props => 
                        <MessageForm {...props} addMessage={this.addMessage}/>}
                    />
                </Switch>
            </div>
        )
    }
}

export default Mailbox