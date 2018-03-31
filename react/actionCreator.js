import { SET_SEARCH_TERM, UPDATE_SCORE } from "./actions";

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function updateCurrentScore(score) {
  return { type: UPDATE_SCORE, payload: score };
}
