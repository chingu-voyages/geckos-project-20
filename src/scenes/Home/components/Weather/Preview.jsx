import React, { Component } from 'react';
import { NameSearch, CurrentWeather } from './StyledComponents';

class Preview extends Component {
    constructor(props){
        super(props);
        this.state = {
            newCityEdit: false,
        }
    }

    toggleEditMode = () => {
        this.setState( prevState => ({
            newCityEdit: !prevState.newCityEdit
        }))
    }

    render(){
        return (
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
                                    event.target.value != '' &&
                                    this.props.getWeather(event.target.value);
                                }
                            }} 
                            type="text"/>
                            <span>
                                <i onClick={() => this.input.value!== '' && this.props.getWeather(this.input.value)} className="fa fa-crosshairs"></i>
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
            )
    }
}

export default Preview;