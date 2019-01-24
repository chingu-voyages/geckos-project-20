import React, { Component } from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, NameSearch } from './StyledComponents';
import Day from './Day';
import 'font-awesome/css/font-awesome.css';



class WeeklyForecast extends Component {

    constructor(props){
        super(props);
        this.state = {
            newCityEdit : false,
            daysArray: [],
        }

    }

    toggleEditMode = () => {
        this.setState({
            daysArray: this.createDaysArray(this.props.weeklyForecast), 
        });
        console.log('DAYS ARRAY', this.createDaysArray(this.props.weeklyForecast));
        console.log('CurrentWeatherFrom props: ', this.props.currentWeather );
        this.setState( prevState => ({
            newCityEdit: !prevState.newCityEdit
        }))
    }
    getNewWeather = (cityName) => {

        if (cityName !== ''){
            this.props.getWeather(cityName);
            this.toggleEditMode();
        }
    }

    updateCurrent = (dayId) => {
        console.log('DayId: ',dayId);
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

    render(){

        const days = () => {
            return [1,2,3,4,5].map((day, index) => {
                return <Day key={index}
                             updateCurrent={this.updateCurrent}
                             day={"Name"}
                             iconSrc={this.props.currentWeatherImgSrc}
                             iconAlt="Cloud"
                             maxTemp={37}
                             minTemp={26}
                             dayId={index}
                /> 
            })
         }
        return (
             <Wrapper>
                <CurrentWeather>
                     <NameSearch>
                         
                            { this.state.newCityEdit ? (
                               <div className="new-city">
                                    <input 
                                    ref={(input) => {
                                        if(input) {
                                            this.input=input;
                                            input.focus();
                                        }
                                    }} 
                                    onKeyUp={(event) => {
                                        if (event.key === 'Enter') {
                                            this.getNewWeather(event.target.value);
                                        }
                                    }} 
                                    type="text"/>
                                    <span>
                                        <i onClick={() => this.getNewWeather(this.input.value)} className="fa fa-crosshairs"></i>
                                        <i onClick={this.toggleEditMode} className="fa fa-times"></i>
                                    </span>
                               </div>
                            ) : (
                                <div className="text" onDoubleClick={this.toggleEditMode}>
                                    <div>
                                        <span>Text</span> <i onClick={this.toggleEditMode} className="fa fa-pencil"></i>
                                    </div>
                                    <div>Weather Description</div>
                                </div>
                            )
                            }
                     </NameSearch>
                     <div className="temperature">
                         <div>
                             <img src={this.props.currentWeatherImgSrc} alt="Cloud"/>
                         </div>
                         <div id="max-temp">37&#0176; </div>
                         <div id="min-temp">26&#0176; </div>
                     </div>
                </CurrentWeather>
                <WeeklyWeather>
                     {days(this.props)}
                </WeeklyWeather>
             </Wrapper>
        )
    }
}   

export default WeeklyForecast;