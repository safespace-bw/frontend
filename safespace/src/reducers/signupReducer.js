import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/signupAction";

const initialSignupState = {
  isLoading: false,
  displayText: "Sign Up",
  error: "",
  user: {
    id: "",
    username: "",
    password: "",
    created: ""
  },
  token: ""
};

export const signupReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        displayText: "Signing up...",
        user: {
          id: this.state.id,
          username: this.state.username,
          password: this.state.password,
          created: this.state.created
        },
        token: action.payload.token
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
