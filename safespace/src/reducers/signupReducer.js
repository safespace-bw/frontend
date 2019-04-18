import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/signupAction";

const initialSignupState = {
  registered: false,
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
          id: state.user.id,
          username: state.user.username,
          password: state.user.password,
          created: state.user.created
        },
        token: state.token
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        registered: true,
        displayText: "Signed Up!"
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
