// This combines all reducers into rootReducer
import { combineReducers } from "redux";

import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";
import { messageListReducer } from "./messageListReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  list: messageListReducer
});

export default rootReducer;
