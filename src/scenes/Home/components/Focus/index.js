import React, { Component } from "react";
//import { MdCancel } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
//import { FaCircleNotch } from "react-icons/fa";
import "./styles.scss";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: "",
      input: "",
      line: "none",
      isChecked: false
    };
    this.onChange = this.onChange.bind(this);
    this.toggleLine = this.toggleLine.bind(this);
    this.onCompleteClick = this.onCompleteClick.bind(this);
    //this.toggleCheck = this.toggleCheck.bind(this);
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
        line: "line-through",

      }));
    } else {
      this.setState(() => ({ line: "none" }));
    }
    if(this.state.isChecked === "false") {
      this.setState(() => ({
        isChecked: "true"
      }));
    } else {
      this.setState(() => ({ isChecked: "false" }));
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

    const isChecked = this.state.isChecked;
    let checkIcon;

    if (isChecked) {
      checkIcon =  <FaRegCheckSquare  className="icon icon-checkbox focus-done"
                                      onClick={(e) => this.toggleLine(e)}
                                      />;
    } else {
      checkIcon = <FaRegSquare  className="icon icon-checkbox-empty focus-open"
                                onClick={(e) => this.toggleLine(e)} //Write a different function to uncheck box or prev state...
                                />;
    }

    return (

    <div >
      <div className="focus-wrapper focuses">

        {this.state.focus ? (
          <React.Fragment>
            <div className="focus-complete">
              <h4 className="focus-title">TODAY</h4>
                <div className="focus-row">
		              <span className="control checkbox">

                  {checkIcon} 
            
                    </span>
                  <h3 className="focus-todays-focus" 
                        data-test="focus-active"
                        style={{ textDecoration: this.state.line }}
                        >
                  {this.state.focus}
                    </h3>

	                <span className="control delete">
                  <span className="icon-wrapper dash-icon">
                    {/*<i class="icon icon-delete">✕</i>*/}
                  </span>
                  </span>
                  <MdClear className="focus-icon-clear" onClick={this.onCompleteClick} />
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

        {/* To be added... 
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
