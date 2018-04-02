import React from "react";
import jest from "jest";
import { shallow } from "enzyme";
import { Unwrapped as UnwrappedLanding } from "../react/Landing";

test("Landing Component renders correctly", () => {
  const component = shallow(
    <UnwrappedLanding handleNameInput={f => f} searchTerm={"test"} />
  );
  expect(component).toMatchSnapshot();
});
