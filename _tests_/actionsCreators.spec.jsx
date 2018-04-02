import {
  nameInput,
  incrementScore,
  decrementScore,
  restart
} from "../react/actionCreator";

import jest from "jest";

test("nameInput", () => {
  expect(nameInput("John")).toMatchSnapshot();
});

test("incrementScore", () => {
  expect(incrementScore(5)).toMatchSnapshot();
});

test("decrementScore", () => {
  expect(decrementScore(5)).toMatchSnapshot();
});

test("restart", () => {
  expect(restart()).toMatchSnapshot();
});
