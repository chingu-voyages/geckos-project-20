import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const DEFAULT_QUERY = 'london';


class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_QUERY}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          weather: data,
        });
            
          console.log("got results", this.state.weather, this.state.weather.main.temp);
          console.log(this.state.weather.weather);
          console.log(this.state.weather.weather[0].icon);

        })
  }

/*
initial weather should display icon, temp and location...
Icon eg. For code 501 - moderate rain icon = "10d"
URL is http://openweathermap.org/img/w/10d.png */



  render() {

    //let weatherIcon = this.state.weather.weather[0].icon;
    //let weatherIconImage = `https://openweathermap.org/img/w/${weatherIcon}.png`;

    //let currentTemp = JSON.stringify(this.state.weather.main.temp);    
    //console.log(this.state.weather.main.temp);

    let location = this.state.weather.name;
  

    return (
      
      <div className="weather-results">
      
      <p>weather placeholder</p>
      
      <p>{location}</p>


      </div>


    );
  }
}

export default Api