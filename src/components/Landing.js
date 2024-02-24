// Landing.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar /> {/* Include the Navbar component */}
      <header className="landing-header">

      </header>
      <button className="get-started-button">Get Started</button>
    </div>
  );
};

export default Landing;
