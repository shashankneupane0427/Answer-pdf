import React from "react";
import { useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const { file } = location.state || {}; // Access the file passed from Home.jsx

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Arial', sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Summary Page</h1>
      {file ? (
        <>
          <p>File Name: {file.name}</p>
          <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>File Type: {file.type}</p>
          {/* Add logic to process and display the summary of the file here */}
        </>
      ) : (
        <p>No file was provided.</p>
      )}
    </div>
  );
};

export default Summary;
