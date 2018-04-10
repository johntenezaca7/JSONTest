import { combineReducers } from "redux";
import NameReducer from "../reducers/NameReducer";
import ScoreReducer from "../reducers/ScoreReducer";
import QuestionsReducer from "../reducers/QuestionsReducer";

export default combineReducers({
  nameReducer: NameReducer,
  scoreReducer: ScoreReducer,
  questions: QuestionsReducer
});
