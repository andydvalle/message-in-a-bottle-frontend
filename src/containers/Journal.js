import React, { Component } from 'react'
import JournalForm from '../components/JournalForm'
import JournalEntry from '../components/JournalEntry'

//container that holds JournalForm and JournalEntry

class Journal extends Component {
    render(){
        return (
            <div className="Journal">
                Hi from Journal
                <JournalForm onHandleJournalForm={this.props.onHandleJournalForm}/>
                <JournalEntry />
            </div>
        )
    }

}

export default Journal