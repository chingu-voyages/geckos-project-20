import ClearDayIcon from './../../../../images/weather-icons/01d.svg';
import ClearNightIcon from './../../../../images/weather-icons/01n.svg';
import CloudsDayIcon from './../../../../images/weather-icons/02d.svg';
import CloudsNightIcon from './../../../../images/weather-icons/02n.svg';
import DrizzleIcon from './../../../../images/weather-icons/03d.svg';
import OvercastIcon from './../../../../images/weather-icons/04d.svg';
import ShowerIcon from './../../../../images/weather-icons/09d.svg';
import RainIcon from './../../../../images/weather-icons/10d.svg';
import ThunderStormIcon from './../../../../images/weather-icons/11d.svg';
import SnowIcon from './../../../../images/weather-icons/13d.svg';
import MistIcon from './../../../../images/weather-icons/50d.svg';


// Meteoicons from https://icomoon.io and matched to weather description from https://openweathermap.org/weather-conditions 

/*
Comment from PR...Try making this not with if else , but you will have an object that will 
hold the range and name as a key value, and you will have to just loop over 
that object to get the value needed
*/

let weatherIdIconCodes = {
    day: {
        "0-232": ThunderStormIcon,
        "300-399": ShowerIcon,
        "500-599": RainIcon,
        "600-622": SnowIcon,
        "700-799": MistIcon,
        "800": ClearDayIcon, 
        "801": CloudsDayIcon,
        "802": DrizzleIcon,
        "803-804": OvercastIcon,
    },
    night: {
        "0-232": ThunderStormIcon,
        "300-399": ShowerIcon,
        "500-599": RainIcon,
        "600-622": SnowIcon,
        "700-799": MistIcon,
        "800": ClearNightIcon, 
        "801": CloudsNightIcon, 
        "802": DrizzleIcon,
        "803-804": OvercastIcon,
    }
};

//Expected to return a value at the end of function  array-callback-return 53

export function weatherIcon(weatherID, timeOfDay) {
    let icon;
    if (timeOfDay >= 6 && timeOfDay <= 18) {   
        Object.keys(weatherIdIconCodes.day).some(function (k) {
            let part = k.split('-');
            if(+weatherID >= part[0] && +weatherID <= (part[1] || part[0])) {
                icon = weatherIdIconCodes.day[k];
                return true;
            }
        });
    } else {
        Object.keys(weatherIdIconCodes.night).some(function (k) {
            let part = k.split('-');
            if(+weatherID >= part[0] && +weatherID <= (part[1] || part[0])) {
                icon = weatherIdIconCodes.night[k];
                return true;
            }
        });
    }
    return icon;
}

console.log(weatherIcon("800", 2));


export function weatherForecastIcon(weatherForecastId, timeOfDay) {

    let icon;
    if (timeOfDay >= 6 && timeOfDay <= 18) {   
        Object.keys(weatherIdIconCodes.day).some(function (k) {
            let part = k.split('-');
            if(+weatherForecastId >= part[0] && +weatherForecastId <= (part[1] || part[0])) {
                icon = weatherIdIconCodes.day[k];
                return true;
            }
        });
    } else {
        Object.keys(weatherIdIconCodes.night).some(function (k) {
            let part = k.split('-');
            if(+weatherForecastId >= part[0] && +weatherForecastId <= (part[1] || part[0])) {
                icon = weatherIdIconCodes.night[k];
                return true;
            }
        });
    }
    return icon;
}

console.log(weatherForecastIcon("800", 12));


/* PREVIOUS FUNCTIONS TO REMOVE IF NEW ONE BETTER...
export function weatherIcon(weatherId, timeOfDay) {

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
    } else if ((weatherId === 800) && (timeOfDay >= 6 && timeOfDay <= 18)) {
        return ClearDayIcon;
    } else if ((weatherId === 800) && (timeOfDay <= 5 || timeOfDay >= 19)) {
        return ClearNightIcon;    
    } else if ((weatherId === 801) && (timeOfDay >= 6 && timeOfDay <= 18)) {
        return CloudsDayIcon;
    } else if ((weatherId === 801) && (timeOfDay <= 5 || timeOfDay >= 19)) {
        return CloudsNightIcon; 
    } else if (weatherId === 802) {
        return DrizzleIcon;
    } else if (weatherId >= 803 && weatherId <= 804) {
        return OvercastIcon;
    }
};
  

export function weatherForecastIcon(weatherForecastId, timeOfDay) {

    
    if (weatherForecastId <= 232) {
        return ThunderStormIcon;
    } else if (weatherForecastId >= 300 && weatherForecastId <= 399) {
        return ShowerIcon;
    } else if (weatherForecastId >= 500 && weatherForecastId <= 599) {
        return RainIcon;
    } else if (weatherForecastId >= 600 && weatherForecastId <= 622) {
        return SnowIcon;
    } else if (weatherForecastId >= 700 && weatherForecastId <= 799) {
        return MistIcon;    
    } else if ((weatherForecastId === 800) && (timeOfDay >= 6 && timeOfDay <= 18)) {
        return ClearDayIcon;
    } else if ((weatherForecastId === 800) && (timeOfDay <= 5 || timeOfDay >= 19)) {
        return ClearNightIcon;    
    } else if ((weatherForecastId === 801) && (timeOfDay >= 6 && timeOfDay <= 18)) {
        return CloudsDayIcon;
    } else if ((weatherForecastId === 801) && (timeOfDay <= 5 || timeOfDay >= 19)) {
        return CloudsNightIcon; 
    } else if (weatherForecastId === 802) {
        return DrizzleIcon;
    } else if (weatherForecastId >= 803 && weatherForecastId <= 804) {
        return OvercastIcon;
    }
};
*/