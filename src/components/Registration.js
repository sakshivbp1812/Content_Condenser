import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests
import Navbar from "./Navbar";
import "./Registration.css";

const Registration = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        email,
        password,
        confirm_password: confirmPassword,
      });
      if (response.status === 201) {
        setError("");
        history.push("/login"); // Redirect to login page
      }
    } catch (error) {
      setError(error.response.data.error || "An error occurred");
    }
  };

  return (
    <div className="registration-background">
      <Navbar />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="button" onClick={handleRegistration}>Register</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Registration;
