import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/signupAction";

const initialSignupState = {
  isLoading: false,
  displayText: "sign up",
  error: ""
};

export const signupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        displayText: "Signing up..."
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registered: true,
        displayText: "Welcome!"
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        displayText: "Signup error",
        error: action.payload
      };
    default:
      return state;
  }
};
