import React, { Component } from 'react';
import { Wrapper, CurrentWeather, WeeklyWeather, Day, NameSearch } from './StyledComponents';

const days = (props) => {
   return [1,2,3,4,5].map((day, index) => {
       return <Day key={index}> 
            <div className="day">Name</div>
            <div> <img src={props.currentWeatherImgSrc} alt="Cloud"/></div>
            <div id="max-temp">37&#0176; </div>
            <div id="min-temp">26&#0176; </div>   
        </Day>
   })
}
class WeeklyForecast extends Component {

    constructor(props){
        super(props);
        this.state = {
            newCityEdit : false
        }

    }

    toggleEditMode = () => {
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

    render(){
        return (
             <Wrapper>
                <CurrentWeather>
                     <NameSearch>
                         
                             
                            { this.state.newCityEdit ? (
                                <input 
                                ref={(input) => input && input.focus()} 
                                onKeyUp={(event) => {
                                    if (event.key === 'Enter') {
                                        this.getNewWeather(event.target.value);
                                    }
                                }} 
                                type="text"/>
                            ) : (
                                <div className="text" onDoubleClick={this.toggleEditMode}>
                                    <div>
                                        <span>Text</span> <i class="fa fa-pencil-alt"></i>
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