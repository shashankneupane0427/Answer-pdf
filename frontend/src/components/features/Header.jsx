import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  document.body.style.margin = "0";

  return (
    <header
      style={{
        backgroundColor: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            color: "#333",
            margin: "0",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
          }}
        >
          Easy Notes
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "1.5rem",
            margin: "0",
            padding: "0",
            alignItems: "center",
          }}
        >
          <li>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Help
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Support
            </Link>
          </li>
          {/* Buttons */}
          <li>
            <Link to="/login">
              <button
                style={{
                  backgroundColor: "#f3f3f3",
                  color: "#333",
                  border: "1px solid #ddd",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                Log In
              </button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button
                style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
