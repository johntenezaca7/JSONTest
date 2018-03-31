import React from "react";
import { connect } from "react-redux";
import { updateCurrentScore } from "./actionCreator";

const Answer = props => {
  const onClick = () => {
    let score = props.choice[1];
    props.handleScore(score);
  };

  const fireAll = () => {
    onClick();
    props.onClick();
  };

  return (
    <div className="answer-box" onClick={fireAll}>
      <p>{props.choice[0]}</p>
    </div>
  );
};

const mapDispacthtoProps = (dispatch: Function) => ({
  handleScore(score) {
    console.log("Updateing score");
    dispatch(updateCurrentScore(score));
  }
});

export default connect(null, mapDispacthtoProps)(Answer);
