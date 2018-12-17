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
      <div className="focus__container">
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
            <p>What is your main focus for today?</p>
            <form onSubmit={e => this.onSubmit(e)}>
              <input type="text" onChange={e => this.onChange(e)} />
            </form>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Focus;
