import React, { Component } from "react";
import './styles.scss';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <Introduction />;
}

function Introduction(props) {
  return (
    <div className="introduction">
      <div className="introduction-content">
        <div className="introduction-content__question">
          {this.state.question}
        </div>
        <div className="introduction-content__input">
          <input id="introduction-input" type="text" onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
        </div>
      </div>
    </div>
  );
} 

function UserGreeting(props) {
  return (
    <div className="center">
      <div className="app-container clock">
        <div className="clock-time">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <div className="clock-greeting">{this.state.greeting}, {this.state.name}.</div>
      </div>
    </div>
  );
}
class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: `Hello, what's your name?`,
      date: new Date(),
      greeting: "",
      name: null
    };
  }

  componentDidMount() {
   this.timer = setInterval(
     () => {
       this.getDate();
       let hours = this.state.date.getHours();
       this.getGreeting(hours);
      }, 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getDate() {
    this.setState({
      date: new Date()
    });
  }

  getGreeting(hours) {
    if (hours > 0 && hours < 13) {
      this.setState({
        greeting: "Good morning"
      });
    } else if (hours >= 13 && hours < 18) {
      this.setState({
        greeting: "Good afternoon"
      });
    } else if (hours >= 18) {
      this.setState({
        greeting: "Good evening"
      });
    }
  }

  handleChange = (e) => {
    let name = e.target.value;
    this.setState({
      name: name
    });
  }

  handleKeyUp = (e) => {
    let name = this.state.name;
    if(name && e.keyCode === 13) {
      this.setState({
        name: name
      });
    }
  }

  render() {
    return (
      <div>
      <Greeting />

       <div className="introduction">
          <div className="introduction-content">
            <div className="introduction-content__question">
              {this.state.question}
            </div>
            <div className="introduction-content__input">
              <input id="introduction-input" type="text" onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            </div>
          </div>
        </div>
          <div className="center">
            <div className="app-container clock">
              <div className="clock-time">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              <div className="clock-greeting">{this.state.greeting}, {this.state.name}.</div>
            </div>
          </div>
      </div>
    );
  }
}

export default Clock;
