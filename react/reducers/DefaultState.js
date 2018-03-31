export const DEFAULT_STATE = {
  searchTerm: "",
  score: 0,
  questions: [
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
    },
    {
      title: "2. What is the correct way to write a JavaScript array?",
      description: "",
      choices: [
        ["var colors = (1:'red', 2:'green', 3:'blue')", 1],
        ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", 1],
        ["var colors = 'red', 'green', 'blue'", 1],
        ["var colors = ['red', 'green', 'blue']", 5]
      ],
      done: false
    },
    {
      title: "3. How do you find the number with the highest value of x and y?",
      description: "",
      choices: [
        ["Math.ceil(x, y)", 1],
        ["ceil(x, y)", 1],
        ["top(x, y)", 1],
        ["Math.max(x, y)", 5]
      ],
      done: false
    },
    {
      title: "4. What is React?",
      description: "React is a front end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI. Even though, it was open-sourced only in 2015, it has one of the largest communities supporting it.",
      choices: [["Yes", 5], ["No", 0]],
      done: true
    }
  ]
};
