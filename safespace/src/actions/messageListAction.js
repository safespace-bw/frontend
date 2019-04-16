import axiosAuth from "../utils/axiosAuth";
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

export const fetchMessages = id => dispatch => {
  dispatch({ type: FETCH_MESSAGES_START });
  return axiosAuth()
    .get(`${baseUrl}/api/messages/${id}`)
    .then(res => {
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: FETCH_MESSAGES_FAILURE, payload: err }));
};
export const addMessage = message => dispatch => {
  dispatch({ type: ADD_MESSAGE_START });
  return axiosAuth()
    .post(`${baseUrl}/api/messages`, message)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_MESSAGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: ADD_MESSAGE_FAILURE, payload: err }));
};
export const updateMessage = (postId, userId, x) => dispatch => {
  dispatch({ type: UPDATE_MESSAGE_START });
  return axiosAuth()
    .put(`${baseUrl}/api/messages/${postId}`, x)
    .then(res => dispatch({ type: UPDATE_MESSAGE_SUCCESS, payload: res.data }))
    .then(() => fetchMessages(userId)(dispatch))
    .catch(err => dispatch({ type: UPDATE_MESSAGE_FAILURE, payload: err }));
};

export const deleteMessage = (id, userId) => dispatch => {
  dispatch({ type: DELETE_MESSAGE_START });
  return axiosAuth()
    .delete(`${baseUrl}/api/messages/${id}`)
    .then(res => dispatch({ type: DELETE_MESSAGE_SUCCESS, payload: res.data }))
    .then(() => fetchMessages(userId)(dispatch))
    .catch(err => dispatch({ type: DELETE_MESSAGE_FAILURE, payload: err }));
};
