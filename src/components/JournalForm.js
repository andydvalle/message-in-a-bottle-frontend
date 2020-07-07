import React, { Component } from 'react'

class JournalForm extends Component {

    state = {
        title: "",
        content: "",
        user_id: ""
    }

    //sets state to current values of form inputs
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //sends data to App.js to submitJournalForm(), then sets state back to ''
    handleJournalForm = (e) => {
        e.preventDefault()
        this.props.onHandleJournalForm(this.state)
        this.setState({
            title: "",
            content: "",
            user_id: ""
        })
    }

    render(){
        return (
            <form className="JournalForm" onSubmit={this.handleJournalForm}>
                <label>Title</label>
                <input type="text" name="title" placeholder="Write your title here" value={this.state.title} onChange={this.handleChange}/>
                <label>Journal Entry</label>
                <textarea type="text" name="content" placeholder="Write your journal entry here" value={this.state.content} onChange={this.handleChange}/>
                <label>user_id</label>
                <input type="text" name="user_id" placeholder="this should be hidden" value={this.state.user_id} onChange={this.handleChange}/>
                <button type="submit">Submit Journal</button>
            </form>
        )
    }

}

export default JournalForm