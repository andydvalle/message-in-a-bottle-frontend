import React, { Component } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

//container that holds MessageForm and Messages

class Inbox extends Component {

    renderMessages = () => {
        return this.props.messages.map(message=>{
            return <Message key={message.id} messageData={message} onHandleDeleteMessage={this.props.onHandleDeleteMessage}/>
        })
    }

    render(){
        return (
            <div className="Inbox">
                Hi from Inbox
                <MessageForm onHandlePostMessage={this.props.onHandlePostMessage}/>
                {this.renderMessages()}
            </div>
        )
    }
}

export default Inbox