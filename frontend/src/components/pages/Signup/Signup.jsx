import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaTasks, FaPenFancy } from "react-icons/fa";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      {/* Icons Section */}
      <div className="signup-illustration">
        <h1>Welcome to Easy Notes</h1>
        <p>Organize your thoughts and ideas with ease. Join us today!</p>
        <div className="icon-container">
          <FaLightbulb className="signup-icon" title="Creative Ideas" />
          <FaTasks className="signup-icon" title="Organize Tasks" />
          <FaPenFancy className="signup-icon" title="Write Freely" />
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="signup-box">
        <h2>Create an Account</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            aria-label="Full Name"
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            aria-label="Confirm Password"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
