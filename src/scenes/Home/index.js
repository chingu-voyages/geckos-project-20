import React, { Component } from 'react';
import Quote from './components/Quote';
import './styles.scss';
import Weather from './components/Weather/Weather';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <h1>Power Panel</h1>
        <Weather />
        <Quote />
      </div>
    );
  }
}

export default Home