import React, { Component } from 'react'

class JournalForm extends Component {

    state = {
        title: "",
        content: "",
        user_id: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.title.value = ""
        e.target.content.value = ""
        e.target.user_id.value = ""
        console.log(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" placeholder="Write your title here" value={this.state.title} onChange={this.handleChange}/>
                <label>Journal Entry</label>
                <textarea type="text" name="content" placeholder="Write your journal entry here" value={this.state.content} onChange={this.handleChange}/>
                <label>user_id</label>
                <input type="text" name="user_id" placeholder="this should be hidden" value={this.state.user_id} onChange={this.handleChange}/>
                <input type="Submit" value="Submit Entry" />
            </form>
        )
    }

}

export default JournalForm