import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from "moment";
import Settings from "../settings";
import Weather from "../weather";
import WeatherList from "../weather-list";
import Header from "../header";
import "./forecast.css";
export default class Forecast extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: "Please enter the values.",
    time: null,
    unit: "celsius",
    active: true
  };

  onToggle = value => {
    console.log("setting");
    this.setState(() => {
      return {
        active: value === "celsius" ? true : false
      };
    });
  };

  getWeather = (coord = true, city = null, country = null) => {
    const { weatherService } = this.props;
    console.log("It's work");
    if (navigator.geolocation) {
      // Using gelocation API
      navigator.geolocation.getCurrentPosition(
        // Callback async function call methods from weather-services
        async position => {
          const { latitude, longitude } = position.coords;
          // Get coord or city country in  arguments we get true or false then click submit
          const data = coord
            ? await weatherService.getWithCoord(latitude, longitude)
            : await weatherService.getCityAndCountry(city, country);
          // console.log("Data:", data);
          if (data && data.cod !== "404") {
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              time: moment().format("LLL"),
              error: ""
            });
          } else {
            this.setState({
              temperature: null,
              city: null,
              country: null,
              humidity: null,
              description: null,
              time: null,
              error: "Please enter the values."
            });
          }
        },

        err => {
          if (err) console.log(err);
        }
      );
    } else {
      throw Error("Your browser does not support geolocation");
    }
  };

  // Function to refresh data from API
  refreshData = () => {
    this.getWeather();
  };

  componentDidMount() {
    console.log("Component Did Mount");
    // Using then apps first running
    this.getWeather();
  }

  changeUnit = unit => {
    // Then click this function start and change
    console.log("Change");
    this.setState(({ unit }) => {
      return { unit: unit === "celsius" ? "fahr" : "celsius" };
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Submit");
    this.getWeather(false, e.target.city.value, e.target.country.value);
  };

  render() {
    const { weatherService } = this.props;
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            component={() => (
              <Weather {...this.state} refreshData={this.refreshData} />
            )}
          />

          <Route
            path="/weather-list"
            component={() => <WeatherList data={weatherService.getTest()} />}
          />
          <Route
            path="/settings"
            component={() => (
              <Settings
                onSubmit={this.onSubmit}
                changeUnit={this.changeUnit}
                onToggle={this.onToggle}
                active={this.state.active}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
