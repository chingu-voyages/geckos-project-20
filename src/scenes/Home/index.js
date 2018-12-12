import React, { Component } from 'react';
import Quote from './components/Quote';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <h1>Power Panel</h1>
        <Quote />
      </div>
    );
  }
}

export default Home