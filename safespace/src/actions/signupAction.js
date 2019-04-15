import axios from "axios";

const baseUrl = "https://safespace-bw3.herokuapp.com";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAIL";

export const signup = signup => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(`${baseUrl}/api/register`, signup)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SIGNUP_FAILURE, payload: err }));
};
