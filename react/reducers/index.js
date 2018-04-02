import { NAME_INPUT, INCREMENT, DECREMENT, RESTART } from "../actions";
import { DEFAULT_STATE } from "./DefaultState";

const setName = (state, action) => {
  return Object.assign({}, state, { name: action.payload });
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
    case NAME_INPUT:
      return setName(state, action);
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
