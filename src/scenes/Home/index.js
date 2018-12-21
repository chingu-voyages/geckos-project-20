import React, { Component } from 'react';
import Quote from './components/Quote';
import Clock from './components/Clock';
import './styles.scss';
import Weather from './components/Weather';

class Home extends Component {
  render() {
    return (
      <div className="app">
      <div className="top-row">
        <h1>Power Panel</h1>
        <div className="top-right"></div>
        <div className="app-container weather">
          <Weather />
        </div>
        </div>
        <Quote />
        <Clock />
      </div>
    );
  }
}

export default Home