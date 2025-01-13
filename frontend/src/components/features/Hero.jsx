import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">AI Meets Your Knowledge Base</h1>
        <p className="hero-subtitle">
          Ask questions across all your files and get answers you can trust.
        </p>
        <button className="hero-button">Try for Free</button>
      </div>
    </section>
  );
}

export default Hero;
