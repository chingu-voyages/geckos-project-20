import React, { useState } from 'react';
import { Wrapper, WeeklyWeather } from './weather.scmp';
import Day from './Day';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';

function WeeklyForecast(props) {
    const [currentDay, setCurrentDay] = useState(props.currentDay);

    const updateCurrentDay = dayId => {
        console.log('DayId: ', dayId);
        setCurrentDay(dayId);
    };

    const getDays = () => {
        return props.weeklyForecast.map((day, index) => {
            if (index === 5) return;
            console.log('Each day: ', day.length, 'at ', index);
            return (
                <Day
                    key={day.length + index}
                    updateCurrentDay={updateCurrentDay}
                    dayData={day}
                    //iconAlt="Cloud"
                    place={props.place}
                    dayId={index}
                />
            );
        });
    };
    const days = getDays();
    return (
        <Wrapper>
            <Preview
                place={props.place}
                getWeather={props.getWeather}
                currentDay={currentDay}
                currentWeatherImgSrc={props.currentWeatherImgSrc}
            />
            <WeeklyWeather>{days}</WeeklyWeather>
        </Wrapper>
    );
}

export default WeeklyForecast;
