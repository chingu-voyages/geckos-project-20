import React from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';
import { weatherForecastIcon } from './WeatherIcon';


const WeatherExpanded = (props) => {
    return (
        <div>
            <div className="weather-nipple-top-right"></div>
            <div className="weather-app-wrapper"> 
                
                <div className="app weather-app">
                <section className="weather-current">
                    <header className="weather-current-header">
                        <span className="weather-current-location">
                            <span className="weather-location-name">{props.weather.name}</span>
                            <span className="weather-current-conditions">{props.weatherDescription}</span>
                            </span>
                            <p>...</p>
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
				<div className="weather-forecast-label">Thu</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecastID, props.timeOfDay)} alt={props.weatherForecastDescription}/>
				<span className="weather-forecast-high">{Math.round(props.weatherForecastMaxTemp)}&deg;</span>
				<span className="weather-forecast-low">2°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">Fri</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecastID, props.timeOfDay)} alt={props.weatherForecastDescription}/>
				<span className="weather-forecast-high">8°</span>
				<span className="weather-forecast-low">4°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">Sat</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecastID, props.timeOfDay)} alt={props.weatherForecastDescription}/>
				<span className="weather-forecast-high">11°</span>
				<span className="weather-forecast-low">6°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">Sun</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecastID, props.timeOfDay)} alt={props.weatherForecastDescription}/>
				<span className="weather-forecast-high">11°</span>
				<span className="weather-forecast-low">8°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label">Mon</div>
				<img className="weather-forecast-icon" src={weatherForecastIcon(props.weatherForecastID, props.timeOfDay)} alt={props.weatherForecastDescription}/>
				<span className="weather-forecast-high">8°</span>
				<span className="weather-forecast-low">6°</span>
			</div>
		</section>

        </div>
        </div>
        </div>
        

    )
}


export default WeatherExpanded;


