import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { nameInput } from "./actionCreator";

const Landing = props => {
  const { handleNameInput, name } = props;
  return (
    <div className="landing">
      <div className="inside-landing">
        <h2>Please enter your name!</h2>
        <input
          onChange={handleNameInput}
          value={name}
          type="text"
          placeholder="Enter your name here"
        />
        <br />
        <Link to="/assessment">
          <button className="landing-btn">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

Landing.propTypes = {
  handleNameInput: PropTypes.func,
  name: PropTypes.string
};

const mapStateToProps = state => ({ name: state.name });

const mapDispatchtoProps = dispatch => ({
  handleNameInput(event) {
    dispatch(nameInput(event.target.value));
  }
});

export const Unwrapped = Landing;

export default connect(mapStateToProps, mapDispatchtoProps)(Landing);
