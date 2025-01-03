import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Summary.css";

const Summary = ({ userName }) => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPdf();
  });

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      setFiles(result.data.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      date: new Date().toLocaleDateString(),
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf(); // Fetch the latest files after upload
        navigate("/Summary");
      } else {
        alert("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during upload.");
    }
  };

  useEffect(() => {
    fetchPdfNames();
  });

  const fetchPdfNames = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-pdf-names");
      setFiles(result.data.data);
    } catch (error) {
      console.error("Error fetching PDF names:", error);
    }
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
            onChange={(e) => {
              setFile(e.target.files[0]);
              handleFileUpload(e);
            }}
            style={{ display: "none" }}
          />
          <button className="ask-all-button">Ask all</button>
        </div>
        <form className="formStyle" onSubmit={submitImage}>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <div className="file-list">
          <h3>All Files</h3>
          {files.length === 0 ? (
            <p>No files uploaded yet.</p>
          ) : (
            <ul>
              {files.map((file, index) => (
                <li key={index} className="file-item">
                  <span className="file-name">{file.title}</span>
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
