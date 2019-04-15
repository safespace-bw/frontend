import axiosAuth from "../utils/axiosAuth";

const baseUrl = "https://safespace-bw3.herokuapp.com";

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
