import React, { Component } from 'react'

class JournalForm extends Component {
    render(){
        return (
            <form>
                <label>Title</label>
                <input type="text" name="journal" placeholder="Write your title here" />
                <label>Journal Entry</label>
                <input type="text" name="journal" placeholder="Write your journal entry here" />
                <input type="Submit" value="Submit Entry" />
            </form>
        )
    }

}

export default JournalForm