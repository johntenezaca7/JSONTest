import {
  setSearchTerm,
  incrementScore,
  decrementScore,
  restart
} from "../react/actionCreator";

import jest from "jest";

test("setSearchTerm", () => {
  expect(setSearchTerm("John")).toMatchSnapshot();
});

test("incrementScore", () => {
  expect(setSearchTerm(5)).toMatchSnapshot();
});

test("decrementScore", () => {
  expect(setSearchTerm(5)).toMatchSnapshot();
});

test("restart", () => {
  expect(setSearchTerm()).toMatchSnapshot();
});
