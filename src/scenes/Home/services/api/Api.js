import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const DEFAULT_QUERY = 'london';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }


  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_QUERY}&units=metric&type=accurate&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          weather: data,
        });
           
          console.log("got results", this.state.weather);
        })
  }

  render() {

    return (
      
      <div className="weather-results">
      
      <p>weather placeholder</p>


      </div>

    );
  }
}

export default Weather