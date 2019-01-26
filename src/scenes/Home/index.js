import React, { Component } from 'react';
import Background from './components/Background/Background';
import Quote from './components/Quote';
import Clock from './components/Clock/Clock';
import './styles.scss';
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';
import Focus from './components/Focus/index';
import './styles.scss';

class Home extends Component {

  render() {

    return (
     
      <div className="main-view">
      <Background />
        <div className="app">
          <div className="top-row">
          <div className="top-left">
            <Search />
            </div>
          <div className="top-right">
            <Weather />
            </div>
          </div>

        </div>
        <div className="center">
          <Clock />
          </div>
             <div className="center-below">
            <Focus />
            </div>
            <div className="bottom">
            <Quote />
        </div>
      </div>
    );
  }
}

export default Home;
  
