import React from 'react';
import './styles.scss';
import { weatherIcon } from './WeatherIcon';


const WeatherExpanded = (props) => {
    return (
        <div>
            <div className="weather-app-wrapper weather-nipple-top-right">
                <div className="app weather-app">
                <section className="weather-current">
                    <header className="weather-current-header">
                        <span className="weather-current-location" title="">
                            <span className="weather-location-name">{props.weather.name}</span>
                            <span className="weather--current-conditions">{props.weatherDescription}</span>
                            </span>
                            <p>...</p>
                    </header>
                        <div className="weather-current-temp-wrapper"> 
                        <div className="weather--current-temp-row">
                            <img className="weather--icon-expanded-main" src={weatherIcon(props.weatherID, props.timeOfDay)} alt={props.weatherDescription}/>
                            <p className="weather--current-temp">{Math.round(props.weather.main.temp)}&deg;</p>
                        </div>
                        </div>
                </section>

                <section className="weather-row weather-forecast weather-forecast-daily active">
			<div className="weather-forecast-item weather-forecast-day" data-day="Thursday" title="Cloudy">
				<div className="weather-forecast-label">Thu</div>
				<span className="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span className="weather-forecast-high">7°</span><span className="weather-forecast-low">2°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day" data-day="Friday" title="Cloudy">
				<div className="weather-forecast-label">Fri</div>
				<span className="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span className="weather-forecast-high">8°</span><span className="weather-forecast-low">4°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day" data-day="Saturday" title="Cloudy">
				<div className="weather-forecast-label">Sat</div>
				<span className="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span className="weather-forecast-high">11°</span><span className="weather-forecast-low">6°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day" data-day="Sunday" title="Mostly Cloudy">
				<div className="weather-forecast-label">Sun</div>
				<span className="icon icon-weather weather-forecast-icon" data-icon="H"></span>
				<span className="weather-forecast-high">11°</span><span className="weather-forecast-low">8°</span>
			</div>
			<div className="weather-forecast-item weather-forecast-day" data-day="Monday" title="Cloudy">
				<div className="weather-forecast-label">Mon</div>
				<span className="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span className="weather-forecast-high">8°</span><span className="weather-forecast-low">6°</span>
			</div>
		</section>

        </div>
        </div>
        </div>
        

    )
}


export default WeatherExpanded;


