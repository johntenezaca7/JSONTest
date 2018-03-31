import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { incrementScore } from "./actionCreator";

const Answer = props => {
  const updateScore = () => {
    let score = props.choice[1];
    props.handleScore(score);
  };

  const fireAll = () => {
    updateScore();
    props.onClick();
  };
  let isDone;

  if (props.current.done) {
    isDone = (
      <div className="answer-box" onClick={updateScore}>
        <Link to="/done">
          <p>{props.choice[0]}</p>
        </Link>
      </div>
    );
  } else {
    isDone = (
      <div className="answer-box" onClick={fireAll}>
        <p>{props.choice[0]}</p>
      </div>
    );
  }
  return isDone;
};

const mapDispatchtoProps = dispatch => ({
  handleScore(score) {
    dispatch(incrementScore(score));
  }
});

export default connect(null, mapDispatchtoProps)(Answer);
