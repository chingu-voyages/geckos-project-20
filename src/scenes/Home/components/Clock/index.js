import React, { Component } from "react";
import './styles.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      greeting: ""
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
    switch(hours) {
      case hours > 0:
        this.setState({
          greeting: "buon giorno"
        })
        break;
      case hours <= 0:
      this.setState({
        greeting: "buona notte"
      })
        break;
      default:
        return null;
    }
  }

  render() {
    // const { quote, error, isLoading } = this.state;

    return (
      <div className="center">
        <h2>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h2>
        <p>{this.state.greeting}</p>
      </div>
    );
  }
}

export default Clock;
