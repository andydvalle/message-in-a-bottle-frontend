
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
    return fetch(URL).then(resp=>resp.json())
    
}

const fetchJournals = () => {
    const URL = "http://localhost:3000/api/v1/journals"
    return fetch(URL).then(resp=>resp.json())
}

const postJournal = (data) => {
    // console.log("posting journal entry")
    const URL = "http://localhost:3000/api/v1/journals"
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp=>resp.json())
  }

//POST fetch messages, then GET fetch messages
const postMessage = (data) => {
// console.log("posting message")
    const URL = "http://localhost:3000/api/v1/messages"
    return fetch(URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp=>resp.json())

}

//DELETE fetch messages, then GET fetch messages
const deleteMessage = (messageId) => {
// console.log(`deleting ${messageId}`)
    const URL = `http://localhost:3000/api/v1/messages/${messageId}`
    return fetch(URL, {
        method: 'DELETE'
    })
    .then(resp=>resp.json())
}

//DELETE fetch journals, then GET fetch journals
const deleteJournal = (journalId) => {
// console.log(`deleting ${journalId}`)
const URL = `http://localhost:3000/journals/${journalId}`
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
const URL= `http://localhost:3000/journals/${data.id}`
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