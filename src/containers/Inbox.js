import React, { Component } from 'react'
import MessageForm from '../components/MessageForm'

class Inbox extends Component {
    render(){
        return (
            <div className="Inbox">
                Hi from Inbox
                <MessageForm />
            </div>
        )
    }
}

export default Inbox