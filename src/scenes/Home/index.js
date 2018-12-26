import React, { Component } from 'react';
import Quote from './components/Quote';
import Clock from './components/Clock';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Quote />
        <Clock />
      </div>
    );
  }
}

export default Home