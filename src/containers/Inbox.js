import React, { Component } from 'react'
import MessageForm from '../components/MessageForm'
import Message from '../components/Message'

//container that holds MessageForm and Messages

class Inbox extends Component {

    renderMessages = () => {
        return this.props.messages.map(message=>{
            return <Message key={message.id} messageData={message}/>
        })
    }

    render(){
        return (
            <div className="Inbox">
                Hi from Inbox
                <MessageForm onHandleMessageForm={this.props.onHandleMessageForm}/>
                {/* <Message messages={this.props.messages}/> */}
                {this.renderMessages()}
            </div>
        )
    }
}

export default Inbox