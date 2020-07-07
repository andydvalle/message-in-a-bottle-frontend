import React, { Component } from 'react'

//This is where all the received messages will live

class Message extends Component {
    
    render(){
        
        const {content, id} = this.props.messageData
        
        return (
            <div className="Message" messageId={id}>
                <p>{content}</p>
                <button>Delete</button>
            </div>
        )
    }

}

export default Message