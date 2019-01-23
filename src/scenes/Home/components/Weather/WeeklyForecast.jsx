import React from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, Day } from './StyledComponents';

const WeeklyForecast = (props) => {

    const kids = () => {
       return [1,2,3,4,5].map((day, index) => {
           return <Day> {index} </Day>
       })
    }
   return (
        <Wrapper>
           <CurrentWeather>

           </CurrentWeather>

           <WeeklyWeather>
                {kids()}
           </WeeklyWeather>
        </Wrapper>
   )
}   

export default WeeklyForecast;