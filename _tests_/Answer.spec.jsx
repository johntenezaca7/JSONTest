import React from "react";
import jest from "jest";
import renderer from "react-test-renderer";
import { Unwrapped as UnwrappedAnswer } from "../react/Answer";

test("Answer Component renders correctly", () => {
  const component = renderer.create(
    <UnwrappedAnswer
      incScore={f => f}
      current={{}}
      choice={[]}
      onClick={f => f}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
