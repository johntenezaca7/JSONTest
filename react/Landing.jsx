import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "./actionCreator";

const Landing = props => {
  const { handleSearchTermChange, searchTerm } = props;
  return (
    <div className="landing">
      <div className="inside-landing">
        <h2>Please enter your name!</h2>
        <input
          onChange={handleSearchTermChange}
          value={searchTerm}
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
  handleSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchtoProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export const Unwrapped = Landing;

export default connect(mapStateToProps, mapDispatchtoProps)(Landing);
