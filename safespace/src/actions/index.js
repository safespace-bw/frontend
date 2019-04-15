import axios from "axios";
import axiosAuth from "../utils/axiosAuth";

const baseUrl = "https://herokuapp.com";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = signup => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(`${baseUrl}/api/register`, signup)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err }));
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${baseUrl}/api/login`, creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const FETCH_MESSAGES_START = "FETCH_MESSAGES_START";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";
export const ADD_MESSAGE_START = "ADD_MESSAGE_START";
export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS";
export const ADD_MESSAGE_FAILURE = "ADD_MESSAGE_FAILURE";

export const fetchMessages = () => dispatch => {
  dispatch({ type: FETCH_MESSAGES_START });
  return axiosAuth()
    .get(`${baseUrl}/api/users/messages`)
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
    .post(`${baseUrl}/api/users/messages`, message)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_MESSAGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: ADD_MESSAGE_FAILURE, payload: err }));
};
