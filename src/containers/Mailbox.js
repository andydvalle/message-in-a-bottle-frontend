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
    }

    render(){
        return (
            <div className="Mailbox">
                Hi from Mailbox
                <Route path='/inbox' component={<Inbox />} />
                <Route path='/message-form' component={<MessageForm />} />


            </div>
        )
    }
}

export default Mailbox