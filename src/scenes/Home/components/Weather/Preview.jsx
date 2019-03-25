import React, { useState } from 'react';
import { NameSearch, CurrentWeather } from './weather.scmp';
import { weatherIcon } from './WeatherIcon';

function Preview(props) {
    const [newCityEdit, setNewCityEdit] = useState(false);
    const toggleEditMode = () => {
        setNewCityEdit(!newCityEdit);
    };

    const averageMax = dayArray =>
        Math.round(dayArray.reduce((acc, day) => (acc += day.main.temp_max), 0) / dayArray.length);
    const averageMin = dayArray =>
        Math.round((dayArray.reduce((acc, day) => (acc += day.main.temp_min), 0) / dayArray.length).toFixed(0));

    const averageMaxCurrentDay = averageMax(props.currentDay);
    const averageMinCurrentDay = averageMin(props.currentDay);

    return (
        <CurrentWeather>
            <NameSearch>
                {newCityEdit ? (
                    <div className="new-city">
                        <input
                            placeholder={props.place}
                            ref={input => {
                                if (input) {
                                    this.input = input;
                                    input.focus();
                                }
                            }}
                            onKeyUp={event => {
                                if (event.key === 'Enter') {
                                    event.target.value !== '' && props.getWeather(event.target.value);
                                }
                            }}
                            type="text"
                        />
                        <span>
                            <i
                                onClick={() => this.input.value !== '' && props.getWeather(this.input.value)}
                                className="fa fa-crosshairs"
                            />
                            <i onClick={toggleEditMode} className="fa fa-times" />
                        </span>
                    </div>
                ) : (
                    <div className="text" onDoubleClick={toggleEditMode}>
                        <div>
                            <span>{props.place}</span>
                            <i onClick={toggleEditMode} className="fa fa-pencil" />
                        </div>
                        <div>{props.currentDay[0].weather[0].main}</div>
                    </div>
                )}
            </NameSearch>
            <div className="temperature">
                <div>
                    <img
                        src={weatherIcon(props.currentDay[0].weather[0].id, new Date().getHours())}
                        alt={props.currentDay[0].weather[0].main}
                    />
                </div>
                <div id="max-temp">{averageMaxCurrentDay}&#0176; </div>
                <div id="min-temp">{averageMinCurrentDay}&#0176; </div>
            </div>
        </CurrentWeather>
    );
}

export default Preview;
