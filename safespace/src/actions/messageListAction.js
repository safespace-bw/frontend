import axios from "axios";

const baseUrl = "https://safespace-bw3.herokuapp.com";

export const FETCH_MESSAGES_START = "FETCH_MESSAGES_START";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";
export const ADD_MESSAGE_START = "ADD_MESSAGE_START";
export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS";
export const ADD_MESSAGE_FAILURE = "ADD_MESSAGE_FAILURE";
export const UPDATE_MESSAGE_START = "UPDATE_MESSAGE_START";
export const UPDATE_MESSAGE_SUCCESS = "UPDATE_MESSAGE_SUCCESS";
export const UPDATE_MESSAGE_FAILURE = "UPDATE_MESSAGE_FAILURE";
export const DELETE_MESSAGE_START = "DELETE_MESSAGE_START";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAILURE = "DELETE_MESSAGE_FAILURE";

export const fetchMessages = () => dispatch => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      id: `${id}`
    }
  };
  dispatch({ type: FETCH_MESSAGES_START });
  return axios
    .get(`${baseUrl}/api/messages`, headers)
    .then(res => {
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: FETCH_MESSAGES_FAILURE, payload: err }));
};
export const addMessage = message => dispatch => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      id: `${id}`
    }
  };

  dispatch({ type: ADD_MESSAGE_START });
  console.log("message", message);
  return axios
    .post(`${baseUrl}/api/messages`, message, headers)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_MESSAGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: ADD_MESSAGE_FAILURE, payload: err }));
};
export const updateMessage = (postId, message) => dispatch => {
  console.log("post id:", postId);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      id: `${id}`
    }
  };
  dispatch({ type: UPDATE_MESSAGE_START });
  return axios
    .put(`${baseUrl}/api/messages/${postId}`, message, headers)
    .then(res => dispatch({ type: UPDATE_MESSAGE_SUCCESS, payload: res.data }))
    .then(() => fetchMessages()(dispatch))
    .catch(err => dispatch({ type: UPDATE_MESSAGE_FAILURE, payload: err }));
};

export const deleteMessage = postId => dispatch => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      id: `${id}`
    }
  };
  dispatch({ type: DELETE_MESSAGE_START });
  return axios
    .delete(`${baseUrl}/api/messages/${postId}`, headers)
    .then(res => dispatch({ type: DELETE_MESSAGE_SUCCESS, payload: res.data }))
    .then(() => fetchMessages()(dispatch))
    .catch(err => dispatch({ type: DELETE_MESSAGE_FAILURE, payload: err }));
};
