import { combineReducers } from "redux";
import { SET_SEARCH_TERM, UPDATE_SCORE } from "../actions";
import { DEFAULT_STATE } from "./DefaultState";

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const updateScore = (state, action) => {
  return Object.assign({}, state, { score: state.score + action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case UPDATE_SCORE:
      return updateScore(state, action);
    default:
      return state;
  }
};

export default rootReducer;
