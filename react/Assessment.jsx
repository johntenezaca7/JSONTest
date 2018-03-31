import React, { Component } from "react";
import { connect } from "react-redux";
import Answer from "./Answer";

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      testNum: 1,
      current: this.props.questions[0]
    };

    this.onRightClick = this.onRightClick.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.run = this.run.bind(this);
  }

  run(direction) {
    if (direction === "right") {
      if (this.state.index <= 4) {
        this.state.index += 1;
        this.state.testNum += 1;

        let nextValue = this.state.index;
        let questions = this.props.questions;
        console.log("nextVA", nextValue);
        console.log("qyestions", questions);
        this.setState({
          current: questions[nextValue]
        });
      }
    } else if (direction === "left") {
      if (this.state.index !== 0) {
        this.state.index -= 1;
        this.state.testNum -= 1;

        let nextValue = this.state.index;
        let questions = this.props.questions;

        this.setState({
          current: questions[nextValue]
        });
      }
    }
  }

  onRightClick() {
    this.run("right");
  }

  onLeftClick() {
    this.run("left");
  }

  render() {
    let checkName;
    let checkNav;

    if (this.props.name) {
      checkName = this.props.name;
    } else {
      checkName = "Anonymous";
    }

    if (this.state.testNum === 1) {
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
    console.log("score", this.props.currentScore);
    return (
      <div className="test-display">
        <h2>Welcome {checkName}!</h2>
        <div className="test-box">
          <div className="container">
            <div className="back-n-count">
              {checkNav}
              <p>Step {this.state.testNum} of 4</p>
            </div>
            <div className="test-details">
              <h4>{this.state.current.title}</h4>
              <p>{this.state.current.description}</p>
            </div>
            <div className="answers">
              {this.state.current.choices.map((ele, i) => {
                return (
                  <Answer choice={ele} key={i} onClick={this.onRightClick} />
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

export default connect(mapStateToProps)(Assessment);
