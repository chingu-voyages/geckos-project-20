import React from 'react';
import { DayWrapper } from "./StyledComponents";
import { weatherIcon } from './WeatherIcon';


const getAverageMax = dayArray =>
    Math.round(
      dayArray.reduce((acc, day) => (acc += day.main.temp_max), 0) /
        dayArray.length
    );
const getAverageMin = dayArray =>
    Math.round(
      (
        dayArray.reduce((acc, day) => (acc += day.main.temp_min), 0) /
        dayArray.length
      ).toFixed(0)
    );
export const Day = (props) => {
    const averageMax = getAverageMax(props.dayData);
    const averageMin = getAverageMin(props.dayData);
    console.log(new Date().getHours());
    return(
        <DayWrapper onClick={() => { 
                props.updateCurrentDay(props.dayData);
                console.log('DayArray: ', props.dayData);
            }}>
            <div className="day">{"Petok"}</div>
            <div> <img src={weatherIcon(props.dayData[0].weather[0].id, new Date().getHours())} alt={props.dayData[0].weather[0].main}/></div>
            <div id="max-temp">{averageMax}&#0176; </div>
            <div id="min-temp">{averageMin}&#0176; </div>
            <div style={{display:'none'}}>{props.place }</div>   
        </DayWrapper>
    )
}

export default Day;