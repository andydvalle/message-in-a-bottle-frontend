import React, { Component } from 'react'
import Inbox from '../containers/Inbox.js'
import Journal from '../containers/Journal.js'

//container that holds inbox and journal

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard">
                Hi from Dashboard
                <Inbox messages={this.props.messages} onHandlePostMessage={this.props.onHandlePostMessage} onHandleDeleteMessage={this.props.onHandleDeleteMessage}/>
                <Journal journals={this.props.journals} onHandlePostJournal={this.props.onHandlePostJournal} onHandleDeleteJournal={this.props.onHandleDeleteJournal} onHandleEditJournal={this.props.onHandleEditJournal}/>
            </div>
        )
    }

}

export default Dashboard