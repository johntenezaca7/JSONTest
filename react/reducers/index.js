import { combineReducers } from "redux";
import { SET_SEARCH_TERM, INCREMENT, DECREMENT, RESTART } from "../actions";
import { DEFAULT_STATE } from "./DefaultState";

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const incScore = (state, action) => {
  return Object.assign({}, state, { score: state.score + action.payload });
};

const decScore = (state, action) => {
  return Object.assign({}, state, { score: state.score - action.payload });
};

const restart = (state, action) => {
  return Object.assign({}, state, { score: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case INCREMENT:
      return incScore(state, action);
    case DECREMENT:
      return decScore(state, action);
    case RESTART:
      return restart(state, action);
    default:
      return state;
  }
};

export default rootReducer;
