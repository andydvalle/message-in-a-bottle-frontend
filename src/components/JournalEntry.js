import React, { Component } from 'react'

//this is where all the users journal entries will live

class JournalEntry extends Component {
    render(){

        const {content, title} = this.props.journalEntryData

        return (
            <div className="JournalEntry">
                <h3>{title}</h3>
                <p>{content}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }

}

export default JournalEntry