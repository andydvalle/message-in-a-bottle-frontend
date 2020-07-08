import React, { Component } from 'react'
import { api } from '../services/api'

class JournalForm extends Component {

    constructor(props){
        super()
        this.state = {
            id: "",
            title: "",
            content: "",
            user_id: "",
            isEdit: false
        }
    }

    //sets state to current values of form inputs
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //if isEdit===true sends data to App.js editJournal, else to App.js postJournal
    handleJournalForm = (e) => {
        e.preventDefault()
        if(this.state.isEdit){
            api.journals.editJournal(this.state)
            this.props.resetJournalState()
        } else {
            api.journals.postJournal(this.state)
            this.setState({
                id: "",
                title: "",
                content: "",
                user_id: "",
                isEdit: false
            })
        }
    }

    // udpates state and form values 
    componentWillReceiveProps(nextProps){
        if (nextProps.updateFormData !== this.state) {
            this.setState({
                id: nextProps.updateFormData.id,
                title: nextProps.updateFormData.title,
                content: nextProps.updateFormData.content,
                user_id: nextProps.updateFormData.user_id,
                isEdit: nextProps.updateFormData.isEdit
            })
        }
    }

    render(){
        return (
            <form className="JournalForm" onSubmit={this.handleJournalForm}>
                <label>Title</label>
                <input type="text" name="title" placeholder="Write your title here" 
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <label>Journal Entry</label>
                <textarea type="text" name="content" placeholder="Write your journal entry here" 
                    value={this.state.content}
                    onChange={this.handleChange}
                />
                <label>user_id</label>
                <input type="text" name="user_id" placeholder="this should be hidden" 
                    value={this.state.user_id} 
                    onChange={this.handleChange}
                />
                <button type="submit">Submit Journal</button>
            </form>
        )
    }

}

export default JournalForm