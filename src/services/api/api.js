const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const DEFAULT_QUERY = 'london';


export async function getWeather() {
  
  console.log("hi!");
  return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_QUERY}&units=metric&type=accurate&mode=json&APPID=${API_KEY}`);
  
}

/* 
        export async function getWeather() {
  console.log("hi!");
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