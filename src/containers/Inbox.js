import React, { Component } from 'react'
import Message from '../components/Message'

//container that holds MessageForm and Messages

class Inbox extends Component {

    renderMessages = () => {
        return this.props.messages.map(message=>{
            return <Message key={message.id} messageData={message} removeMessage={this.props.removeMessage}/>
        })
    }

    render(){
        return (
            <div className="Inbox">
                {/* Hi from Inbox */}
                {this.renderMessages()}
            </div>
        )
    }
}

export default Inbox