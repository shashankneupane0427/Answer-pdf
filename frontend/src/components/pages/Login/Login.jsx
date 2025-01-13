import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate("/home");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            aria-label="Email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            aria-label="Password"
            required
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <Link to="/forgot-password" className="forgot-password">
          Forgot password?
        </Link>
        <div className="signup-link">
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
