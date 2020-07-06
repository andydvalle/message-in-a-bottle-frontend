import React, { Component } from 'react'
import JournalForm from '../components/JournalForm'

class Journal extends Component {
    render(){
        return (
            <div className="Journal">
                Hi from Journal
                <JournalForm />
            </div>
        )
    }

}

export default Journal