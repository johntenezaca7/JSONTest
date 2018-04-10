import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

console.log("inital state", store.getState());
export default store;
