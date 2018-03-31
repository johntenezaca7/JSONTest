import React, { Component } from "react";
import { connect } from "react-redux";

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      testNum: 1,
      current: this.props.questions[0]
    };

    this.onRightClick = this.onRightClick.bind(this);
    this.onLeftClick = this.onRightClick.bind(this);
  }

  onRightClick() {
    console.log("clicking right");
    if (this.state.index <= 5) {
      this.state.index += 1;
      this.state.testNum += 1;

      let cur = this.state.index;
      let next = this.props.questions;

      this.setState({
        current: next[cur]
      });
    }
  }

  onLeftClick() {
    if (this.state.idx !== 0) {
      this.state.idx -= 1;
      let cur = this.state.idx;
      let next = this.props.data;
      this.setState({
        current: next[cur]
      });
    }
  }

  render() {
    console.log("state", this.state);
    let checkName;
    let checkNav;

    if (this.props.name) {
      checkName = this.props.name;
    } else {
      checkName = "Anonymous";
    }

    if (this.state.num === 1) {
      checkNav = null;
    } else {
      checkNav = <div onClick={this.onLeftClick} />;
    }

    return (
      <div className="test-display">
        <h2>Welcome {checkName}!</h2>
        {checkNav}
        <p>Step {this.state.testNum} of 4</p>
        <div className="test-box">
          <h4>{this.state.current.title}</h4>
          <p>{this.state.current.description}</p>
          <div onClick={this.onRightClick}>
            next
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  name: state.searchTerm
});

export default connect(mapStateToProps)(Assessment);
