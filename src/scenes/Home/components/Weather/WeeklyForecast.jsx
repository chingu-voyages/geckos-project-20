import React, { Component } from 'react';
import { Wrapper, WeeklyWeather } from './StyledComponents';
import Day from './Day';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';

class WeeklyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: this.props.currentDay, //possible React anti-pattern
        };
    }

    updateCurrentDay = dayId => {
        console.log('DayId: ', dayId);
        this.setState(
            {
                currentDay: dayId,
            },
            console.log('currentDatProlonged = ', this.state.currentDay),
        );
    };

    async componentDidMount() {
        try {
        } catch (e) {}
    }
    getDays = () => {
        return this.props.weeklyForecast.map((day, index) => {
            if (index === 5) return;
            console.log('Each day: ', day.length, 'at ', index);
            return (
                <Day
                    key={day.length + index}
                    updateCurrentDay={this.updateCurrentDay}
                    dayData={day}
                    //iconAlt="Cloud"
                    place={this.props.place}
                    dayId={index}
                />
            );
        });
    };
    render() {
        const days = this.getDays();
        return (
            <Wrapper>
                <Preview
                    place={this.props.place}
                    getWeather={this.props.getWeather}
                    currentDay={this.state.currentDay}
                    currentWeatherImgSrc={this.props.currentWeatherImgSrc}
                />
                <WeeklyWeather>{days}</WeeklyWeather>
            </Wrapper>
        );
    }
}

export default WeeklyForecast;
