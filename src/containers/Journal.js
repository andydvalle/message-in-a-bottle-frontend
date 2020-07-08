import React, { Component } from 'react'
import JournalForm from '../components/JournalForm'
import JournalEntry from '../components/JournalEntry'

//container that holds JournalForm and JournalEntry

class Journal extends Component {

    state = {
        title: "",
        content: "",
        user_id: "",
        isEdit: false,
        id: ""
    }

    //sets state equal to Journal Entry Data once edit button is clicked. Sends updateFormData prop to Journal Form
    editJournalEntry = (journalData) => {
        this.setState({
            id: journalData.id,
            title: journalData.title,
            content: journalData.content,
            user_id: journalData.user_id,
            isEdit: true 
        })
    }

    //resets state after JournalForm.js submits an edited form.
    //not too happy about this, sorta 'hacky'
    resetJournalState = () => {
        this.setState({
            id: "",
            title: "",
            content: "",
            user_id: "",
            isEdit: false
        })
    }

    //renders all journal entry components
    renderJournalEntry = () => {
        return this.props.journals.map(journalEntry => {
            return <JournalEntry key={journalEntry.id} journalEntryData={journalEntry} onHandleDeleteJournal={this.props.onHandleDeleteJournal} onEditJournalEntry={this.editJournalEntry}/>
        })
    }

    render(){
        return (
            <div className="Journal">
                Hi from Journal
                <JournalForm resetJournalState={this.resetJournalState}updateFormData={this.state} onHandlePostJournal={this.props.onHandlePostJournal} onHandleEditJournal={this.props.onHandleEditJournal}/>
                {this.renderJournalEntry()}
            </div>
        )
    }

}

export default Journal