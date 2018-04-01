import reducers from "../react/reducers";

test("SET_SEARCH_TERM", () => {
  let state;
  state = reducers(
    {
      searchTerm: "",
      score: 0,
      questions: []
    },
    { type: "SET_SEARCH_TERM", payload: "john" }
  );
  expect(state).toEqual({
    searchTerm: "john",
    score: 0,
    questions: []
  });
});

test("INCREMENT", () => {
  let state;
  state = reducers(
    {
      searchTerm: "john",
      score: 0,
      questions: []
    },
    { type: "INCREMENT", payload: 5 }
  );
  expect(state).toEqual({
    searchTerm: "john",
    score: 5,
    questions: []
  });
});

test("DECREMENT", () => {
  let state;
  state = reducers(
    {
      searchTerm: "john",
      score: 5,
      questions: []
    },
    { type: "DECREMENT", payload: 5 }
  );
  expect(state).toEqual({
    searchTerm: "john",
    score: 0,
    questions: []
  });
});

test("RESTART", () => {
  let state;
  state = reducers(
    {
      searchTerm: "john",
      score: 20,
      questions: []
    },
    { type: "RESTART", payload: 0 }
  );
  expect(state).toEqual({
    searchTerm: "john",
    score: 0,
    questions: []
  });
});
