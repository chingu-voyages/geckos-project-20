import React, { Component } from 'react';
import './styles.scss';
import { getWeather } from '../../../../services/api/api';


class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await getWeather();
      const data = await response.json();
      this.setState({ weather: data, isLoading: false });
    } catch (error) {
      this.setState({ error: error });
    }  
  console.log("got results", this.state.weather, this.state.weather.main.temp);
  console.log(this.state.weather.weather);
  console.log(this.state.weather.weather[0].icon);
  }

  /*
initial weather should display icon, temp and location and be clickable to expand...
Icon eg. For code 501 - moderate rain icon = "10d"
URL is http://openweathermap.org/img/w/10d.png */

  render() {

    const { weather, error, isLoading } = this.state;

    //let weatherIcon = weather.weather[0].icon;
    //let weatherIconImage = `https://openweathermap.org/img/w/${weatherIcon}.png`;


    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    } else {

    return (
      
      <div className="weather-results">
      <div>
     
        <p>{weather.main.temp}&#8451;</p>
        <p>{weather.name}</p>
      </div>    
      </div>

   

    );
  }
}
}

export default Weather

