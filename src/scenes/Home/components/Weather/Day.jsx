import React from 'react';
import { DayWrapper } from "./StyledComponents";

export const Day = (props) => {
    return(
        <DayWrapper onClick={() => { props.updateCurrent(props.dayId) }}>
            <div className="day">{props.day.toUpperCase()}</div>
            <div> <img src={props.iconSrc} alt={props.iconAlt}/></div>
            <div id="max-temp">{props.maxTemp}&#0176; </div>
            <div id="min-temp">{props.minTemp}&#0176; </div>   
        </DayWrapper>
    )
}

export default Day;