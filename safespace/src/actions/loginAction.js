import axios from "axios";

const baseUrl = "https://safespace-bw3.herokuapp.com";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${baseUrl}/api/auth/login`, creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.user_id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
