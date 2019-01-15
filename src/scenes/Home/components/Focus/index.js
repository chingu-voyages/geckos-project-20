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

    <div >
      <div className="focus-wrapper focuses">

        {this.state.focus ? (
          <React.Fragment>
            <div className="focus-complete">
              <h3 className="focus-title">TODAY</h3>
                <div className="focus-row">
		              <span className="control checkbox">
                    {/*<i className="icon icon-checkbox-empty focus-open"></i>
                    <i className="icon icon-checkbox focus-done"></i>*/}
                    </span>
                  <h3 className="focus-todays-focus" 
                        data-test="focus-active"
                        style={{ textDecoration: this.state.line }}
                        onClick={e => this.toggleLine(e)}>
                  {this.state.focus}
                    </h3>

	                <span className="control delete">
                  <span className="icon-wrapper dash-icon">
                    {/*<i class="icon icon-delete">✕</i>*/}
                  </span>
                  </span>
                  <FaPlus onClick={this.onCompleteClick} />
                  </div>
                </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
            <h3>What is your main focus for today?</h3>
            <form onSubmit={e => this.onSubmit(e)}>
              <input className="focus-prompt" type="text" onChange={e => this.onChange(e)} />
            </form>
            </div>
          </React.Fragment>
        )}

        {/* To be added 
        <div className="team-focus-wrapper"></div>

<div className="focus-message-wrapper">
	<div className="message focus-message">

	</div>
</div>
        */}
      </div>
      </div>
      
    );
  }
}

export default Focus;
