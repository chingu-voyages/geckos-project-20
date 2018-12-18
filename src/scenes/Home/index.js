import React, { Component } from 'react';
import Search from './components/Search';
import Quote from './components/Quote';
import Weather from './components/Weather';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <Weather />
        <Quote />
      </div>
    );
  }
}

export default Home;