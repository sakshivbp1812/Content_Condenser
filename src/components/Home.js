// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar2";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="home-header">
        <div className="app-logo">
        <img src="src/components/youtube.png" alt="App Logo" className="logo" />
        </div>
        <div className="video-search">
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            className="search-input"
          />
          <button className="search-button">Condense</button>
        </div>
      </header>
    </div>
  );
};

export default Home;
