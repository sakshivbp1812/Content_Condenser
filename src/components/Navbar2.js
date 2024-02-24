// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">
          <img src="youtube.png" alt="App Logo" className="logo" />
        </Link>
      </div>
      <div className="right">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/summaries">History</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add a new link for user profile */}
          <li>
            <div className="user-profile">
              <img src="userProfileImage.png" alt="User Profile" className="profile-image" />
              <div className="options-slider">
                <Link to="/settings">Settings</Link>
                <Link to="/signout">Signout</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
