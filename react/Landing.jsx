import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "./actionCreator";

const Landing = props => (
  <div className="landing">
    <h1>Please enter your name!</h1>
    <input
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
      type="text"
      placeholder="Search"
    />
    <Link to="/assessment">
      Enter
    </Link>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispacthtoProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispacthtoProps)(Landing);
