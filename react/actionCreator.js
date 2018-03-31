import { SET_SEARCH_TERM, INCREMENT, DECREMENT, RESTART } from "./actions";

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function incrementScore(score) {
  return { type: INCREMENT, payload: score };
}

export function decrementScore(score) {
  return { type: DECREMENT, payload: score };
}

export function restart() {
  return { type: RESTART, payload: 0 };
}
