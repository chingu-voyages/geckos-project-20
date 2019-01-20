import React, { Component } from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';
import WeatherExpanded from './WeatherExpanded';


class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      isLoading: true,
      error: '',
      lat: '',
      lon: '',
      timeOfDay: 1,
      isShowing: false
    };
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
      console.log(this.state.lat , this.state.lon);
      this.getCurrentWeather();
    },
      error => console.error(error));
    }

  render() {

    const { weather, error, isLoading, weatherID, weatherDescription, timeOfDay } = this.state;

    return (
      <div>
        {
          isLoading ? <p>Loading ... </p> 
        :
        
          <div className="weather-app-container weather" onClick={this.onToggleOpen}>
        <div className="weather-wrapper">
        <div className="weather-stat">
        <img className="weather-icon" src={weatherIcon(weatherID, timeOfDay)} alt={weatherDescription}/>
          <p>{Math.round(weather.main.temp)}&deg;</p>
        </div>
        </div>
        <div className="weather-location-label"> 
          <p>{weather.name}</p>
          </div> 
        <div>
        
        {this.state.isShowing &&
                <WeatherExpanded
                onToggleOpen={this.onToggleOpen}
                weather={this.state.weather}
                weatherID={this.state.weatherID}
                timeOfDay={this.state.timeOfDay}
                weatherDescription={this.state.weatherDescription}
                />
              }
          </div>
        </div>

            }
      </div>
        
    );
  }

  
  async getCurrentWeather () {

    
    // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_KEY = '9c77935cf1f7d3fae12ebf15913a8b2d';
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;

    let date = new Date();
    let timeOfDay = date.getHours();

    // console.log(url);
    // console.log(timeOfDay);

    const data = await fetch(url);
    const weatherData = await data.json();

    console.log('DATA',weatherData);
    this.setState({ 
          timeOfDay: timeOfDay,
          weather: weatherData,
          weatherID: weatherData.weather[0].id,
          weatherDescription: weatherData.weather[0].description,
          isLoading: false  
        });

    // .then(response => response.json())
    // .then((data) =>{

    // console.log('DATA',data);
    //   this.setState({ 
    //     timeOfDay: timeOfDay,
    //     weather: data,
    //     weatherID: data.weather[0].id,
    //     weatherDescription: data.weather[0].description,
    //     isLoading: false  
    //   })}
    //   )
    // .catch(error => 
    //   this.setState({ 
    //     error, 
    //     isLoading: false 
    //   })
    //   );
  }
  
  onToggleOpen = (e) => {
      this.setState((prevState) =>
      ({
      isShowing: !prevState.isShowing
    })
    )
  }
}

export default Weather

