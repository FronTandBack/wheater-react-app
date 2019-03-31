import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="forecast">
      <div className="nav-wrapper">
        <span className="brand-logo">Weather App</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/weather-list">Test weather list</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
