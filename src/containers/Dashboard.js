import React, { Component } from 'react'
import AuthHOC from '../HOCs/AuthHOC'
import { Route, Switch } from 'react-router-dom'
import Messages from './Messages'
import Journal from './Journal'


class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard">Hi from Dashboard
                <Switch>
                    <Route path="/messages" component={Messages}/>
                    <Route path="/journal" component={Journal}/>
                </Switch>
            </div>
        )
    }

}

export default AuthHOC(Dashboard)