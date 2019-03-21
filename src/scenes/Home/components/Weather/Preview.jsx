import React, { Component } from 'react';
import { NameSearch, CurrentWeather } from './StyledComponents';
import { weatherIcon } from './WeatherIcon';

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCityEdit: false,
        };
    }

    toggleEditMode = () => {
        this.setState(prevState => ({
            newCityEdit: !prevState.newCityEdit,
        }));
    };

    averageMax = dayArray => Math.round(dayArray.reduce((acc, day) => (acc += day.main.temp_max), 0) / dayArray.length);
    averageMin = dayArray =>
        Math.round((dayArray.reduce((acc, day) => (acc += day.main.temp_min), 0) / dayArray.length).toFixed(0));

    render() {
        const averageMax = this.averageMax(this.props.currentDay);
        const averageMin = this.averageMin(this.props.currentDay);

        return (
            <CurrentWeather>
                <NameSearch>
                    {this.state.newCityEdit ? (
                        <div className="new-city">
                            <input
                                placeholder={this.props.place}
                                ref={input => {
                                    if (input) {
                                        this.input = input;
                                        input.focus();
                                    }
                                }}
                                onKeyUp={event => {
                                    if (event.key === 'Enter') {
                                        event.target.value !== '' && this.props.getWeather(event.target.value);
                                    }
                                }}
                                type="text"
                            />
                            <span>
                                <i
                                    onClick={() => this.input.value !== '' && this.props.getWeather(this.input.value)}
                                    className="fa fa-crosshairs"
                                />
                                <i onClick={this.toggleEditMode} className="fa fa-times" />
                            </span>
                        </div>
                    ) : (
                        <div className="text" onDoubleClick={this.toggleEditMode}>
                            <div>
                                <span>{this.props.place}</span>
                                <i onClick={this.toggleEditMode} className="fa fa-pencil" />
                            </div>
                            <div>{this.props.currentDay[0].weather[0].main}</div>
                        </div>
                    )}
                </NameSearch>
                <div className="temperature">
                    <div>
                        <img
                            src={weatherIcon(this.props.currentDay[0].weather[0].id, new Date().getHours())}
                            alt={this.props.currentDay[0].weather[0].main}
                        />
                    </div>
                    <div id="max-temp">{averageMax}&#0176; </div>
                    <div id="min-temp">{averageMin}&#0176; </div>
                </div>
            </CurrentWeather>
        );
    }
}

export default Preview;
