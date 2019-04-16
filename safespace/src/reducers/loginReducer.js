import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialLoginState = {
  token: "",
  id: "",
  loggedIn: false,
  isLoading: false
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id,
        loggedIn: true,
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
