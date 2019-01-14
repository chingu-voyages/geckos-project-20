<<<<<<< HEAD
import React, { Component } from "react";
import "./styles.scss";
import Focus from "./components/Focus/index";
||||||| merged common ancestors
import React, { Component } from 'react';
import './styles.scss';
=======
import React, { Component } from 'react';
import Background from './components/Background/Background';
import Quote from './components/Quote';
import Clock from './components/Clock/Clock';
import './styles.scss';
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';
import './styles.scss';
>>>>>>> 29f54dc0a937116fa8e21370192ecc10719e0c30

class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <h1>Power Panel</h1>
        <Focus />
      </React.Fragment>
||||||| merged common ancestors
      <h1>Power Panel</h1>
=======
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
            <Clock />
            <Quote />
        </div>
      </div>
>>>>>>> 29f54dc0a937116fa8e21370192ecc10719e0c30
    );
  }
}

<<<<<<< HEAD
export default Home;
||||||| merged common ancestors
export default Home
=======
export default Home;
  
>>>>>>> 29f54dc0a937116fa8e21370192ecc10719e0c30
