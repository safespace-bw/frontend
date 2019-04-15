/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_START,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "../actions";

const initialListState = {
  messages: [],
  fetchingMessages: false,
  addingMessage: false,
  updatingMessage: false,
  deletingMessage: false,
  error: null
};

const rootReducer = (state = initialListState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      return {
        ...state,
        fetchingMessages: true
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingMessages: false,
        smurfs: action.payload
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        fetchingMessages: false,
        error: action.payload
      };
    case ADD_MESSAGE_START:
      return {
        ...state,
        fetchingMessages: true
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        fetchingMessages: false,
        smurfs: action.payload
      };
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        fetchingMessages: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
