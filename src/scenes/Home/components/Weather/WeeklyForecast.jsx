import React from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, Day, NameSearch } from './StyledComponents';

const WeeklyForecast = (props) => {

    const kids = () => {
       return [1,2,3,4,5].map((day, index) => {
           return <Day> {index} </Day>
       })
    }
   return (
        <Wrapper>
           <CurrentWeather>
                <NameSearch>
                    <div>Name</div>
                    <div>Weather Description</div>
                </NameSearch>
                <div className="temperature">
                    <div className="temperature-data">
                        <img src="" alt="Cloud"/>
                    </div>
                    <div>37 &#0176; </div>
                    <div>26 &#0176; </div>
                </div>
           </CurrentWeather>

           <WeeklyWeather>
                {kids()}
           </WeeklyWeather>
        </Wrapper>
   )
}   

export default WeeklyForecast;