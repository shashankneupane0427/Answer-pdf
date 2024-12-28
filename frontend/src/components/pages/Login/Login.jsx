import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // For navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Simulate login logic
    const isAuthenticated = true; // Replace with your actual authentication logic

    if (isAuthenticated) {
      navigate("/home"); // Redirect to the Home page after successful login
    } else {
      alert("Invalid login credentials"); // Handle failed login attempts
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
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="signup-link">
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
