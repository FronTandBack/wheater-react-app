import React from "react";

const Weather = props => {
  // Get props from Forecast compoenent and show
  const {
    city,
    country,
    temperature,
    humidity,
    description,
    time,
    error,
    unit,
    refreshData
  } = props;

  return (
    <div>
      <div className="row">
        <div className="collection col s12">
          {city && country && (
            <p className="collection-header">
              <h4>
                {city}, {country}
              </h4>
            </p>
          )}
          {props.temperature && (
            <p className="collection-item">
              Temperature:
              <span className="badge">
                {unit === "celsius"
                  ? temperature + " C"
                  : ((temperature * 9) / 5 + 32).toFixed(2) + " F"}
              </span>
            </p>
          )}
          {props.humidity && (
            <p className="collection-item">
              Humidity:
              <span className="badge"> {humidity} </span>
            </p>
          )}
          {description && (
            <p className="collection-item">
              Conditions:
              <span className="badge"> {description} </span>
            </p>
          )}
          {time && (
            <p className="collection-item">
              Time:
              <span className="badge"> {time} </span>
            </p>
          )}
          {error && <p className="card-title">{error}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col s5">
          <button onClick={refreshData} className="btn-large left">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
