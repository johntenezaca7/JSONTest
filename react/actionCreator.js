import { NAME_INPUT, INCREMENT, DECREMENT, RESTART } from "./actions";

export function nameInput(name) {
  return { type: NAME_INPUT, payload: name };
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
