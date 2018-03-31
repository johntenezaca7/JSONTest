import { SET_SEARCH_TERM } from "../actions";

const DEFAULT_STATE = {
  searchTerm: "",
  score: 0,
  questions: [
    {
      title: "What is React?",
      description: "React is a front end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI. Even though, it was open-sourced only in 2015, it has one of the largest communities supporting it.",
      choices: {
        one: ["Yes", 2],
        two: ["No", 0]
      }
    },
    {
      title: "Two",
      description: "Three",
      choices: {
        one: ["Yes", 0],
        two: ["No", 5],
        three: ["three", 0],
        four: ["four", 0]
      }
    },
    {
      title: "Three",
      description: "Three",
      choices: {
        one: ["Yes", 0],
        two: ["No", 5],
        three: ["three", 0],
        four: ["four", 0]
      }
    },
    {
      title: "Four",
      description: "Four",
      choices: {
        one: ["Yes", 0],
        two: ["No", 5],
        three: ["three", 0],
        four: ["four", 0]
      }
    }
  ]
};

const setSearchTerm = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

// Top level reducer for any store, no side effects, fully functional, needs to take care of defualt state
export default rootReducer;
