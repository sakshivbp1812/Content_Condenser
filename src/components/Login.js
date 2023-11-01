import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Replace with actual credential validation logic
    if (email === "user@example.com" && password === "password123") {
      // Valid credentials, redirect to the dashboard or home page
      history.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        Don't have an account? <a href="/registration">Register here</a>
      </p>
    </div>
  );
};

export default Login;
