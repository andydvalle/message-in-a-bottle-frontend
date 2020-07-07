import React, { Component } from 'react'
import Inbox from '../containers/Inbox.js'
import Journal from '../containers/Journal.js'

//container that holds inbox and journal

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard">
                Hi from Dashboard
                <Inbox />
                <Journal />
            </div>
        )
    }

}

export default Dashboard