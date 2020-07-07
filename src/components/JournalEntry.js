import React, { Component } from 'react'

//this is where all the users journal entries will live

class JournalEntry extends Component {
    
    handleDeleteJournal = () => {
        this.props.onHandleDeleteJournal(this.props.journalEntryData.id)
    }

    handleEditJournal = () => {
        this.props.onHandleEditJournal(this.props.journalEntryData.id)
    }
    
    render(){

        const {content, title} = this.props.journalEntryData

        return (
            <div className="JournalEntry">
                <h3>{title}</h3>
                <p>{content}</p>
                <button onClick={this.handleEditJournal}>Edit</button>
                <button onClick={this.handleDeleteJournal}>Delete</button>
            </div>
        )
    }

}

export default JournalEntry