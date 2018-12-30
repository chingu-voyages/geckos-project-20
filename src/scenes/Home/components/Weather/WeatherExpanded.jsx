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
                            <img className="weather--icon-exapnded-main" src={weatherIcon(props.weatherID, props.timeOfDay)} alt={props.weatherDescription}/>
                            <p className="weather--current-temp">{Math.round(props.weather.main.temp)}&deg;</p>
                        </div>
                        </div>
                        
                    
                </section>
            </div>
        </div>
        </div>
        

    )
}


export default WeatherExpanded;


