import React, { Component } from 'react'

class MessageForm extends Component {
    
    state= {
        content: "",
        sender_user_id: "", 
        receiver_user_id: ""
    }

    render(){
        return (
            <form>
                <label>New Message</label>
                <input type="text" name="message" placeholder="Write your message here" />
                <input type="Submit" value="Send Message" />
            </form>
        )
    }
}

export default MessageForm