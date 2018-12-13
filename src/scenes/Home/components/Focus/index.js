import React, { Component } from "react";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: "",
      input: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
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

  onClick = () => {
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
      <div>
        {this.state.focus ? (
          <React.Fragment>
            <p>TODAY</p>
            <p onClick={() => this.onClick()}>{this.state.focus}</p>
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
