import React, { Component } from 'react';
import './styles.scss';
import { getCurrentWeather } from '../../../../services/api/weather-api';

//import { getAPIURL } from '../../../../services/api/api';
//import LatLong from './LatLong';


class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            weather: {},
            isLoading: true,
            error: '',
        };

    };


    async componentDidMount() {

        try {
            const response = await getCurrentWeather();
            console.log('weather response : ', response);
            const data = await response.json();
            this.setState({
                weather: data,
                isLoading: false
            });
        } catch (error) {
            this.setState({ error: error });
        }
        console.log("got results");
        console.log(this.state.weather);
        console.log(this.state.weather.weather);
    }

    /*
    initial weather should display icon, temp and location and be clickable to expand...
    Icon eg. For code 501 - moderate rain icon = "10d"
    URL is http://openweathermap.org/img/w/10d.png */


    /* TODOs Add City name when location works */


    render() {

        const { weather, error, isLoading } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        } else {

            console.log("Weather:: ", weather);

            return (

                <div className="weather-results">
                    <div>
                        {/* <img src={`https://openweathermap.org/img/w/${weather[0].icon}}.png`} alt='Icon showing weather' className='weather-icon' /> */}
                        {/* <p>{Math.round(weather.main.temp)}&#8451;</p>
                        <p>{weather.name}</p> */}

                        No weather
                    </div>
                </div>


            );
        }
    }
}

export default Weather

