import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { restart } from "./actionCreator";

const Done = props => {
  return (
    <div className="done">
      <h1>Your score is {props.score} out of 20.</h1>
      <button onClick={props.takeTestAgain}>
        <Link to="/assessment">
          Take it again!
        </Link>
      </button>
    </div>
  );
};

const mapStateToProps = state => ({ score: state.score });

const mapDispatchtoProps = dispatch => ({
  takeTestAgain() {
    dispatch(restart());
  }
});

export default connect(mapStateToProps, mapDispatchtoProps)(Done);
