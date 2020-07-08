
const token = () => localStorage.getItem("token");

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

const fetchMessages = () => {
    const URL = "http://localhost:3000/api/v1/messages"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      messages: data
    }))
}

const fetchJournals = () => {
    const URL = "http://localhost:3000/api/v1/journals"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      journals: data
    }))
}

const postJournal = (data) => {
    // console.log("posting journal entry")
    const URL = "http://localhost:3000/api/v1/journals"
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchJournals())
  }

//POST fetch messages, then GET fetch messages
const postMessage = (data) => {
// console.log("posting message")
const URL = "http://localhost:3000/api/v1/messages"
fetch(URL, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    },
    body: JSON.stringify(data)
})
.then(resp=>resp.json())
.then(data=>this.fetchMessages())
}

//DELETE fetch messages, then GET fetch messages
const deleteMessage = (messageId) => {
// console.log(`deleting ${messageId}`)
const URL = `http://localhost:3000/api/v1/messages/${messageId}`
fetch(URL, {
    method: 'DELETE'
})
.then(resp=>resp.json())
.then(data=>this.fetchMessages())
}

//DELETE fetch journals, then GET fetch journals
const deleteJournal = (journalId) => {
// console.log(`deleting ${journalId}`)
const URL = `http://localhost:3000/api/v1/journals/${journalId}`
fetch(URL, {
    method: 'DELETE'
})
.then(resp=>resp.json())
.then(data=>this.fetchJournals())
}

//PUT fetch, edit journals, then GET fetch journals
//*NOT WORKING PROPERLY, DELETES JOURNAL ENTRY* 
const editJournal = (data) => {
// console.log(`editing ${data.id}`)
const URL= `http://localhost:3000/api/v1/journals/${data.id}`
fetch(URL, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    },
    body: JSON.stringify(data)
    })
.then(resp=>resp.json())
.then(data=>this.fetchJournals())
}

const signUp = data => {
    return fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

const login = data => {
    return fetch('http://localhost:3000/api/v1/auth', {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

const getCurrentUser = () => {
    return fetch('http://localhost:3000/api/v1/current_user', {
        headers: headers()
    }).then(resp => {
        console.log(resp)
        return resp.json()
    })
}

export const api = {
    auth: {
        login,
        getCurrentUser,
        signUp
    },
    messages: {
        fetchMessages,
        postMessage,
        deleteMessage
    },
    journals: {
        fetchJournals,
        postJournal,
        deleteJournal,
        editJournal
    }
}