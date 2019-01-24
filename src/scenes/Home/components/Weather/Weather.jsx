import React, { Component } from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';
// import WeatherExpanded from './WeatherExpanded';
import WeatherToday from './WeatherToday';
import WeeklyForecast from './WeeklyForecast';

class Weather extends Component {

	constructor(props) {
		super(props);

		this.state = {
			weeklyForecast: [],
			weather: {},
			isLoading: true,
			lat: '',
			lon: '',
			timeOfDay: 1,
			isOpen: false
		};
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude,
					lon: position.coords.longitude
				});
				console.log(this.state.lat, this.state.lon);
				this.getCurrentWeather();
				this.getWeeklyForecast();
			},
			error => console.error(error));
	}

	render() {

		const { weeklyForecast, isOpen, weather, isLoading, weatherID, weatherDescription, timeOfDay } = this.state;
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

				{/* { isOpen && */
					<WeeklyForecast
					getWeather={this.getCurrentWeather}
					weatherDescription={weatherDescription}
					currentWeatherImgSrc={weatherIcon(weatherID, timeOfDay)}
					currentWeather={weather}
					weeklyForecast={weeklyForecast}
				/>
				}
			</div>

		);
	}

	getCurrentWeather = async (cityName) => {

		// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
		const byCoordinates = `lat=${this.state.lat}&lon=${this.state.lon}`;
		const byName = `q=${cityName}`

		const API_KEY = '9c77935cf1f7d3fae12ebf15913a8b2d';
		let currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?${cityName?byName:byCoordinates}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;

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
	}

	getWeeklyForecast = async (cityName) => {
		const byCoordinates = `lat=${this.state.lat}&lon=${this.state.lon}`;
		const byName = `q=${cityName}`;

		const API_KEY = '9c77935cf1f7d3fae12ebf15913a8b2d';
		let currentWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?${cityName?byName:byCoordinates}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;

		const response = await fetch(currentWeatherUrl);
		const weatherData = await response.json();

		console.log('Weekly Forecast :', weatherData);

		this.setState({
			weeklyForecast: weatherData.list
		});

		console.log('WF' , this.state.weeklyForecast);
	}


	toggleOpen = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen
		})
		)
	}

}

export default Weather;

