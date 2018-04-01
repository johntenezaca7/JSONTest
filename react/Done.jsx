import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { restart } from "./actionCreator";

const Done = props => {
  const { score, takeTestAgain } = props;
  return (
    <div className="done">
      <h1>Your score is {score} out of 20.</h1>
      <button onClick={takeTestAgain}>
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

Done.propTypes = {
  score: PropTypes.number,
  takeTestAgain: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchtoProps)(Done);
