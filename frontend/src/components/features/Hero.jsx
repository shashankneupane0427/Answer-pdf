import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    // Redirect to Summary page with the file in navigation state
    navigate("/summary", { state: { file } });
  };

  return (
    <section
      style={{
        width: "100vw",
        height: "80vh",
        backgroundColor: "#7C89CA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0",
        margin: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
          padding: "30px 20px",
          width: "50%",
          height: "50%",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          overflow: "hidden",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="hover-container"
      >
        <span className="line top"></span>
        <span className="line right"></span>
        <span className="line bottom"></span>
        <span className="line left"></span>

        {/* Integrated Form Section */}
        <form className="formStyle" onSubmit={handleFileUpload}>
          <h4 style={{ color: "#FFF", fontWeight: "bold", fontSize: "1.5rem" }}>
            Upload File
          </h4>
          <br />
          <input
            type="text"
            placeholder="Enter a Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "80%",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <input
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              width: "80%",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "1rem",
              backgroundColor: "#FFF",
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#007BFF",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Submit
          </button>
        </form>

        <p
          style={{
            fontSize: "1.2rem",
            color: "white",
            marginTop: "20px",
          }}
        >
          Make sure to upload your files securely and keep your documents organized.
        </p>
      </div>

      <style>
        {`
          .hover-container {
            position: relative;
            overflow: hidden;
          }
          .hover-container .line {
            position: absolute;
            background-color: #FFF;
            transition: transform 0.4s ease;
          }
          .hover-container .line.top,
          .hover-container .line.bottom {
            height: 3px;
            width: 100%;
            left: 0;
          }
          .hover-container .line.top {
            top: 0;
            transform: scaleX(0);
          }
          .hover-container .line.bottom {
            bottom: 0;
            transform: scaleX(0);
          }
          .hover-container .line.left,
          .hover-container .line.right {
            width: 3px;
            height: 100%;
            top: 0;
          }
          .hover-container .line.left {
            left: 0;
            transform: scaleY(0);
          }
          .hover-container .line.right {
            right: 0;
            transform: scaleY(0);
          }
          .hover-container:hover .line.top,
          .hover-container:hover .line.bottom {
            transform: scaleX(1);
          }
          .hover-container:hover .line.left,
          .hover-container:hover .line.right {
            transform: scaleY(1);
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
