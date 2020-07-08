
const token = () => localStorage.getItem("token");

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

// GET fetch messages
const fetchMessages = () => {
    const URL = "http://localhost:3000/api/v1/messages"
    return fetch(URL).then(resp=>resp.json())
    
}

// GET fetch journals
const fetchJournals = () => {
    const URL = "http://localhost:3000/api/v1/journals"
    return fetch(URL).then(resp=>resp.json())
}

// POST fetch journal
const postJournal = (data) => {
    const URL = "http://localhost:3000/api/v1/journals"
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    }).then(resp=>resp.json())
  }

//POST fetch message
const postMessage = (data) => {
    const URL = "http://localhost:3000/api/v1/messages"
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp=>resp.json())
}

//DELETE fetch message
const deleteMessage = (messageId) => {
    const URL = `http://localhost:3000/api/v1/messages/${messageId}`
    return fetch(URL, {
        method: 'DELETE'
    }).then(resp=>resp.json())
}

//DELETE fetch journal
const deleteJournal = (journalId) => {
    const URL = `http://localhost:3000/api/v1/journals/${journalId}`
    return fetch(URL, {
        method: 'DELETE'
    }).then(resp=>resp.json())
}

//PUT fetch, edit journals, then GET fetch journals
//*NOT WORKING PROPERLY, DELETES JOURNAL ENTRY* 
const editJournal = (data) => {
    const URL= `http://localhost:3000/api/v1/journals/${data.id}`
    return fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
        }).then(resp=>resp.json())
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