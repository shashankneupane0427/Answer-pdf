import React, { useState } from "react";
import "./Summary.css";

const Summary = ({ userName }) => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      date: new Date().toLocaleDateString(),
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="summary-container">
      <header className="summary-header">
        <div className="logo">Easy Notes</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-actions">
          <button className="upgrade-button">Upgrade</button>
          <div className="profile-dropdown">
            <button className="profile-button">{userName} ▼</button>
          </div>
        </div>
      </header>
      <main className="summary-main">
        <div className="file-controls">
          <label htmlFor="file-upload" className="upload-button">
            Upload
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <button className="ask-all-button">Ask all</button>
        </div>
        <div className="file-list">
          <h3>All Files</h3>
          {files.length === 0 ? (
            <p>No files uploaded yet.</p>
          ) : (
            <ul>
              {files.map((file, index) => (
                <li key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <span className="file-date">{file.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Summary;
