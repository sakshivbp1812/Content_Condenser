import React from "react";
import { Link } from "react-router-dom";
// import logo from "./youtube.png"; // Your YouTube logo image
import './Landing.css'; // Import the CSS file for styling

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="top-bar">
          {/* <img src={logo} alt="YouTube Logo" className="logo" /> */}
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="title">
          {/* <h1>Get Started with YouTube Summarizer</h1> */}
        </div>
      </header>
      <button className="get-started-button">Get Started</button>
    </div>
  );
};

export default Landing;
