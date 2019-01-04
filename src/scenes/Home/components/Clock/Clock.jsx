import React, { Component } from "react";
import './styles.scss';

class Introduction extends React.Component {
  render() {
    return (
      <div className="introduction">
      <div className="introduction-content">
        <div className="introduction-content__question">
          {this.props.question}
        </div>
        <div className="introduction-content__input">
          <input id="introduction-input" type="text" autoComplete="off" onChange={this.props.handleChange} onKeyUp={this.props.handleKeyUp}/>
        </div>
      </div>
    </div>
    );
  }
} 

class UserGreeting extends React.Component {
  showMore = () => {
    console.log('open dropdown here');
  }

  render() {
    return (
      <div className="center">
      <div className="app-container clock">
        <div className="clock-time">{this.props.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <div className="clock-greeting">{this.props.greeting}, {this.props.name}.</div>
        <span className="clock-greeting-more" onClick={this.showMore}>icon</span>
      </div>
    </div>
    );
  }
}

class GreetingControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setName: false  ,
      question: `Hello, what is your name?`,
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
        setName: true,
        name: name
      });
    }
  }

  render() {
    const setName = this.state.setName;
    let greetingContent;

    if(setName) {
      greetingContent = <UserGreeting date={this.state.date} greeting={this.state.greeting} name={this.state.name} />;
    } else {
      greetingContent = <Introduction question={this.state.question} handleChange={this.handleChange} handleKeyUp={this.handleKeyUp} />;
    }

    return (
      <div>
        {greetingContent}
      </div>
    );
  }
}

export default GreetingControl;
