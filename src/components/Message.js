import React, { Component } from 'react'

//This is where all the received messages will live

class Message extends Component {
    
    //sends message id to App.js deleteMessage
    handleDeleteMessage = (e) => {
        this.props.onHandleDeleteMessage(this.props.messageData.id)
    }

    render(){
        
        const {content} = this.props.messageData
        
        return (
            <div className="Message">
                <p>{content}</p>
                <button onClick={this.handleDeleteMessage}>Delete</button>
            </div>
        )
    }

}

export default Message