import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = () => {
    // Replace with actual registration logic
    if (email && password) {
      // Successful registration, redirect to the login page
      history.push("/login");
    } else {
      setError("Email and password are required");
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegistration}>Register</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Registration;
