import React, { Component } from 'react'
import { api } from '../services/api'

//this is where all the users journal entries will live

class JournalEntry extends Component {
    
    //sends journal entry id to App.js deleteJournal
    handleDeleteButton = () => {
        api.journals.deleteJournal(this.props.journalEntryData.id)
        .then(this.props.removeJournal(this.props.journalEntryData.id))
    }

    //sends journal entry data to Journal.js editJournalEntry
    handleEditButton = () => {
        this.props.onEditJournalEntry(this.props.journalEntryData)
    }
    
    render(){

        const {content, title} = this.props.journalEntryData

        return (
            <div className="JournalEntry">
                <h3>{title}</h3>
                <p>{content}</p>
                <button onClick={this.handleEditButton}>Edit</button>
                <button onClick={this.handleDeleteButton}>Delete</button>
            </div>
        )
    }

}

export default JournalEntry