import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./Landing";
import Test from "./Assessment";
import Done from "./Done";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <Landing />} />
      <Route exact path="/assessment" component={props => <Test />} />
      <Route exact path="/done" component={props => <Done />} />
    </div>
  </Provider>
);

export default App;
