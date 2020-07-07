import React, { Component } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

//container that holds MessageForm and Messages

class Inbox extends Component {
    render(){
        return (
            <div className="Inbox">
                Hi from Inbox
                <MessageForm onHandleMessageForm={this.props.onHandleMessageForm}/>
                <Message />
            </div>
        )
    }
}

export default Inbox