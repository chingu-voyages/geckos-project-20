import React, { Component } from 'react';
import './styles.scss';
import Api from '../../services/api/Api'


class Weather extends Component {



  render() {

    return (
      
      <div className="app-container weather">
      
      <Api />

      </div>

    );
  }
}

export default Weather