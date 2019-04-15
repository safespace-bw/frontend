import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../actions";

const initialSignupState = {
  isLoading: false,
  displayText: "sign up",
  error: ""
};

export const signupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case SEND_SIGNUP:
      return {
        ...state,
        isLoading: true,
        displayText: "signing up..."
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registered: true,
        displayText: "welcome!"
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        displayText: "error",
        error: action.payload
      };
    default:
      return state;
  }
};
