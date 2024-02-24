// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        {/* App Logo - You can replace 'YourLogo.png' with your actual logo */}
        <Link to="/">
          <img src="youtube.png" alt="App Logo" className="logo" />
        </Link>
      </div>
      <div className="right">
        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Signup</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add a conditional rendering for Logout based on user authentication */}
          {/* <li>
            <Link to="/logout">Logout</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
