import React from 'react';
import './weather.styles.scss';
import { weatherForecastIcon } from './WeatherIcon';

{
    /* <WeatherDay
    weather={props.weather}
    weatherID={props.weatherID}
    timeOfDay={props.timeOfDay}
    weatherDescription={props.weatherDescription}
    weatherForecast={props.weatherForecast}
/>; */
}

const WeatherDay = props => {
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

    //Get day of the week from UNIX time stamp, map over the array to create Date object, convert to seconds then display 3 letter date string
    let dates = [
        props.weatherForecast.list[0].dt,
        props.weatherForecast.list[8].dt,
        props.weatherForecast.list[16].dt,
        props.weatherForecast.list[24].dt,
        props.weatherForecast.list[32].dt,
    ];

    let datesString = dates.map(function(e) {
        return new Date(e * 1000).toString().split(' ')[0];
    });

    return (
        <div className="weather-forecast-daily">
            <div className="weather-forecast-item weather-forecast-day">
                <div className="weather-forecast-label">{datesString[0]}</div>
                <img
                    className="weather-forecast-icon"
                    src={weatherForecastIcon(props.weatherForecast.list[0].weather[0].id, props.timeOfDay)}
                    alt={firstWeatherForecastDescription}
                />
                <span className="weather-forecast-high">{Math.round(firstDayMaxTemp)}&deg;</span>
                <span className="weather-forecast-low">{Math.round(firstDayMinTemp)}&deg;</span>
            </div>
            <div className="weather-forecast-item weather-forecast-day">
                <div className="weather-forecast-label">{datesString[1]}</div>
                <img
                    className="weather-forecast-icon"
                    src={weatherForecastIcon(props.weatherForecast.list[8].weather[0].id, props.timeOfDay)}
                    alt={secondWeatherForecastDescription}
                />
                <span className="weather-forecast-high">{Math.round(secondDayMaxTemp)}&deg;</span>
                <span className="weather-forecast-low">{Math.round(secondDayMinTemp)}&deg;</span>
            </div>
            <div className="weather-forecast-item weather-forecast-day">
                <div className="weather-forecast-label">{datesString[2]}</div>
                <img
                    className="weather-forecast-icon"
                    src={weatherForecastIcon(props.weatherForecast.list[16].weather[0].id, props.timeOfDay)}
                    alt={thirdWeatherForecastDescription}
                />
                <span className="weather-forecast-high">{Math.round(thirdDayMaxTemp)}&deg;</span>
                <span className="weather-forecast-low">{Math.round(thirdDayMinTemp)}&deg;</span>
            </div>
            <div className="weather-forecast-item weather-forecast-day">
                <div className="weather-forecast-label">{datesString[3]}</div>
                <img
                    className="weather-forecast-icon"
                    src={weatherForecastIcon(props.weatherForecast.list[24].weather[0].id, props.timeOfDay)}
                    alt={fourthWeatherForecastDescription}
                />
                <span className="weather-forecast-high">{Math.round(fourthDayMaxTemp)}&deg;</span>
                <span className="weather-forecast-low">{Math.round(fourthDayMinTemp)}&deg;</span>
            </div>
            <div className="weather-forecast-item weather-forecast-day">
                <div className="weather-forecast-label">{datesString[4]}</div>
                <img
                    className="weather-forecast-icon"
                    src={weatherForecastIcon(props.weatherForecast.list[32].weather[0].id, props.timeOfDay)}
                    alt={fifthWeatherForecastDescription}
                />
                <span className="weather-forecast-high">{Math.round(fifthDayMaxTemp)}&deg;</span>
                <span className="weather-forecast-low">{Math.round(fifthDayMinTemp)}&deg;</span>
            </div>
        </div>
    );
};

export default WeatherDay;
