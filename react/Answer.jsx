import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { incrementScore } from "./actionCreator";

const Answer = props => {
  const { choice, incScore, onClick, current } = props;

  const updateScore = () => {
    let score = choice[1];
    incScore(score);
  };

  const fireAll = () => {
    updateScore();
    onClick();
  };
  let isDone;

  if (current.done) {
    isDone = (
      <div className="answer-box" onClick={updateScore}>
        <Link to="/done">
          <p>{choice[0]}</p>
        </Link>
      </div>
    );
  } else {
    isDone = (
      <div className="answer-box" onClick={fireAll}>
        <p>{choice[0]}</p>
      </div>
    );
  }
  return isDone;
};

Answer.propTypes = {
  incScore: PropTypes.func,
  current: PropTypes.object,
  choice: PropTypes.array,
  onClick: PropTypes.func
};

const mapDispatchtoProps = dispatch => ({
  incScore(score) {
    dispatch(incrementScore(score));
  }
});

export const Unwrapped = Answer;

export default connect(null, mapDispatchtoProps)(Answer);
