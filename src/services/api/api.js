const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const DEFAULT_QUERY = 'london';


navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("got position");
    console.log(position);

    var coords = {lat: "", lon: ""};
    coords.lon = position.coords.latitude;
    coords.lon = position.coords.longitude;
    console.log(coords);
  },
  (error) => alert(error.message),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
);

/*
function success(position) {
  var coords = position.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`More or less ${coords.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);
*/ 

export async function getWeather() {

  //let lat = position.coords.latitude;
  //let lon = position.coords.longitude;

  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`;
  console.log(url);
  return await fetch(url);

  //return await fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + coords.latitude + "&lon=" + coords.longitude + "&units=metric&type=accurate&mode=json&APPID="${API_KEY});
  
  //return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`); 
  
  //THIS WORKS AS LOCATION PASSED AS VARIABLE AND DOES NOT RELY ON GETTING LOCATION BEFORE CALLING... CALLBACK FUNCTION NEEDED?
  //return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_QUERY}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`); 
}


/* 
        export async function getWeather() {
  return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_QUERY}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`)
  .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ..");
      }
    })
    .then(data => ({ weather: data, isLoading: false }))
    .catch(error => ({ error, isLoading: false })); 
}
*/
