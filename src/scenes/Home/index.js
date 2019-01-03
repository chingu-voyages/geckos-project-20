import React, { Component } from 'react';
import Search from './components/Search/Search';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Search />
      </div>
    );
  }
}

export default Home;