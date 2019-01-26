import React, { Component } from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, NameSearch } from './StyledComponents';
import Day from './Day';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';



class WeeklyForecast extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentDay: 5
        }

    }

    updateCurrentDay = (dayId) => {
        console.log('DayId: ',dayId);
        this.setState({
            currentDay: dayId
        })
        console.log('currentDat = ', this.state.currentDay);
        console.log('currentDat = ', this.state.currentDay);

        setTimeout(() => { console.log('currentDatProlonged = ', this.state.currentDay);}, 0)
    }

    

    async componentDidMount(){
      try {
       
      } catch (e){
      }
    }
    getDays = () => {
        return this.props.weeklyForecast.map((day, index) => {
            if(index === 5) return;
                console.log('Each day: ', day.length, 'at ', index);
            return <Day key={day.length + index}
                        updateCurrentDay={this.updateCurrentDay}
                        dayData={day}
                        day={"Name"}
                        iconSrc={this.props.currentWeatherImgSrc}
                        iconAlt="Cloud"
                        maxTemp={day.length>1 ? day[0].main.temp : 1337}
                        minTemp={26}
                        dayId={index}
            /> 
        })
     }
    render(){
        const days = this.getDays();
       
        return (
             <Wrapper>
                <Preview 
                getWeather={this.props.getWeather}
                currentWeather={this.props.currentWeatherImgSrc}
                />
                <WeeklyWeather>
                     {days}
                </WeeklyWeather>
             </Wrapper>
        )
    }
}   

export default WeeklyForecast;