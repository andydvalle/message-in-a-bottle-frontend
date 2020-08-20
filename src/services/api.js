const API_ROOT = `https://message-in-a-bottle-app-api.herokuapp.com/api/v1`;

//identifies the token held in the browser
const token = () => localStorage.getItem("token");

//standardizes headers for each fetch
const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

// GET fetch messages
const fetchMessages = () => {
  const URL = `${API_ROOT}/messages`;
  return fetch(URL).then((resp) => resp.json());
};

// GET fetch journals
const fetchJournals = () => {
  const URL = `${API_ROOT}/journals`;
  return fetch(URL).then((resp) => resp.json());
};

// POST fetch journal
const postJournal = (data) => {
  const URL = `${API_ROOT}/journals`;
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

//POST fetch message
const postMessage = (data) => {
  const URL = `${API_ROOT}/messages`;
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

//DELETE fetch message
const deleteMessage = (messageId) => {
  const URL = `${API_ROOT}/messages/${messageId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

//DELETE fetch journal
const deleteJournal = (journalId) => {
  const URL = `${API_ROOT}/journals/${journalId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

//PUT fetch, edit journals, then GET fetch journals
const editJournal = (data) => {
  const URL = `${API_ROOT}/journals/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      content: data.content,
      user_id: data.user_id,
    }),
  }).then((resp) => resp.json());
};

const signUp = (data) => {
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const login = (data) => {
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const getCurrentUser = () => {
  const URL = `${API_ROOT}/current_user`;
  return fetch(URL, {
    headers: headers(),
  }).then((resp) => {
    return resp.json();
  });
};

const getAllUsers = () => {
  const URL = `${API_ROOT}/users`;
  return fetch(URL).then((resp) => resp.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser,
    signUp,
  },
  messages: {
    fetchMessages,
    postMessage,
    deleteMessage,
  },
  journals: {
    fetchJournals,
    postJournal,
    deleteJournal,
    editJournal,
  },
  users: {
    getAllUsers,
  },
};
