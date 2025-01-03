import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  document.body.style.margin = "0";

  return (
    <header
      style={{
        backgroundColor: "#e6e6e6",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
    
      <h1
        style={{
          fontSize: "1.5rem",
          color: "green",
          margin: "0",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        Easy Notes
      </h1>

    
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "1rem",
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
                color: "inherit",
                fontWeight: "bold",
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
                color: "inherit",
                fontWeight: "bold",
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
                color: "inherit",
                fontWeight: "bold",
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
                color: "inherit",
                fontWeight: "bold",
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
                color: "inherit",
                fontWeight: "bold",
              }}
            >
              Support
            </Link>
          </li>

          
          <li>
            <Link to="/login">
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  padding: "0.4rem 1rem",
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
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid black",
                  padding: "0.4rem 1rem",
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
