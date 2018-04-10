import { INCREMENT, DECREMENT, RESTART } from "../actions";

const SCORE = {
  score: 0
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

export default function(state = SCORE, action) {
  switch (action.type) {
    case INCREMENT:
      return incScore(state, action);
    case DECREMENT:
      return decScore(state, action);
    case RESTART:
      return restart(state, action);
    default:
      return state;
  }
}
