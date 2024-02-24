// Login.js
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password123") {
      history.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Username or Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="small-text">
          <Link to="/password-reset">Forgot your password?</Link>
        </p>
        <p className="small-text">
          Don't have an account? <Link to="/registration">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
