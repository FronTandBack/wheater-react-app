import data from "./data";
export default class WeatherService {
  _apiKey = "7c7ce444ebeb13c30d565a2f11676d7b";

  // asyn functions to get information from openweathermap
  getWithCoord = async (latitude, longitude) => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        this._apiKey
      }&units=metric`
    );
    return api_call.json();
  };

  getCityAndCountry = async (city, country) => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${
        this._apiKey
      }&units=metric`
    );
    return api_call.json();
  };

  getWeatherFrom16Days = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&appid=${
        this._apiKey
      }&units=metric&cnt=7`
    );

    return api_call.json();
  };

  getTest() {
    return data;
  }
}
