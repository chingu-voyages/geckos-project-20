import React from 'react';
import './styles.scss';
const WeatherToday = props => {
    return (
        <div className="weather-app-container weather" onClick={props.toggleOpen}>
            <div className="weather-wrapper">
                <div className="weather-stat">
                    <img className="weather-icon" src={props.imgSrc} alt={props.weatherDescription} />
                    <p>{Math.round(props.weather.main.temp)}&deg;</p>
                </div>
            </div>
            <div className="weather-location-label">
                <p>{props.weather.name}</p>
            </div>
        </div>
    );
};

export default WeatherToday;
