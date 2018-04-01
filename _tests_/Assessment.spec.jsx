import React from "react";
import jest from "jest";
import { shallow, render } from "enzyme";
import { DEFAULT_STATE } from "../react/reducers/DefaultState";
import { Unwrapped as UnwrappedAssessment } from "../react/Assessment";
import Answer from "../react/Answer";

test("Assessment Component renders correctly with one question", () => {
  const component = shallow(
    <UnwrappedAssessment
      currentScore={20}
      decScore={f => f}
      questions={[
        {
          title: "1. Inside which HTML element do we put the JavaScript?",
          description: "",
          choices: [
            ["<script>", 5],
            ["<javascript>", 1],
            ["<scripting>", 1],
            ["<js>", 1]
          ],
          done: false
        }
      ]}
      name={"test"}
    />
  );
  expect(component).toMatchSnapshot();
});

test("Assessment Component renders the right about of answer choices.", () => {
  const component = shallow(
    <UnwrappedAssessment
      currentScore={20}
      decScore={f => f}
      questions={DEFAULT_STATE.questions}
      name={"test"}
    />
  );
  expect(component.find(Answer).length).toEqual(
    DEFAULT_STATE.questions[0].choices.length
  );
});
