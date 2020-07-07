import React, { Component } from 'react'
import JournalForm from '../components/JournalForm'
import JournalEntry from '../components/JournalEntry'

class Journal extends Component {
    render(){
        return (
            <div className="Journal">
                Hi from Journal
                <JournalForm />
                <JournalEntry />
            </div>
        )
    }

}

export default Journal