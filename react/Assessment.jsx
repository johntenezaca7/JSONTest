import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { decrementScore } from "./actionCreator";
import Answer from "./Answer";

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      testNum: 1,
      current: this.props.questions[0],
      savedScore: ""
    };

    this.onRightClick = this.onRightClick.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.run = this.run.bind(this);
  }

  run(direction) {
    let nextValue, questions;

    if (direction === "right") {
      if (this.state.index <= 4) {
        this.state.index += 1;
        this.state.testNum += 1;

        nextValue = this.state.index;
        questions = this.props.questions;

        this.setState((prev, next) => {
          let savedVal = prev.savedScore ? prev.savedScore : next.currentScore;
          return {
            current: questions[nextValue],
            savedScore: savedVal
          };
        });
      }
    } else if (direction === "left") {
      if (this.state.index !== 0) {
        this.state.index -= 1;
        this.state.testNum -= 1;

        nextValue = this.state.index;
        questions = this.props.questions;

        this.setState((prev, next) => {
          return {
            current: questions[nextValue],
            savedScore: prev.savedScore
          };
        });
      }
    }
  }

  onRightClick() {
    this.run("right");
  }

  onLeftClick() {
    this.run("left");
    this.props.decScore(this.state.savedScore);
  }

  render() {
    const { name } = this.props;
    const { testNum, current } = this.state;

    let checkName;
    let checkNav;

    if (name) {
      checkName = name;
    } else {
      checkName = "Anonymous";
    }

    if (testNum === 1) {
      checkNav = <div />;
    } else {
      checkNav = (
        <img
          onClick={this.onLeftClick}
          src="https://image.ibb.co/jyA5n7/prev.png"
          alt="Back"
        />
      );
    }
    return (
      <div className="test-display">
        <h2>Welcome {checkName}!</h2>
        <div className="test-box">
          <div className="container">
            <div className="back-n-count">
              {checkNav}
              <p>Step {testNum} of 4</p>
            </div>
            <div className="test-details">
              <h4>{current.title}</h4>
              <p>{current.description}</p>
            </div>
            <div className="answers">
              {current.choices.map((ele, i) => {
                return (
                  <Answer
                    choice={ele}
                    key={i}
                    onClick={this.onRightClick}
                    current={this.state.current}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  name: state.searchTerm,
  currentScore: state.score
});

const mapDispatchtoProps = dispatch => ({
  decScore(score) {
    dispatch(decrementScore(score));
  }
});

Assessment.propTypes = {
  currentScore: PropTypes.number,
  decScore: PropTypes.func,
  questions: PropTypes.array,
  name: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchtoProps)(Assessment);
