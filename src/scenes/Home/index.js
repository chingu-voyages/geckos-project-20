import React, { Component } from 'react';
import './styles.scss';
import Weather from './components/weather/Weather';

class Home extends Component {
    render() {
        return (

            <div className="top-bar">
                <h1>Power Panel</h1>

                <div className="app-container weather">

                    <Weather />

                </div>
            </div>
        );
    }
}

export default Home