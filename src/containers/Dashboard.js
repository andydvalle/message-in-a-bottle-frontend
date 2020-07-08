import React, { Component } from 'react'
import AuthHOC from '../HOCs/AuthHOC'
import { Route, Switch } from 'react-router-dom'
import Messages from './Messages'
import Journal from './Journal'

import Inbox from '../containers/Inbox.js'
import Journal from '../containers/Journal.js'

//container that holds inbox and journal

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard">Hi from Dashboard
                <Switch>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/journal" component={Journal}/>
                </Switch>
                
            <div className="Dashboard">
                Hi from Dashboard
                <Inbox messages={this.props.messages} onHandlePostMessage={this.props.onHandlePostMessage} onHandleDeleteMessage={this.props.onHandleDeleteMessage}/>
                <Journal journals={this.props.journals} onHandlePostJournal={this.props.onHandlePostJournal} onHandleDeleteJournal={this.props.onHandleDeleteJournal} onHandleEditJournal={this.props.onHandleEditJournal}/>
            </div>
        )
    }

}

export default AuthHOC(Dashboard)