import React, { Component } from 'react'
import Inbox from '../containers/Inbox.js'
import Journal from '../containers/Journal.js'

//container that holds inbox and journal

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard">
                Hi from Dashboard
                <Inbox messages={this.props.messages} onHandleMessageForm={this.props.onHandleMessageForm}/>
                <Journal journals={this.props.journals} onHandleJournalForm={this.props.onHandleJournalForm}/>
            </div>
        )
    }

}

export default Dashboard