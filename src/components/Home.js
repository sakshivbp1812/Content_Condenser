import React from "react";
import { Link } from "react-router-dom";
import logo from "./youtube.png"; // Your YouTube logo image
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="top-bar">
                    <img src={logo} alt="YouTube Logo" className="logo" />
                    <nav>
                        <ul className="nav-links">
                            {/* <li>
                                <Link to="/">Home</Link>
                            </li> */}
                            <li>
                                <Link to="/summaries">Summaries</Link>
                            </li>
                            {/* <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/registration">Registration</Link>
                            </li> */}
                            <li>
                                <Link to="/registration">Logout</Link>
                            </li>
                            {/* <li>
                                <Link to="/about">About</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
                <div className="title">
                    <h1>Content Condenser</h1>
                    <p className="quote">A powerful tool that can help you Save Time, Learn More, and Stay Informed.</p>
                </div>
            </header>
            <div className="video-search">
                <input
                    type="text"
                    placeholder="Enter YouTube video URL"
                    className="search-input" // Add a class for styling
                />
                <button className="search-button">Summarize</button>
            </div>
        </div>
    );
};

export default Home;
