import React, { Component } from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';
import WeatherExpanded from './WeatherExpanded';
// import WeatherToday from './WeatherToday';
// import WeeklyForecast from './WeeklyForecast';

class Weather extends Component {

	constructor(props) {
		super(props);

		this.state = {
			weeklyForecast: {},
			weather: {},
			isLoading: true,
			lat: '',
			lon: '',
			timeOfDay: 1,
			isShowingWeather: false
		};
	};

	/*
	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude,
					lon: position.coords.longitude
				});
				console.log(this.state.lat, this.state.lon);
				this.getCurrentWeather();
			},
			error => console.error(error));
	}

	
	createDaysArray = (weatherData) => {
        console.log('WeatherData List: ', weatherData)

        let endResult = [];
        let oneDay = [];
        let currentDay = new Date();

       for(let period of weatherData){
            let periodDate = new Date(period.dt_txt);
            if (this.sameDay(periodDate, currentDay)){
                oneDay.push(period);
            } else {
                endResult.push(oneDay);
                oneDay = [];
                oneDay.push(period);
                currentDay.setDate(currentDay.getDate() + 1);
            }
        }
        
        endResult.push(oneDay);
        return endResult;
    }

    sameDay = (date1, date2) => {
        return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
	}
	*/

	getCurrentWeather () {

		//Example API call: http://api.openweathermap.org/data/2.5/weather?lat=51&lon=-1&units=metric&type=accurate&mode=json&APPID=YOUR_API_KEY
		const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
		let currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;
		let date = new Date();
		let timeOfDay = date.getHours();
		console.log(currentURL);
		console.log(timeOfDay);
		return fetch(currentURL)
		.then(response => response.json())
		.then((data) =>
		  this.setState({ 
			timeOfDay: timeOfDay,
			weather: data,
			weatherID: data.weather[0].id,
			weatherDescription: data.weather[0].description,
			isLoading: false  
		  })
		  )
		.catch(error => 
		  this.setState({ 
			error, 
			isLoading: false 
		  })
		  );
	  }
	
	  getForecastWeather () {
		//Forecast API call...
		//http://api.openweathermap.org/data/2.5/forecast?lat=51&lon=-1&units=metric&type=accurate&mode=json&APPID=${API_KEY}
		const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
		let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;
		console.log(forecastURL);
		return fetch(forecastURL)
		.then(response => response.json())
		.then((data) =>
		  this.setState({ 
			weatherForecast: data,
		  })
		  )
		.catch(error => 
		  this.setState({ 
			error, 
			isLoading: false 
		  })
		  );
	  }
	
	componentDidMount() {
	
	// Get the current position of the user
	  navigator.geolocation.getCurrentPosition(
	  (position) => {
		this.setState(
		  (prevState) => ({
			lat: position.coords.latitude, 
			lon: position.coords.longitude
			}), () => { this.getCurrentWeather();
						this.getForecastWeather(); } //Passes geolocation to getCurrentWeather and getForecastWeather functions
		);
	},
		(error) => this.setState({ error: error }),
		{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
	)
	}
	
	/*
	initial weather should display icon, temp and location and be clickable to expand...
	Icon eg. For code 501 - moderate rain icon = "10d"
	URL is http://openweathermap.org/img/w/10d.png */
	
	
	//Function for opening/closing modal for expanded view
	onToggleOpenWeather = (e) => {
	  this.setState((prevState) =>
	  ({
	   isShowingWeather: !prevState.isShowingWeather
	 })
	)
	}
	
	
	
	  render() {
	
		const { weather, error, isLoading, weatherID, weatherDescription, timeOfDay } = this.state;
	  
		  if (error) {
		  return <p>{error.message}</p>;
		}
	
		if (isLoading) {
		  return <p>Loading ...</p>;
		} else {
	
		return (
	   
		  <div className="weather-app-container weather">
		  <div className="weather-container-small" onClick={this.onToggleOpenWeather}>
		  <div className="weather-wrapper">
		  <div className="weather-stat">
		  <img className="weather-icon" src={weatherIcon(weatherID, timeOfDay)} alt={weatherDescription}/>
			<p>{Math.round(weather.main.temp)}&deg;</p>
		  </div>
		  </div>
		  <div className="weather-location-label"> 
			<p>{weather.name}</p>
			</div> 
			</div>
		  <div>
		  
		  {this.state.isShowingWeather &&
				  <WeatherExpanded
				  weather={this.state.weather}
				  weatherID={this.state.weatherID}
				  timeOfDay={this.state.timeOfDay}
				  weatherDescription={this.state.weatherDescription}
				  weatherForecast={this.state.weatherForecast}
			  />
				}
				
			</div>
		  </div>
	   
		);
	  }
	}
	}
	
	export default Weather
	
	/*

	render() {

		const { weeklyForecast, isOpen, weather, isLoading, weatherID, weatherDescription, timeOfDay } = this.state;
		//const daysArray = this.createDaysArray(weeklyForecast);
		
		return (
			<div>
				{
				isLoading ? (
				<p>Loading ... </p>
				) : (<WeatherToday
					toggleOpen={this.toggleOpen}
					imgSrc={weatherIcon(weatherID, timeOfDay)}
					imgAlt={weatherDescription}
					weather={weather}
				/>)	
				}

				{ isOpen && 
					<WeeklyForecast
					place={weather.name}
					getWeather={this.getCurrentWeather}
					weatherDescription={weatherDescription}
					currentWeatherImgSrc={weatherIcon(weatherID, timeOfDay)}
					currentWeather={weather}
					currentDay={[this.state.weeklyForecast[0]]}
					weeklyForecast={daysArray}
				/>
				}
			</div>

		);
	}

	getCurrentWeather = async (cityName) => {

		try{
			console.log('I happened to get new weather');
			const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
			const byCoordinates = `lat=${this.state.lat}&lon=${this.state.lon}`;
			const byName = `q=${cityName}`

			let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName?byName:byCoordinates}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;
   
			let date = new Date();
			let timeOfDay = date.getHours();

			const response = await fetch(currentWeatherUrl);
			const weatherData = await response.json();

			console.log('Current Weather', weatherData);
			this.setState({
				timeOfDay: timeOfDay,
				weather: weatherData,
				weatherID: weatherData.weather[0].id,
				weatherDescription: weatherData.weather[0].description,
				isLoading: false
			});

			this.getWeeklyForecast(cityName);
			console.log('This has executed')
		} catch (e){
			console.error('Error from currentWeather: ', e);
		}
	}

	getWeeklyForecast = async (cityName) => {
		try{
			const byCoordinates = `lat=${this.state.lat}&lon=${this.state.lon}`;
			const byName = `q=${cityName}`;

			const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
			let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?${cityName?byName:byCoordinates}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;

			const response = await fetch(currentWeatherUrl);
			const weatherData = await response.json();

			console.log('Weekly Forecast :', weatherData);

			this.setState({
				weeklyForecast: weatherData.list
			});

			console.log('WF' , this.state.weeklyForecast);
		} catch (e){
			console.error('Error from weeklyForecast: ', e);
		}
	}


	toggleOpen = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		})
		)
	}

}

export default Weather;
*/
