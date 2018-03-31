import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "./actionCreator";

const Landing = props => (
  <div className="landing">
    <div className="inside-landing">
      <h2>Please enter your name!</h2>
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
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

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispacthtoProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispacthtoProps)(Landing);
