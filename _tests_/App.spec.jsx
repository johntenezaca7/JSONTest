import React from "react";
import jest from "jest";
import { shallow } from "enzyme";
import App from "../react/App";

test("App Component renders correctly", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
