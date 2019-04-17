import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialLoginState = {
  token: "",
  id: "",
  displayText: "Log In",
  loggedIn: false,
  isLoading: false
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        displayText: "Logging In..."
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.user_id,
        loggedIn: true,
        isLoading: false,
        displayText: "Welcome!"
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        displayText: "Login Error"
      };
    default:
      return state;
  }
};
