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
            <div className="card">
                <div className="card-body">
                <h5>{title}</h5>
                <p>{content}</p>
                <button className="btn btn-outline-info btn-sm m-1" onClick={this.handleEditButton}>Edit</button>
                <button className="btn btn-outline-danger btn-sm" onClick={this.handleDeleteButton}>Delete</button>
                </div>
            </div>
        )
    }

}

export default JournalEntry