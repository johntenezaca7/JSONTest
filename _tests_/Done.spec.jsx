import React from "react";
import jest from "jest";
import { shallow } from "enzyme";
import { Unwrapped as UnwrappedDone } from "../react/Done";
import { StaticRouter } from "react-router-dom";

test("Done Component renders correctly", () => {
  const component = shallow(
    <UnwrappedDone score={20} takeTestAgain={f => f} />
  );
  expect(component).toMatchSnapshot();
});
