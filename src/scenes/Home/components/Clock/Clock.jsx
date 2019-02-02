import React, { Component } from "react";
import { FaEllipsisH } from 'react-icons/fa';
import "./styles.scss";

const Introduction = ({ question, handleChange, saveName }) =>
  (
    <div className="introduction">
      <div className="introduction-content">
        <div className="introduction-content__question">
          {question}
        </div>
        <div className="introduction-content__input">
          <input
            id="introduction-input"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            onKeyUp={saveName}
          />
        </div>
      </div>
    </div>
  );

class UserGreeting extends React.Component {
  showMore = () => {
    const showMore = document.querySelector(".clock-greeting-more");
    const overlay = document.querySelector(".app-overlay");
    showMore.classList.toggle("active");
  };

  render() {
    return (
      <div className="center">
        <div className="app-container clock">
          <div className="clock-time">
            {this.props.date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </div>
          <span className="clock-greeting">
            {this.props.greeting},{" "}
            {!this.props.editName ? (
              <span className="clock-greeting__name">{this.props.name}</span>
            ) : (
                <input className="clock-greeting__name--editable" value={this.props.name} onChange={this.props.handleChange} onKeyUp={this.props.saveName} type="text" />
              )}.
          </span>
          <span className="clock-greeting-more" onClick={this.showMore}>
            <FaEllipsisH />
            <div className="dropdown">
              <ul className="dropdown-list">
                <li className="displayname-edit">
                  <span onClick={this.props.changeName}>Edit your name</span>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

class GreetingControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setName: false,
      question: `Hello, what is your name?`,
      date: new Date(),
      greeting: "",
      name: null,
      editName: false,
    };
  }

  componentDidMount() {
    const name = JSON.parse(localStorage.getItem("name"));
    if (name) {
      this.setState({ name, setName: true });
    }

    this.timer = setInterval(() => {
      this.getDate();
      let hours = this.state.date.getHours();
      this.getGreeting(hours);
    }, 1000);
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

  handleChange = e => {
    let name = e.target.value;
    this.setState({
      name: name
    });
  };

  saveName = e => {
    let name = this.state.name;
    if (name && e.keyCode === 13) {
      this.setState({
        setName: true,
        name: name,
        editName: false,
      });

      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("setName", true);
    }
  };

  changeName = () => {
    this.setState({
      editName: true
    });
  };

  render() {
    const setName = this.state.setName;
    let greetingContent;

    if (setName) {
      greetingContent = (
        <UserGreeting
          date={this.state.date}
          greeting={this.state.greeting}
          name={this.state.name}
          changeName={this.changeName}
          editName={this.state.editName}
          handleChange={this.handleChange}
          saveName={this.saveName}
        />
      );
    } else {
      greetingContent = (
        <Introduction
          question={this.state.question}
          handleChange={this.handleChange}
          saveName={this.saveName}
        />
      );
    }

    return <div>{greetingContent}</div>;
  }
}

export default GreetingControl;
