import React, { Component } from "react";
import "./settings.css";

const Settings = props => {
  const activeCelsius = props.active ? "active" : "";
  const activeFahr = props.active ? "" : "active";
  console.log("A", activeCelsius);
  return (
    // Setting values to component Forecast then click to Change Locations
    <div className="settings">
      <h1 className="header">Settings</h1>
      <div className="row">
        <form className="col s12" onSubmit={props.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" name="city" placeholder="City..." />
            </div>

            <div className="input-field col s12">
              <input type="text" name="country" placeholder="Country..." />
            </div>

            <div className="input-field col s12">
              <button className="btn-large">Change Location</button>
            </div>
          </div>
        </form>
        <div className="input-field col s12">
          <button
            className={"settings-btn btn-large " + activeCelsius}
            onClick={() => {
              // Change units
              props.onToggle("celsius");
              props.changeUnit("clesius");
            }}
          >
            Celsius
          </button>
          <button
            className={"btn-large " + activeFahr}
            onClick={() => {
              props.onToggle("fahr");
              props.changeUnit("fahr");
            }}
          >
            Fahrengeit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
