import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_START,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE
} from "../actions";

const initialMessageListState = {
  messages: {
    user_id: "",
    body: "",
    scheduled: ""
  },
  fetchingMessages: false,
  addingMessage: false,
  // updatingMessage: false,
  // deletingMessage: false,
  error: null
};

export const messageListReducer = (state = initialMessageListState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      return {
        ...state,
        fetchingMessages: true,
        error: ""
      };
    case FETCH_MESSAGES_SUCCESS:
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
        error: "",
        messages: {
          user_id: state.messages.user_id,
          body: state.messages.body,
          scheduled: state.messages.scheduled
        }
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        addingMessage: false,
        messages: action.payload,
        error: ""
      };
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        addingMessage: false,
        error: action.payload
      };

    default:
      return state;
  }
};
