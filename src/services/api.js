
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
        fetchMessages
    },
    journals: {
        fetchJournals
    }
}