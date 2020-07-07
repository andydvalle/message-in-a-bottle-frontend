import React, { Component } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

class Inbox extends Component {
    render(){
        return (
            <div className="Inbox">
                Hi from Inbox
                <MessageForm />
                <Message />
            </div>
        )
    }
}

export default Inbox