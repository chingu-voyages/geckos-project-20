import React, { Component } from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, NameSearch } from './StyledComponents';
import Day from './Day';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';



class WeeklyForecast extends Component {

    constructor(props){
        super(props);
        this.state = {
            daysArray: [],
            currentDay: []
        }

    }

    updateCurrentDay = (dayId) => {
        console.log('DayId: ',dayId);
        this.setState({
            currentDay: this.state.daysArray[dayId]
        })
    }

    createDaysArray = (weatherData) => {

        console.log('WeatherData List: ', weatherData)

        let endResult = [];
        let oneDay = [];
        let currentDay = new Date();

       for(let period of weatherData){
            let periodDate = new Date(period.dt_txt);
            if (this.sameDay(periodDate, currentDay)){
                oneDay.push(period);
            } else {
                endResult.push(oneDay);
                oneDay = [];
                oneDay.push(period);
                currentDay.setDate(currentDay.getDate() + 1);
            }
        }
        
        endResult.push(oneDay);
        return endResult;
    }

    sameDay = (date1, date2) => {
        return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
    }

    async componentDidMount(){
        console.log('CurrentWeatherFrom props: ', this.props.currentWeather );
        console.log('Days Array', this.createDaysArray(this.props.weeklyForecast));
      try {
       this.setState({
           daysArray: this.createDaysArray(this.props.weeklyForecast), 
       }) 
        console.log('ER',this.state.daysArray);
      } catch (e){
          console.warn('Converting dateArray error: ', e);
      }
    }
    days = () => {
        return this.state.daysArray.map((day, index) => {
            if(index === 5) return;
            
            return <Day key={day.length + index}
                        dayArray={this.state.currentDay}
                        updateCurrentDay={this.updateCurrentDay}
                        day={"Name"}
                        iconSrc={this.props.currentWeatherImgSrc}
                        iconAlt="Cloud"
                        maxTemp={37}
                        minTemp={26}
                        dayId={index}
            /> 
        })
     }
    render(){

       
        return (
             <Wrapper>
                <Preview 
                getWeather={this.props.getWeather}
                currentWeather={this.props.currentWeatherImgSrc}
                />
                <WeeklyWeather>
                     {this.days}
                </WeeklyWeather>
             </Wrapper>
        )
    }
}   

export default WeeklyForecast;