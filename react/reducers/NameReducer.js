import { NAME_INPUT } from "../actions";

const NAME = {
  name: ""
};

const setName = (state, action) => {
  console.log("action", action);
  return Object.assign({}, state, { name: action.payload });
};

export default function(state = NAME, action) {
  switch (action.type) {
    case NAME_INPUT:
      return setName(state, action);
    default:
      return state;
  }
}
