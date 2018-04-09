import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { nameInput } from "./actionCreator";

const Landing = props => {
  const { handleNameInput, name } = props;
  return (
    <div className="landing-video">
      <div className="fullscreen-video">
        <video
          src="https://www.videvo.net/videvo_files/converted/2014_05/preview/Typing_on_Keyboard_2821_Videvo.mov46902.webm"
          autoPlay="true"
          loop="true"
        />
      </div>
      <div className="video-overlay" />
      <div className="landing">
        <h2>HubJS</h2>
        <div className="inside-landing">
          <div className="GetName">Please enter your name!</div>
          <input
            onChange={handleNameInput}
            value={name}
            type="text"
            placeholder="Name"
          />
          <br />
          <Link to="/assessment">
            <button className="landing-btn">
              Enter
            </button>
          </Link>
        </div>
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
