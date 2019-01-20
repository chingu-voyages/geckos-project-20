import React, { Component } from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';
import WeatherExpanded from './WeatherExpanded';
import WeatherToday from './WeatherToday';


class Weather extends Component {

	constructor(props) {
		super(props);

		this.state = {
			weather: {},
			isLoading: true,
			lat: '',
			lon: '',
			timeOfDay: 1,
			isShowing: false
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
			},
			error => console.error(error));
	}

	render() {

		const { weather, isLoading, weatherID, weatherDescription, timeOfDay } = this.state;

		return (
			<div>
				{
					isLoading ? <p>Loading ... </p>
						:
						<WeatherToday
							toggleOpen={this.onToggleOpen}
							imgSrc={weatherIcon(weatherID, timeOfDay)}
							imgAlt={weatherDescription}
							weather={weather}
						/>
				}

				{this.state.isShowing &&
					<WeatherExpanded
						onToggleOpen={this.onToggleOpen}
						weather={this.state.weather}
						weatherID={weatherID}
						timeOfDay={this.state.timeOfDay}
						weatherDescription={weatherDescription}
					/>
				}
			</div>

		);
	}

	async getCurrentWeather() {

		// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
		const API_KEY = '9c77935cf1f7d3fae12ebf15913a8b2d';
		let url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;

		let date = new Date();
		let timeOfDay = date.getHours();

		const response = await fetch(url);
		const weatherData = await response.json();

		console.log('DATA', weatherData);
		this.setState({
			timeOfDay: timeOfDay,
			weather: weatherData,
			weatherID: weatherData.weather[0].id,
			weatherDescription: weatherData.weather[0].description,
			isLoading: false
		});
	}

	onToggleOpen = (e) => {
		this.setState((prevState) => ({
			isShowing: !prevState.isShowing
		})
		)
	}
}

export default Weather

