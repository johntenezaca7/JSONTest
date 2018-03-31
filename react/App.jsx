import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./Landing";
import Test from "./Assessment";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <Landing />} />
      <Route exact path="/assessment" component={props => <Test />} />
    </div>
  </Provider>
);

export default App;
