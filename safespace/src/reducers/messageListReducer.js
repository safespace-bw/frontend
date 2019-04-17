import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_START,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  UPDATE_MESSAGE_START,
  UPDATE_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_FAILURE,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE
} from "../actions";

const initialMessageListState = {
  messages: [],
  fetchingMessages: false,
  addingMessage: false,
  updatingMessage: false,
  deletingMessage: false,
  error: null
};

export const messageListReducer = (state = initialMessageListState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      console.log("fetch message start:", action.payload);
      return {
        ...state,
        fetchingMessages: true,
        error: ""
      };
    case FETCH_MESSAGES_SUCCESS:
      console.log("fetch messages success:", action.payload);
      return {
        ...state,
        fetchingMessages: false,
        messages: action.payload,
        error: ""
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
        addingMessage: true,
        error: ""
      };
    case ADD_MESSAGE_SUCCESS:
      console.log("add message success:", action.payload);
      return {
        ...state,
        addingMessage: false,
        messages: [...state.messages, action.payload],
        error: ""
      };
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        addingMessage: false,
        error: action.payload
      };
    case UPDATE_MESSAGE_START:
      return {
        ...state,
        updatingMessage: true,
        error: ""
      };
    case UPDATE_MESSAGE_SUCCESS:
      return {
        ...state,
        updatingMessage: false,
        error: ""
      };
    case UPDATE_MESSAGE_FAILURE:
      return {
        ...state,
        updatingMessage: false,
        error: action.payload
      };
    case DELETE_MESSAGE_START:
      return {
        ...state,
        deletingMessage: true,
        error: ""
      };
    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        deletingMessage: false,
        error: ""
      };
    case DELETE_MESSAGE_FAILURE:
      return {
        ...state,
        deletingMessage: false,
        error: action.payload
      };

    default:
      return state;
  }
};
