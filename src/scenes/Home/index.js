import React, { Component } from 'react';
import './styles.scss';
import Weather from './components/weather';

class Home extends Component {
  render() {
    return (

      <div className="top-bar">
      <h1>Power Panel</h1>

      <Weather />
      
      </div>
    );
  }
}

export default Home