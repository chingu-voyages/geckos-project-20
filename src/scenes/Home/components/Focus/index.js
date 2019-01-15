import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import "./styles.scss";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: "",
      input: "",
      line: "none"
    };
    this.onChange = this.onChange.bind(this);
    this.toggleLine = this.toggleLine.bind(this);
    this.onCompleteClick = this.onCompleteClick.bind(this);
  }

  componentDidMount() {
    let focus = localStorage.getItem("focus");
    if (focus) {
      this.setState(() => ({
        focus
      }));
    }
  }
  onChange = e => {
    const value = e.target.value;
    this.setState(e => ({ input: value }));
  };

  toggleLine = e => {
    if (this.state.line === "none") {
      this.setState(() => ({
        line: "line-through"
      }));
    } else {
      this.setState(() => ({ line: "none" }));
    }
  };

  onCompleteClick = () => {
    localStorage.removeItem("focus");
    this.setState(() => ({
      focus: ""
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    localStorage.setItem("focus", this.state.input);
    this.setState(() => ({
      input: "",
      focus: this.state.input
    }));
  };

  render() {

    return (

    <div className="app-container has-dash-icon focuses shadow">
      <div className="focus-wrapper">
      <div class="prompt">
        {this.state.focus ? (
          <React.Fragment>
            <p>TODAY</p>
            <div className="focus__current">
              <p
                style={{ textDecoration: this.state.line }}
                onClick={e => this.toggleLine(e)}
              >
                {this.state.focus}
              </p>
              <FaPlus onClick={this.onCompleteClick} />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>What is your main focus for today?</h3>
            <form onSubmit={e => this.onSubmit(e)}>
              <input type="text" onChange={e => this.onChange(e)} />
            </form>
          </React.Fragment>
        )}
        {/*
        <div class="team-focus-wrapper"></div>

<div class="focus-message-wrapper">
	<div class="message focus-message" data-test="focus-message">

	</div>
</div>
        */}
      </div>
      </div>
      </div>
    );
  }
}

export default Focus;
