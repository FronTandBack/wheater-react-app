import React, { Component } from "react";
import Forecast from "../forecast";
import WeatherService from "../../services/weather-service";
export default class App extends Component {
  // state = {
  //   weatherService: new WeatherService()
  // };

  weatherService = new WeatherService();

  render() {
    // console.log(this.weatherService.getTest());
    return <Forecast weatherService={this.weatherService} />;
  }
}
