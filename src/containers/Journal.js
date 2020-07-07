import React, { Component } from 'react'
import JournalForm from '../components/JournalForm'
import JournalEntry from '../components/JournalEntry'

//container that holds JournalForm and JournalEntry

class Journal extends Component {

    renderJournalEntry = () => {
        return this.props.journals.map(journalEntry => {
            return <JournalEntry key={journalEntry.id} journalEntryData={journalEntry}/>
        })
    }

    render(){
        return (
            <div className="Journal">
                Hi from Journal
                <JournalForm onHandleJournalForm={this.props.onHandleJournalForm}/>
                {/* <JournalEntry /> */}
                {this.renderJournalEntry()}
            </div>
        )
    }

}

export default Journal