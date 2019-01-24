import React from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, Day, NameSearch } from './StyledComponents';

const WeeklyForecast = (props) => {

    const days = () => {
       return [1,2,3,4,5].map((day, index) => {
           return <Day key={index}> 
                <div className="day">Name</div>
                <div> <img src={props.currentWeatherImgSrc} alt="Cloud"/></div>
                <div id="max-temp">37&#0176; </div>
                <div id="min-temp">26&#0176; </div>   
            </Day>
       })
    }
   return (
        <Wrapper>
           <CurrentWeather>
                <NameSearch>
                    <div>
                        <div>Text</div>
                        <input type="text"/>
                    </div>
                    <div>Weather Description</div>
                </NameSearch>
                <div className="temperature">
                    <div>
                        <img src={props.currentWeatherImgSrc} alt="Cloud"/>
                    </div>
                    <div id="max-temp">37&#0176; </div>
                    <div id="min-temp">26&#0176; </div>
                </div>
           </CurrentWeather>
           <WeeklyWeather>
                {days()}
           </WeeklyWeather>
        </Wrapper>
   )
}   

export default WeeklyForecast;