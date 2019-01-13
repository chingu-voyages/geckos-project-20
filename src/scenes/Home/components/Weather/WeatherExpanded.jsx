import React from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';
import { weatherForecastIcon } from './WeatherIcon';

const WeatherExpanded = (props) => {

	let firstDayMinTemp = props.weatherForecast.list[0].main.temp_min;
	let secondDayMinTemp = props.weatherForecast.list[8].main.temp_min;
	let thirdDayMinTemp = props.weatherForecast.list[16].main.temp_min;
	let fourthDayMinTemp = props.weatherForecast.list[24].main.temp_min;
	let fifthDayMinTemp = props.weatherForecast.list[32].main.temp_min;

	let firstDayMaxTemp = props.weatherForecast.list[0].main.temp_max;
	let secondDayMaxTemp = props.weatherForecast.list[8].main.temp_max;
	let thirdDayMaxTemp = props.weatherForecast.list[16].main.temp_max;
	let fourthDayMaxTemp = props.weatherForecast.list[24].main.temp_max;
	let fifthDayMaxTemp = props.weatherForecast.list[32].main.temp_max;

	//let firstWeatherForecastID = props.weatherForecast.list[0].weather[0].id;
	//Variable passed into weatherForecastIcon function in JSX - function could be rewritten
		
	let firstWeatherForecastDescription = props.weatherForecast.list[0].weather[0].description;
	let secondWeatherForecastDescription = props.weatherForecast.list[8].weather[0].description;
	let thirdWeatherForecastDescription = props.weatherForecast.list[16].weather[0].description;
	let fourthWeatherForecastDescription = props.weatherForecast.list[24].weather[0].description;
	let fifthWeatherForecastDescription = props.weatherForecast.list[32].weather[0].description;

	//To get day of the week from UNIX time stamp - function could be rewritten
	
	let firstDateString = props.weatherForecast.list[0].dt;
	let firstDate = new Date(firstDateString*1000);
	let firstDayName = firstDate.toString().split(' ')[0];

	let secondDateString = props.weatherForecast.list[8].dt;
	let secondDate = new Date(secondDateString*1000);
	let secondDayName = secondDate.toString().split(' ')[0];

	let thirdDateString = props.weatherForecast.list[16].dt;
	let thirdDate = new Date(thirdDateString*1000);
	let thirdDayName = thirdDate.toString().split(' ')[0];

	let fourthDateString = props.weatherForecast.list[24].dt;
	let fourthDate = new Date(fourthDateString*1000);
	let fourthDayName = fourthDate.toString().split(' ')[0];
	
	let fifthDateString = props.weatherForecast.list[32].dt;
	let fifthDate = new Date(fifthDateString*1000);
	let fifthDayName = fifthDate.toString().split(' ')[0];



    return (
        <div className="weather-expanded-transition">
            <div className="weather-nipple-top-right"></div>
            <div className="weather-app-wrapper">
                
                <div className="app weather-app">
                <section className="weather-current">
                    <header className="weather-current-header">
                        <span className="weather-current-location">
                            <span className="weather-location-name">{props.weather.name}</span>
                            <span className="weather-current-conditions">{props.weatherDescription}</span>
                            </span>
                            {/* TODO settings icon and options could be added later
							<p>...</p>*/}
                    </header>
                        <div className="weather-current-temp-wrapper"> 
                        <div className="weather-current-temp-row">
                            <img className="weather-icon-current-main" src={weatherIcon(props.weatherID, props.timeOfDay)} alt={props.weatherDescription}/>
                            <p className="weather-current-temp">{Math.round(props.weather.main.temp)}&deg;</p>
                        </div>
                        </div>
                </section>

                <section className="weather-row weather-forecast weather-forecast-daily">
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">{firstDayName}</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecast.list[0].weather[0].id, props.timeOfDay)} alt={firstWeatherForecastDescription}/>
				<span className="weather-forecast-high">{Math.round(firstDayMaxTemp)}&deg;</span>
				<span className="weather-forecast-low">{Math.round(firstDayMinTemp)}&deg;</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">{secondDayName}</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecast.list[8].weather[0].id, props.timeOfDay)} alt={secondWeatherForecastDescription}/>
				<span className="weather-forecast-high">{Math.round(secondDayMaxTemp)}&deg;</span>
				<span className="weather-forecast-low">{Math.round(secondDayMinTemp)}&deg;</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">{thirdDayName}</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecast.list[16].weather[0].id, props.timeOfDay)} alt={thirdWeatherForecastDescription}/>
				<span className="weather-forecast-high">{Math.round(thirdDayMaxTemp)}&deg;</span>
				<span className="weather-forecast-low">{Math.round(thirdDayMinTemp)}&deg;</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">{fourthDayName}</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecast.list[24].weather[0].id, props.timeOfDay)} alt={fourthWeatherForecastDescription}/>
				<span className="weather-forecast-high">{Math.round(fourthDayMaxTemp)}&deg;</span>
				<span className="weather-forecast-low">{Math.round(fourthDayMinTemp)}&deg;</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">{fifthDayName}</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecast.list[32].weather[0].id, props.timeOfDay)} alt={fifthWeatherForecastDescription}/>
				<span className="weather-forecast-high">{Math.round(fifthDayMaxTemp)}&deg;</span>
				<span className="weather-forecast-low">{Math.round(fifthDayMinTemp)}&deg;</span>
			</div>
		</section>

        </div>
        </div>
        </div>

    )
}


export default WeatherExpanded;


