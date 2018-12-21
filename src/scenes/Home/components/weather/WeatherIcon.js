import ClearIcon from './../../../../images/weather-icons/01d.svg';
import CloudsIcon from './../../../../images/weather-icons/02d.svg';
import DrizzleIcon from './../../../../images/weather-icons/03d.svg';
import OvercastIcon from './../../../../images/weather-icons/04d.svg';
import ShowerIcon from './../../../../images/weather-icons/09d.svg';
import RainIcon from './../../../../images/weather-icons/10d.svg';
import ThunderStormIcon from './../../../../images/weather-icons/11d.svg';
import SnowIcon from './../../../../images/weather-icons/13d.svg';
import MistIcon from './../../../../images/weather-icons/50d.svg';


// Meteoicons from https://icomoon.io and matched to weather description from https://openweathermap.org/weather-conditions 

export function weatherIcon(weatherId) {

    if (weatherId <= 232) {
        return ThunderStormIcon;
    } else if (weatherId >= 300 && weatherId <= 399) {
        return ShowerIcon;
    } else if (weatherId >= 500 && weatherId <= 599) {
        return RainIcon;
    } else if (weatherId >= 600 && weatherId <= 622) {
        return SnowIcon;
    } else if (weatherId >= 700 && weatherId <= 799) {
        return MistIcon;    
    } else if (weatherId === 800) {
        return ClearIcon;
    } else if (weatherId === 801) {
        return CloudsIcon;
    } else if (weatherId === 802) {
        return DrizzleIcon;
    } else if (weatherId >= 803 && weatherId <= 804) {
        return OvercastIcon;
    }

};
  
