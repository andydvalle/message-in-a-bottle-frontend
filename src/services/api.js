
const token = () => localStorage.getItem("token");

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

const fetchMessages = () => {
    const URL = "http://localhost:3000/messages"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      messages: data
    }))
}

const fetchJournals = () => {
    const URL = "http://localhost:3000/journals"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      journals: data
    }))
}

const login = data => {
    return fetch('http://localhost:3000/auth', {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

const getCurrentUser = () => {
    return fetch('http://localhost:3000/current_user', {
        headers: headers()
    }).then(resp => {
        return resp.json()
    })
}

export const api = {
    auth: {
        login,
        getCurrentUser
    },
    messages: {
        fetchMessages
    },
    journals: {
        fetchJournals
    }
}