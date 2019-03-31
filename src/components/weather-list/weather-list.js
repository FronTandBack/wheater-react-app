import React, { Component } from "react";
import moment from "moment";
import "./weather-list.css";

const ShowWeather = props => {
  console.log(props);
  const kelvinK = 273.15;
  const date = moment.unix(props.dt / 1000).format("DD MMM YYYY hh:mm a");
  const humidity = props.humidity;
  const condition = props.weather[0].description;
  const temperature = props.temp.day;
  return (
    <div class="list-inner">
      <div className="list-title">
        Temperature: {(temperature - kelvinK).toFixed(2)}
      </div>
      <div className="list-content">
        Conditoin: {condition} | Humidity: {humidity}
      </div>
      <div className="list-date">{date}</div>
    </div>
  );
};

let id = 1;

const WeatherList = props => {
  const { data } = props;
  const items = data.list.map(item => {
    return (
      <div key={++id} className="list-card">
        <ShowWeather {...item} />
      </div>
    );
  });
  return (
    <div>
      <h3 class="list-title">
        {data.city.name} | {data.city.country}
      </h3>
      <div className="list">{items}</div>
    </div>
  );
};

export default WeatherList;
