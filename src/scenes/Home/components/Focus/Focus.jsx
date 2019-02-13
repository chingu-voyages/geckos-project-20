import React, { Component } from "react";
import { GoPlus } from "react-icons/go";
import { GoX } from "react-icons/go";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa"; //Loading Icon
import "./styles.scss";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: "",
      input: "",
      line: "none",
      isChecked: false,
      isHovered: false
    };
    this.onChange = this.onChange.bind(this);
    this.toggleLine = this.toggleLine.bind(this);
    this.onCompleteClick = this.onCompleteClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
    this.setState((prevState) =>
    ({
     isChecked: !prevState.isChecked
   })
  )
  };
  

  onCompleteClick = () => {
    localStorage.removeItem("focus");
    this.setState(() => ({
      focus: "",
      line: "none",
      isChecked: false,
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

  handleMouseLeave() {
    this.setState({ 
			isHovered: false 
		  });
  };

  handleMouseEnter() {
    this.setState({ 
			isHovered: true
		  });
  };

  render() {

    const isChecked = this.state.isChecked;
    let checkIcon;
    let clearPlusIcon;
    
    let control;
    if (this.state.isHovered) {
      control = {opacity: '1'}
    } else {
      control = {opacity: '0'}
    }

    if (isChecked) {
      checkIcon =  <FaRegCheckSquare  className="control focus-icon-checkbox"
                                      onClick={(e) => this.toggleLine(e)}
                                      style={control}
                                      />;
      clearPlusIcon = <GoPlus className="control focus-icon-plus" 
                              onClick= {this.onCompleteClick}
                              style={control} />;

    } else {
      checkIcon = <FaRegSquare  className="control focus-icon-checkbox-empty"
                                onClick={(e) => this.toggleLine(e)}
                                style={control}
                                />;

      clearPlusIcon = <GoX  className="control focus-icon-clear" 
                            onClick={this.onCompleteClick}
                            style={control} />;
    }

    return (

      <div className="focus-wrapper focuses">

        {this.state.focus ? (
          <React.Fragment>
            <div className="focus-complete">
              <h4 className="focus-title">TODAY</h4>

                <div  className="focus-row"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}>
                    
                      <div>
                <div className="focus-content">
                {checkIcon} 
                  <h3 className="focus-todays-focus"
                        style={{ textDecoration: this.state.line }}
                        >
                  {this.state.focus}
                    </h3>
                  {clearPlusIcon}
                  </div>

                  {isChecked && 
                    <div className="focus-message">
                      <FaCircleNotch className="focus-icon-spin"/>
                      Way to go!
                      </div>   
                  }
                  </div>
                    
                  </div>
                </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
            <h3 className="focus-prompt-title">What is your main focus for today?</h3>
            <form onSubmit={e => this.onSubmit(e)}>
              <input className="focus-prompt" type="text" onChange={e => this.onChange(e)} />
            </form>
            </div>
          </React.Fragment>
        )}
      </div>
      
    );
  }
}

export default Focus;