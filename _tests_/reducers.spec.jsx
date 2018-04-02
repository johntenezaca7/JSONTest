import reducers from "../react/reducers";

test("NAME_INPUT", () => {
  let state;
  state = reducers(
    {
      name: "",
      score: 0,
      questions: []
    },
    { type: "NAME_INPUT", payload: "john" }
  );
  expect(state).toEqual({
    name: "john",
    score: 0,
    questions: []
  });
});

test("INCREMENT", () => {
  let state;
  state = reducers(
    {
      name: "john",
      score: 0,
      questions: []
    },
    { type: "INCREMENT", payload: 5 }
  );
  expect(state).toEqual({
    name: "john",
    score: 5,
    questions: []
  });
});

test("DECREMENT", () => {
  let state;
  state = reducers(
    {
      name: "john",
      score: 5,
      questions: []
    },
    { type: "DECREMENT", payload: 5 }
  );
  expect(state).toEqual({
    name: "john",
    score: 0,
    questions: []
  });
});

test("RESTART", () => {
  let state;
  state = reducers(
    {
      name: "john",
      score: 20,
      questions: []
    },
    { type: "RESTART", payload: 0 }
  );
  expect(state).toEqual({
    name: "john",
    score: 0,
    questions: []
  });
});
